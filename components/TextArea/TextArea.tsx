import React from "react";
import styles from "./TextArea.module.css";
import cn from "classnames";
import { TeaxtAreaProps } from "./TeaxtArea.props";

export const TextArea = ({
  className,
  ...props
}: TeaxtAreaProps): JSX.Element => {
  return <textarea className={cn(styles.textarea, className)} {...props} />;
};
