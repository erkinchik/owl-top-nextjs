import React from "react";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import cn from "classnames";
import ArrowIcon from "../../assets/icons/arrowIcon.svg";

export const Card = ({
  children,
  color = "white",
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
};
