import React from "react";
import { Headline } from "gatsby-css-order-issue-package";
import * as styles from "./styles.module.css";

export function ContentCentered(props) {
  const { className } = props;

  return (
    <div className={`${className} ${styles.contentCentered}`}>
      <Headline className={styles.title}>
        Hello World, I want to be blue.
      </Headline>
    </div>
  );
}
