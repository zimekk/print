import React, { useCallback, useMemo, useState } from "react";
import DATA from "./data";
import styles from "./styles.module.scss";

type DataType = {
  notion: string;
  answer: string;
};

const parseData = (text: string) => {
  return text
    .split("\n")
    .filter(Boolean)
    .map((line) => line.replace(/^- +\[.\] +/, ""))
    .map((line) =>
      (([, a, b]) => ({ notion: a.trim(), answer: b.trim() }))(
        line.match(/([^-]+)-(.+)/),
      ),
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
  const [data] = useState<DataType[]>(() => parseData(DATA));
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

  return (
    <section className={styles.Section}>
      <h2>Quiz</h2>
      <div>
        <button onClick={handleRandom} disabled={available.length === 0}>
          random
        </button>
        {item >= 0 && (
          <Notion key={item} item={data[item]} {...{ handleCorrect }} />
        )}
      </div>
      <pre>{JSON.stringify({ counter, correct }, null, 2)}</pre>
      <div>
        <button onClick={handleReset}>reset</button>
      </div>
    </section>
  );
}
