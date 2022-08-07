import React, { Suspense, lazy, useEffect, useState } from "react";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  print: lazy(() => import("./Print")),
  crop: lazy(() => import("./Crop")),
  cropper: lazy(() => import("./Cropper")),
};

const getPage = (location: { hash: string }) => {
  const [path, hash = Object.keys(PAGES)[0]] =
    decodeURI(location.hash).match(/^#(.+)/) || [];
  return hash;
};

export default function App() {
  const [page, setPage] = useState(getPage(history.location));

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setPage(getPage(location))
    )
  );

  const Page = PAGES[page] || null;

  return (
    <main className={styles.App}>
      <header className={styles.Nav}>
        <h1>Print</h1>
        <nav>
          {Object.keys(PAGES).map((page) => (
            <a key={page} href={`#${page}`}>
              {page}
            </a>
          ))}
          [{page}]
        </nav>
      </header>
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    </main>
  );
}
