import { css, cx } from "@/styled-system/css";
import React, { ReactNode } from "react";

export const SocialLink: React.FC<{ children: ReactNode; href: string }> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      className={cx(
        "footer-social-link",
        css({
          color: "gray.600",
          _hover: { color: "red" },
          transition: "color 0.2s ease-in",
        })
      )}
    >
      <div
        className={cx("footer-social-link-icon", css({ w: "16px", h: "16px" }))}
      >
        {children}
      </div>
    </a>
  );
};
