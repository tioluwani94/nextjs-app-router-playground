import { css, cx } from "@/styled-system/css";
import React, { ReactNode } from "react";

export const FooterLink: React.FC<{ children: ReactNode; href: string }> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      className={cx(
        "footer-footer-link",
        css({
          fontSize: "sm",
          lineHeight: "20px",
          transition: "color 0.2s ease-in",
          color: { base: "gray.400", _hover: "gray.600" },
        })
      )}
    >
      {children}
    </a>
  );
};
