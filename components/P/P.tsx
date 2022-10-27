import React from "react";
import styles from "./P.module.css";
import { PProps } from "./P.props";
import cn from "classnames";

export const P = ({ children, size = "s" }: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, {
        [styles.s]: size == "s",
        [styles.l]: size == "l",
        [styles.m]: size == "m",
      })}
    >
      {children}
    </p>
  );
};
