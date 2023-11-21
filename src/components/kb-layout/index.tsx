import React, { ReactNode } from "react";
import { css } from "@/styled-system/css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Content } from "./content";

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
      <Content>{children}</Content>
      <Footer />
    </main>
  );
};
