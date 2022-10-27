import React from "react";
import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";
import cn from "classnames";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
