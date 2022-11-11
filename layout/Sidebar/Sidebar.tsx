import React from "react";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from "../../assets/icons/logo.svg";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo} />
      <div>поиск</div>
      <Menu />
    </div>
  );
};
