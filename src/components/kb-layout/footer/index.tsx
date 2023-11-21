import { css, cx } from "@/styled-system/css";
import { container, flex } from "@/styled-system/patterns";
import React from "react";
import { SocialLink } from "./social-link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons";
import { FooterLink } from "./footer-link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={cx("footer", css({ w: "full", bg: "gray.100" }))}>
      <section
        className={cx(
          "footer-inner",
          container({
            py: "32px",
            maxW: "5xl",
          })
        )}
      >
        <section
          className={cx(
            "footer-details",
            flex({
              wrap: "wrap",
              justify: { base: "unset", md: "unset", lg: "space-between" },
            })
          )}
        >
          <article
            className={cx(
              "footer-details-left",
              flex({
                flex: 1,
                gap: "32px",
                flexFlow: "column",
                mb: { base: "4", md: "unset", lg: "unset" },
              })
            )}
          >
            <div
              className={cx("footer-socials-container", flex({ gap: "24px" }))}
            >
              <SocialLink href="">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="">
                <InstagramIcon />
              </SocialLink>
            </div>
          </article>
          <article
            className={cx(
              "footer-details-right",
              flex({
                wrap: "wrap",
                mb: { base: "4", md: "unset", lg: "unset" },
                gap: { base: "18px", md: "24px", lg: "24px" },
                flexFlow: { base: "column", md: "row", lg: "row" },
              })
            )}
          >
            <FooterLink href="">Simpu Status</FooterLink>
            <FooterLink href="">Privacy</FooterLink>
            <FooterLink href="">Terms</FooterLink>
            <FooterLink href="">Legal</FooterLink>
            <FooterLink href="">SaaS Services Agreement</FooterLink>
          </article>
        </section>
        <section
          className={cx(
            "footer-watermark",
            flex({
              mt: "96px",
              gap: "4px",
              align: "center",
              flexFlow: "column",
              justify: "center",
            })
          )}
        >
          <a href="https://simpu.co" className={cx("footer-watermark-logo")}>
            <Image
              width={32}
              height={32}
              alt="Simpu Logo"
              src="/logo-black.png"
            />
          </a>
          <a
            href="https://simpu.co"
            className={cx(
              "footer-watermark-text",
              css({
                fontSize: "12px",
                textAlign: "center",
                transition: "color 0.2s ease-in",
                color: { base: "gray.400", _hover: "gray.800" },
              })
            )}
          >
            Powered by Simpu
          </a>
        </section>
      </section>
    </footer>
  );
};
