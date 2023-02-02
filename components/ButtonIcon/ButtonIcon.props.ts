import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import up from "../../assets/icons/arrowUpIcon.svg";
import close from "../../assets/icons/crossIcon.svg";
import menu from "../../assets/icons/menuIcon.svg";

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "primary" | "white";
  icon: IconName;
}
