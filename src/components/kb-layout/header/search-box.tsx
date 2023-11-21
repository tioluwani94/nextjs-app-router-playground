import React from "react";
import { css, cx } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

export const SearchBox = () => {
  return (
    <section
      className={cx(
        "searchbox-container",
        flex({
          mb: "40px",
          align: "center",
          justify: "center",
          direction: "column",
          mx: { base: "4" },
        })
      )}
    >
      <div
        className={cx(
          "searchbox-wrapper",
          css({
            maxW: "500px",
            pos: "relative",
            w: { base: "100%", md: "50%", lg: "50%" },
          })
        )}
      >
        <div className={css({ pos: "relative" })}>
          <div
            className={cx(
              flex({
                align: "center",
                h: "40px",
                pl: "32px",
                bg: "gray.100",
                rounded: "8px",
              }),
              css({
                _focusWithin: {
                  bg: "white",
                  borderWidth: "2px",
                  borderColor: "blue.500",
                },
              })
            )}
          >
            <div className={css({ w: "full" })}>
              <form className="searchbox-form">
                <input
                  placeholder="Search articles"
                  type="search"
                  name="q"
                  className={css({
                    p: 0,
                    h: "40px",
                    w: "100%",
                    outline: 0,
                    border: "none",
                    bg: "transparent",
                    fontSize: "14px",
                  })}
                />
              </form>
            </div>
          </div>
          <div
            className={cx(
              "searchbox-icon-container",
              css({
                pos: "absolute",
                left: "12px",
                top: "12px",
                w: "fit-content",
              })
            )}
          >
            <div
              className={cx(
                "searchbox-icon-wrapper",
                css({ w: "16px", h: "16px", color: "gray.800" })
              )}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.00244 7C3.00244 4.79086 4.7933 3 7.00244 3C9.21158 3 11.0024 4.79086 11.0024 7C11.0024 9.20914 9.21158 11 7.00244 11C4.7933 11 3.00244 9.20914 3.00244 7ZM7.00244 2C4.24102 2 2.00244 4.23858 2.00244 7C2.00244 9.76142 4.24102 12 7.00244 12C8.20308 12 9.30487 11.5768 10.1668 10.8715L13.1489 13.8536C13.3442 14.0488 13.6607 14.0488 13.856 13.8536C14.0513 13.6583 14.0513 13.3417 13.856 13.1464L10.8739 10.1644C11.5793 9.30243 12.0024 8.20063 12.0024 7C12.0024 4.23858 9.76387 2 7.00244 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
