"use client";

import Image from "next/image";
import React from "react";
import { css, cx } from "@/styled-system/css";
import { container } from "@/styled-system/patterns";
import { useSettings } from "../../settings-provider";

export const Navbar = () => {
  const { logo, header_links } = useSettings();

  const styles = {
    logoContainer: css({
      maxWidth: "100px",
      maxHeight: "50px",
    }),
    linksContainer: css({
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }),
    link: css({
      p: "7px 14px",
      outline: "none",
      display: "flex",
      rounded: "100px",
      fontSize: "14px",
      overflow: "hidden",
      position: "relative",
      alignItems: "center",
      textDecoration: "none",
    }),
  };

  return (
    <section
      className={cx(
        "navbar-container",
        container({
          maxW: "5xl",
          py: "24px",
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "space-between",
        })
      )}
    >
      <a className={cx("navbar-logo-container", styles.logoContainer)}>
        <Image width={32} height={32} src={logo ?? ""} alt="logo" />
      </a>
      {!!header_links?.length && (
        <ul className={cx("navbar-links-container", styles.linksContainer)}>
          {header_links?.map((hl) => (
            <li key={hl.link} className={cx("navbar-link-container")}>
              <a
                target="_blank"
                href={hl.link}
                className={cx("navbar-link", styles.link)}
              >
                {hl.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
