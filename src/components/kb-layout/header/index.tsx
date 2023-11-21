"use client";

import React from "react";
import { css, cx } from "@/styled-system/css";
import { HeroText } from "./hero-text";
import { Navbar } from "./navbar";
import { SearchBox } from "./search-box";
import { useSettings } from "../../settings-provider";

export const Header = () => {
  const { hero_text, primary_color, hero_image } = useSettings();

  return (
    <header
      className={cx(
        "header",
        css({
          width: "100%",
          bgSize: "cover",
          flex: "0 0 auto",
          minHeight: "240px",
        })
      )}
      style={{
        backgroundColor: primary_color,
        backgroundImage: `url(${hero_image})`,
      }}
    >
      <Navbar />
      <HeroText>{hero_text}</HeroText>
      <SearchBox />
    </header>
  );
};
