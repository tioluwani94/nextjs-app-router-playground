import { css, cx } from "@/styled-system/css";
import { SystemStyleObject } from "@/styled-system/types";
import React, { ReactNode } from "react";

export const SocialLink: React.FC<{
  href: string;
  children: ReactNode;
  styles?: SystemStyleObject;
}> = ({ href, styles, children }) => {
  return (
    <a
      href={href}
      className={cx(
        "footer-social-link",
        css(
          {
            transition: "color 0.2s ease-in",
            color: { base: "gray.400", _hover: "gray.800" },
          },
          styles
        )
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
