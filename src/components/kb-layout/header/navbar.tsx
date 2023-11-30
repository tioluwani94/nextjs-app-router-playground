"use client"

import { HelpCenterSettings } from "@/src/types";
import { css, cx } from "@/styled-system/css";
import { container, hstack, stack } from "@/styled-system/patterns";
import Image from "next/image";
import React, { useState } from "react";
import { CloseIcon, HamburgerIcon } from "../../icons";

export const Navbar = (
  props: Pick<
    HelpCenterSettings,
    "logo" | "name" | "header_theme" | "header_links" | "primary_color" | "secondary_color"
  >
) => {
  const { logo, name, header_theme, header_links, primary_color, secondary_color } = props;

  const [showMobileNav, setShowMobileNav] = useState(false)

  const styles = {
    logoContainer: css({
      maxWidth: "100px",
      maxHeight: "50px",
    }),
    linksContainer: css({
      gap: "8px",
      alignItems: "center",
      display: {base: 'none', md: 'none', lg:'flex'},
    }),
    link: css({
      p: "7px 14px",
      outline: "none",
      display: "flex",
      fontWeight: 500,
      rounded: "100px",
      fontSize: "14px",
      overflow: "hidden",
      position: "relative",
      alignItems: "center",
      textDecoration: "none",
      transition: "color 0.2s ease-in",
      // color: { base: "inherit", _hover: secondary_color },
    }),
    title: css({
      display: "flex",
      fontSize: "18px",
      fontWeight: 600,
      alignItems: "center",
      whiteSpace: "nowrap",
      textDecoration: "none",
      _before: {
        w: "1px",
        mr: "12px",
        opacity: 0.2,
        height: "20px",
        content: '""',
        display: "inline-block",
        bg:
          header_theme === "light"
            ? "rgba(255, 255, 255, 1)"
            : "rgba(0, 0, 0, 0.1)",
      },
    }),
  };

  return (
    <section className={cx("navbar-container", css({position: 'relative'}))}>
      <section
        className={cx(
          "navbar",
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
        <div className={hstack()}>
          {logo && (
            <a
              href="/"
              className={cx("navbar-logo-container", styles.logoContainer)}
            >
              <Image width={32} height={32} src={logo ?? ""} alt="logo" />
            </a>
          )}
          {name && (
            <a href="/" className={cx("navbar-title", styles.title)}>
              {name}
            </a>
          )}
        </div>
        {!!header_links?.length && (
          <>
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
            <button 
              onClick={() => setShowMobileNav(true)} 
              className={
                css({ 
                  w: '40px', 
                  h: '40px',
                  p: '4px 8px', 
                  cursor: 'pointer',
                  display: {base: 'block', md: 'block', lg:'none'},
                })}
            >
              <HamburgerIcon />
            </button>
          </>
        )}
      </section>
      {showMobileNav && <section className={cx('mobile-navbar', css({zIndex: 2, w: '100%', px: '16px', py: '24px', bg: 'white', position: 'absolute', top: 0 }))}>
        <button onClick={() => setShowMobileNav(false)} className={css({ zIndex: 3, p: '4px 8px', w: '30px', h: '30px', cursor: 'pointer', position: 'absolute', right: '4px', top: '1px', transition: 'background 0.2s ease-in', rounded: 'md', bg: {base: 'transparent', _hover: 'gray.100'} })} style={{color: primary_color}}>
          <CloseIcon />
        </button>
        <ul className={cx(stack({ gap: '2px', direction: 'column' }))}>
          {header_links?.map((hl) => (
            <li key={hl.link} className={cx("navbar-link-container")}>
              <a
                target="_blank"
                href={hl.link}
                className={cx("navbar-link", styles.link)}
                style={{color: primary_color}}
              >
                {hl.label}
              </a>
            </li>
          ))}
        </ul>
      </section>}
    </section>
  );
};
