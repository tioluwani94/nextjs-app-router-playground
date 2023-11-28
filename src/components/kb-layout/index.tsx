import React, { ReactNode } from "react";
import { css } from "@/styled-system/css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Content } from "./content";
import { getHelpcenterSettings } from "@/src/api/queries";

export default async function KbLayout({ children }: { children: ReactNode }) {
  const data = await getHelpcenterSettings();
  const {
    logo,
    name,
    hero_text,
    hero_image,
    header_links,
    footer_links,
    header_theme,
    primary_color,
    show_watermark,
    secondary_color,
    social_media_links,
  } = data;

  return (
    <main
      className={css({
        bg: "white",
        display: "flex",
        flexFlow: "column",
        minHeight: "100vh",
      })}
    >
      <Header
        logo={logo}
        name={name}
        hero_text={hero_text}
        hero_image={hero_image}
        header_links={header_links}
        header_theme={header_theme}
        primary_color={primary_color}
        secondary_color={secondary_color}
      />
      <Content>{children}</Content>
      <Footer
        footer_links={footer_links}
        show_watermark={show_watermark}
        secondary_color={secondary_color}
        social_media_links={social_media_links}
      />
    </main>
  );
}
