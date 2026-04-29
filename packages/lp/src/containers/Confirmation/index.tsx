import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import qrcode from "qrcode";
import { STATUSES } from "../../constants";

const request = (url: string, data = {}, init: RequestInit = {}) =>
  fetch(url, {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    method: "post",
    body: JSON.stringify(data, null, 2),
    ...init,
  }).then((res) => res.json());

function connect(
  onReady: () => void,
  { abortable = true, pause = 1000, ...params } = {},
) {
  let timeoutId: ReturnType<typeof setTimeout>;
  let aborted: boolean;
  let attempt = 0;
  let controller: AbortController;

  function loop() {
    aborted = false;
    controller = (abortable && new AbortController()) || null;
    timeoutId = setTimeout(
      () =>
        request(
          "/lp",
          { attempt: ++attempt, ...params },
          { signal: controller?.signal },
        )
          .then(({ attempt, status }) => {
            console.log({ aborted, attempt, status });
            if (aborted) {
              return;
            }
            switch (status) {
              case STATUSES.PENDING:
                return loop();
              case STATUSES.READY:
                return onReady();
            }
          })
          .catch((e) => {
            console.error(e);
          }),
      pause,
    );
  }

  function abort() {
    console.log(["abort"]);
    aborted = true;
    controller?.abort();
    clearTimeout(timeoutId);
  }

  loop();

  return () => {
    abort();
  };
}

function randomBytes(size: number) {
  const array = new Uint8Array(size);
  crypto.getRandomValues(array);
  return Buffer.from(array.buffer);
}

function useConfirmation(onReady: () => void, params = {}) {
  useEffect(() => {
    console.log(["useEffect"]);
    const disconnect = connect(onReady, params);
    return () => {
      console.log(["useEffect.return"]);
      disconnect();
    };
  }, [params]);
}

function useVisibility({
  visibilitychange = false,
  ...params
}: { hash?: string; visibilitychange?: boolean } = {}) {
  useEffect(() => {
    const eventType = "visibilitychange";
    const eventListener = () => {
      request("/lp/visibilitychange", { hidden: document.hidden, ...params });
    };
    if (visibilitychange) {
      document.addEventListener(eventType, eventListener);
    }
    return () => {
      document.removeEventListener(eventType, eventListener);
    };
  }, [visibilitychange]);
}

function Start({ setPage }: { setPage: Dispatch<SetStateAction<string>> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const content = document.location.href;
    qrcode.toCanvas(
      canvasRef.current,
      content,
      { margin: 0, scale: 5 },
      function (error) {
        if (error) {
          console.error(error);
        }
      },
    );
  }, []);

  return (
    <section>
      <h3>Start</h3>
      <button onClick={() => setPage("Confirmation")}>next</button>
      <div style={{ margin: "1em" }}>
        <canvas ref={canvasRef} width="125" height="125"></canvas>
      </div>
    </section>
  );
}

function Confirmation({
  body,
  setPage,
}: {
  body: object;
  setPage: Dispatch<SetStateAction<string>>;
}) {
  const [hash] = useState(() => randomBytes(4).toString("hex"));
  const onReady = useCallback(() => setPage("Finish"), []);
  useConfirmation(onReady, { hash, ...body });
  useVisibility({ hash, ...body });

  return (
    <section>
      <h3>Confirmation [{hash}]</h3>
      <pre>{JSON.stringify(body)}</pre>
      <button onClick={onReady}>ready</button>
      <label>
        <span>file</span>
        <input type="file" />
      </label>
      <label>
        <span>capture</span>
        <input type="file" accept="image/*" capture />
      </label>
      <label>
        <span>document</span>
        <input type="file" accept=".pdf" />
      </label>
      <span>
        {" "}
        <a
          href="https://maps.app.goo.gl/ckYEARK1nrXoKjRY8"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          maps
        </a>
      </span>
      <span>
        {" "}
        <a
          href="https://apps.apple.com/app/id324684580"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          apps
        </a>
      </span>
    </section>
  );
}

function Finish({ setPage }: { setPage: Dispatch<SetStateAction<string>> }) {
  return (
    <section>
      <h3>Finish</h3>
      <button onClick={() => setPage("Confirmation")}>retry</button>
    </section>
  );
}

function Logs(_: { setPage: Dispatch<SetStateAction<string>> }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [hash, setHash] = useState<string[]>([]);
  const [, setLast] = useState(0);

  const handleData = useCallback(
    (data: { hash: string }) =>
      setLast((last) => {
        const time = Date.now();
        const json = Object.assign(
          data,
          last
            ? {
                last: new Intl.DurationFormat("pl", {
                  style: "narrow",
                }).format({ milliseconds: time - last }),
              }
            : {},
        );
        setHash((hash) =>
          json.hash && !hash.includes(json.hash)
            ? hash.concat(json.hash)
            : hash,
        );
        setLogs((logs) => [].concat(JSON.stringify(json), logs));
        return time;
      }),
    [],
  );

  useEffect(() => {
    const ws = new WebSocket(
      location.origin.replace(/^http/, "ws") + "/lp/logs",
    );
    const eventListener = ({ data }: MessageEvent) =>
      handleData(JSON.parse(data));

    ws.addEventListener("message", eventListener);

    return () => {
      ws.close();
    };
  }, [handleData]);

  // useEffect(() => {
  //   const eventType = "log";
  //   const source = new EventSource("/lp/logs");
  //   const eventListener = ({ data }: MessageEvent) => handleData(JSON.parse(data));

  //   source.addEventListener(eventType, eventListener);
  //   return () => {
  //     source.removeEventListener(eventType, eventListener);
  //     source.close();
  //   };
  // }, [handleData]);

  const lines = useMemo(
    () => logs.filter((line) => line.includes(text)).join("\n"),
    [logs, text],
  );

  return (
    <section>
      <h3>Logs</h3>
      <button onClick={() => setLogs([])}>clear</button>
      <button
        onClick={() =>
          setLogs((logs) => [].concat(`--> ${Date.now()} <--`, logs))
        }
      >
        marker
      </button>
      <label>
        <span>filter</span>
        <input
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      {hash.map((hash) => (
        <span key={hash}>
          {" "}
          <a href="#" onClick={(e) => (e.preventDefault(), setText(hash))}>
            {hash}
          </a>
        </span>
      ))}
      <pre>{lines}</pre>
    </section>
  );
}

const PAGES = {
  Start,
  Confirmation,
  Finish,
  Logs,
};

export default function Section() {
  const [body, setBody] = useState({
    pause: 0,
    delay: 1000,
    limit: 20,
    visibilitychange: true,
  });
  const [page, setPage] = useState(() => Object.keys(PAGES)[0]);
  const Page = PAGES[page];

  return (
    <section>
      <h2>Lp</h2>
      <form>
        <label>
          <span>pause</span>
          <select
            value={body.pause}
            onChange={(e) =>
              setBody((body) => ({ ...body, pause: Number(e.target.value) }))
            }
          >
            {[0, 1000, 2000].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>delay</span>
          <select
            value={body.delay}
            onChange={(e) =>
              setBody((body) => ({ ...body, delay: Number(e.target.value) }))
            }
          >
            {[1000, 2000, 5000, 10000].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>limit</span>
          <select
            value={body.limit}
            onChange={(e) =>
              setBody((body) => ({ ...body, limit: Number(e.target.value) }))
            }
          >
            {[5, 10, 20, 50].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>visibilitychange</span>
          <input
            type="checkbox"
            checked={body.visibilitychange}
            onChange={(e) =>
              setBody((body) => ({
                ...body,
                visibilitychange: e.target.checked,
              }))
            }
          />
        </label>
      </form>
      <nav>
        {Object.keys(PAGES).map((page, index) => (
          <span key={index}>
            {index > 0 && ` | `}
            <a
              key={page}
              href={`#${page}`}
              onClick={(e) => (e.preventDefault(), setPage(page))}
            >
              {page}
            </a>
          </span>
        ))}
      </nav>
      <main>
        <Page setPage={setPage} body={body} />
      </main>
    </section>
  );
}
