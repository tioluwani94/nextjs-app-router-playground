import Image from "next/image";
import React from "react";
import { css, cx } from "@/styled-system/css";
import { container } from "@/styled-system/patterns";

export const Navbar = () => {
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
        <Image src={""} alt="logo" />
      </a>
      <ul className={cx("navbar-links-container", styles.linksContainer)}>
        <li className={cx("navbar-link-container")}>
          <a href="" className={cx("navbar-link", styles.link)}>
            Home
          </a>
        </li>
        <li className={cx("navbar-link-container")}>
          <a href="" className={cx("navbar-link", styles.link)}>
            About
          </a>
        </li>
      </ul>
    </section>
  );
};
