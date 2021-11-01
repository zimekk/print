import React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.scss";

function App() {
  return (
    <section className={styles.App}>
      <h1 className={styles.Nav}>Print</h1>
      <nav>
        <a href="print/document.pdf?format=pdf">
          print/document.pdf?format=pdf
        </a>
      </nav>
    </section>
  );
}

export default hot(App);
