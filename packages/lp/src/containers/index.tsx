import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { STATUSES } from "../constants";
import styles from "./styles.module.scss";

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

function connect(onReady: () => void, { abortable = true } = {}) {
  let timeoutId: ReturnType<typeof setTimeout>;
  let aborted: boolean;
  let attempt = 0;
  let controller: AbortController;

  function loop() {
    aborted = false;
    controller = (abortable && new AbortController()) || null;
    timeoutId = setTimeout(
      () =>
        request("/lp", { attempt: ++attempt }, { signal: controller?.signal })
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
      1000,
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

function useConfirmation(onReady: () => void) {
  useEffect(() => {
    console.log(["useEffect"]);
    const disconnect = connect(onReady);
    return () => {
      console.log(["useEffect.return"]);
      disconnect();
    };
  });
}

function Start({ setPage }: { setPage: Dispatch<SetStateAction<string>> }) {
  return (
    <section>
      <h3>Start</h3>
      <button onClick={() => setPage("Confirmation")}>next</button>
    </section>
  );
}

function Confirmation({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<string>>;
}) {
  const onReady = useCallback(() => setPage("Finish"), []);
  useConfirmation(onReady);

  return (
    <section>
      <h3>Confirmation</h3>
      <button onClick={onReady}>ready</button>
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

const PAGES = {
  Start,
  Confirmation,
  Finish,
};

export default function Section() {
  const [page, setPage] = useState(() => Object.keys(PAGES)[0]);
  const Page = PAGES[page];

  return (
    <section className={styles.Section}>
      <h2>Lp</h2>
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
        <Page setPage={setPage} />
      </main>
    </section>
  );
}
