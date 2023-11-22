import { HelpCenterSettings } from "@/src/types";
import { css, cx } from "@/styled-system/css";
import { container, hstack } from "@/styled-system/patterns";
import Image from "next/image";
import React from "react";

export const Navbar = (props: Pick<HelpCenterSettings, 'logo' | 'name' | 'header_theme' | 'header_links'>) => {
  const { logo, name, header_theme, header_links } = props;

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
    title: css({
      display: 'flex',
      fontSize: '18px',
      fontWeight: 600,
      alignItems: 'center',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      _before: {
        w: '1px',
        mr: '12px',
        opacity: 0.2,
        height: '20px',
        content: '""',
        display: 'inline-block',
        bg: header_theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.1)'
      },
    })
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
      <div className={hstack()}>
        {logo && 
          <a href="/" className={cx("navbar-logo-container", styles.logoContainer)}>
            <Image width={32} height={32} src={logo ?? ""} alt="logo" />
          </a>
        }
        {name && <a href="/" className={cx("navbar-title", styles.title)}>{name}</a>}
      </div>
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
