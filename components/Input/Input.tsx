import React, { ForwardedRef, forwardRef } from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import { InputProps } from "./Input.props";
import { error } from "next/dist/build/output/log";

export const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <input
          className={cn(styles.input, {
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
