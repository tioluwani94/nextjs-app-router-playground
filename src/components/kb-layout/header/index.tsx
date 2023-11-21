import React from "react";
import { css, cx } from "@/styled-system/css";
import { HeroText } from "./hero-text";
import { Navbar } from "./navbar";
import { SearchBox } from "./search-box";

export const Header = () => {
  return (
    <header
      className={cx(
        "header",
        css({ width: "100%", flex: "0 0 auto", minHeight: "240px", bg: "red" })
      )}
    >
      <Navbar />
      <HeroText>Need help with Simpu?</HeroText>
      <SearchBox />
    </header>
  );
};
