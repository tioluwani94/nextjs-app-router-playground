import { HelpCenterSettings } from "@/src/types";
import { css, cx } from "@/styled-system/css";
import React from "react";
import { HeroText } from "./hero-text";
import { Navbar } from "./navbar";
import { SearchBox } from "./search-box";

export const Header = (props: Pick<HelpCenterSettings, 'logo' | 'name' | 'header_links' | 'hero_text' | 'hero_image'| 'primary_color' | 'header_theme'>) => {
  const { 
    logo, 
    name,
    hero_text, 
    hero_image, 
    header_theme,
    header_links, 
    primary_color,
  } = props;

  return (
    <header
      className={cx(
        "header",
        css({
          width: "100%",
          bgSize: "cover",
          flex: "0 0 auto",
          minHeight: "240px",
          color: header_theme === 'light' ? 'white' :  'gray.800'
        })
      )}
      style={{
        backgroundColor: primary_color,
        backgroundImage: `url(${hero_image})`,
      }}
    >
      <Navbar name={name} logo={logo} header_links={header_links} />
      <HeroText>{hero_text}</HeroText>
      <SearchBox header_theme={header_theme} />
    </header>
  );
};
