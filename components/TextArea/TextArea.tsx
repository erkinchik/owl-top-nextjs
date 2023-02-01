import React, { ForwardedRef, forwardRef } from "react";
import styles from "./TextArea.module.css";
import cn from "classnames";
import { TeaxtAreaProps } from "./TeaxtArea.props";

export const TextArea = forwardRef(
  (
    { className, error, ...props }: TeaxtAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cn(styles.textareaWrapper, className)}>
        <textarea
          className={cn(styles.textarea, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
