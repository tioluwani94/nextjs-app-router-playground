import { css, cx } from "@/styled-system/css";
import { container } from "@/styled-system/patterns";
import React, { ReactNode } from "react";

export const Content: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className={cx("content", css({ flex: 1 }))}>
      <div
        className={cx(
          "content-container",
          container({ py: "32px", maxW: "5xl" })
        )}
      >
        {children}
      </div>
    </section>
  );
};
