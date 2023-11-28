import { HelpCenterSettings } from "@/src/types";
import { css, cx } from "@/styled-system/css";
import { container, flex } from "@/styled-system/patterns";
import Image from "next/image";
import { FooterLink } from "./footer-link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons";
import { SocialLink } from "./social-link";

export const Footer = (
  props: Pick<
    HelpCenterSettings,
    "social_media_links" | "footer_links" | "show_watermark" | "secondary_color"
  >
) => {
  const { social_media_links, footer_links, show_watermark, secondary_color } =
    props;

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
              {social_media_links?.twitter && (
                <SocialLink href={social_media_links.twitter}>
                  <TwitterIcon />
                </SocialLink>
              )}
              {social_media_links?.facebook && (
                <SocialLink href={social_media_links.facebook}>
                  <FacebookIcon />
                </SocialLink>
              )}
              {social_media_links?.linkedin && (
                <SocialLink href={social_media_links.linkedin}>
                  <LinkedInIcon />
                </SocialLink>
              )}
              {social_media_links?.instagram && (
                <SocialLink href={social_media_links?.instagram}>
                  <InstagramIcon />
                </SocialLink>
              )}
            </div>
          </article>
          {!!footer_links?.length && (
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
              {footer_links.map((fl) => (
                <FooterLink href={fl.link} key={fl.link}>
                  {fl.label}
                </FooterLink>
              ))}
            </article>
          )}
        </section>
        {show_watermark && (
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
        )}
      </section>
    </footer>
  );
};
