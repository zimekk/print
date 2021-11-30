import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./styles.module.scss";

function Example(query) {
  return (
    <div className={styles.App}>
      <h1>Print</h1>
      <pre>{JSON.stringify(query, null, 2)}</pre>
    </div>
  );
}

export default withStyles(styles)(Example);
