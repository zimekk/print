import React, { useCallback, useEffect, useMemo, useState } from "react";
import DATA from "./data";
import styles from "./styles.module.scss";

type DataType = {
  notion: string;
  answer: string;
};

const parseData = (text: string, inverse) => {
  return text
    .split("\n")
    .filter(Boolean)
    .map((line) => line.replace(/^- +\[.\] +/, ""))
    .map((line) =>
      (([, a, b]) =>
        inverse
          ? { notion: b.trim(), answer: a.trim() }
          : { notion: a.trim(), answer: b.trim() })(line.match(/([^-]+)-(.+)/)),
    );
};

function Notion({
  item,
  handleCorrect,
}: {
  item: DataType;
  handleCorrect: () => void;
}) {
  const [answer, setAnswer] = useState(() => false);

  const handleAnswer = useCallback(() => setAnswer(true), []);

  return (
    <article>
      <div className={styles.Notion}>
        <span>Q</span>
        <b>{item.notion}</b>
      </div>
      {answer ? (
        <div className={styles.Answer}>
          <span>A</span>
          <i>{item.answer}</i>
          <button onClick={handleCorrect}>correct</button>
        </div>
      ) : (
        <button onClick={handleAnswer}>answer</button>
      )}
    </article>
  );
}

export default function Section() {
  const [editable, setEditable] = useState(() => false);
  const [inverse, setInverse] = useState(() => false);
  const [content, setContent] = useState(() => DATA.trim());
  const [data, setData] = useState<DataType[]>(() =>
    parseData(content, inverse),
  );
  const [item, setItem] = useState<number>(() => -1);
  const [counter, setCounter] = useState<number[]>(() => []);
  const [correct, setCorrect] = useState<number[]>(() => []);

  const available = useMemo(
    () =>
      Object.keys(data)
        .map(Number)
        .filter((item) => !correct.includes(item)),
    [correct],
  );

  console.log(data, item, available);

  const handleRandom = useCallback(
    () =>
      ((item) => (
        setItem(item), setCounter((counter) => counter.concat(item))
      ))(available[Math.floor(Math.random() * available.length)]),
    [available],
  );

  const handleCorrect = useCallback(
    () => (setCorrect((correct) => correct.concat(item)), handleRandom()),
    [item],
  );

  const handleReset = useCallback(
    () => (setCorrect([]), setCounter([]), setItem(-1)),
    [],
  );

  const handleUpdate = useCallback(
    () => (
      setCorrect([]),
      setCounter([]),
      setItem(-1),
      setData(parseData(content, inverse))
    ),
    [content, inverse],
  );

  return (
    <section className={styles.Section}>
      <h2>Quiz</h2>
      <div>
        <button onClick={handleRandom} disabled={available.length === 0}>
          random ({available.length})
        </button>
        {item >= 0 && (
          <Notion key={item} item={data[item]} {...{ handleCorrect }} />
        )}
      </div>
      <hr />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <label>
            <input
              type="checkbox"
              checked={editable}
              onChange={(e) => setEditable(e.target.checked)}
            />
            <span>editable</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={inverse}
              onChange={(e) => setInverse(e.target.checked)}
            />
            <span>inverse</span>
          </label>
          <button onClick={handleUpdate}>update</button>
          <button onClick={handleReset}>reset</button>
        </div>
        {editable && (
          <textarea
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        )}
      </div>
      <pre>{JSON.stringify({ counter, correct }, null, 2)}</pre>
    </section>
  );
}
