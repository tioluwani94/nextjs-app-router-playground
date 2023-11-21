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
          color: "gray.600",
          lineHeight: "20px",
          _hover: { color: "red" },
          transition: "color 0.2s ease-in",
        })
      )}
    >
      {children}
    </a>
  );
};
