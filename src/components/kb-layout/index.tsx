import React, { ReactNode } from "react";
import { css } from "@/styled-system/css";
import { Footer } from "./footer";
import { Header } from "./header";

export const KbLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main
      className={css({
        bg: "white",
        display: "flex",
        flexFlow: "column",
        minHeight: "100vh",
      })}
    >
      <Header />
      <section className={css({ flex: 1 })}>{children}</section>
      <Footer />
    </main>
  );
};
