"use client"

import { useDebounce, useOutsideAlerter } from "@/src/helpers/hooks";
import { Article, HelpCenterSettings } from "@/src/types";
import { css, cx } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { useQuery } from '@tanstack/react-query';
import Link from "next/link";
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

export const SearchBox = (props: Pick<HelpCenterSettings, 'header_theme'>) => {
  const { header_theme } = props;
  const popoverRef = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useState('');
  const [showPopover, setShowPopover] = useState(false);

  const debouncedSearch = useDebounce(search);
  useOutsideAlerter(popoverRef, () => setShowPopover(false));

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const {data: articles} = useQuery<Article[]>({
    queryKey: ['search-results', debouncedSearch],
    queryFn: async () => {
      const res: Article[] = await (
        await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/article/public/findersme/search?q=${debouncedSearch}`, {
          cache: 'no-store',
        })
      ).json()
      return res
    },
    enabled: !!debouncedSearch
  });

  const handleShowPopover = useCallback(() => {
    if(!!Array.isArray(articles) && search) {
      setShowPopover(true)
    }else {
      setShowPopover(false)
    }
  }, [articles?.length, search])

  useEffect(() => {
    handleShowPopover()
  }, [articles])
 
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
                h: "40px",
                pl: "32px",
                rounded: "8px",
                align: "center",
                bg: header_theme === 'light' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)',
              }),
              css({
                _focusWithin: {
                  borderWidth: "2px",
                  borderColor: "blue.500",
                  color: header_theme === 'light' ? 'gray.800' : 'white',
                  bg: header_theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.1)',
                },
              })
            )}
          >
            <div className={css({ w: "full" })}>
              <form className="searchbox-form">
                <input
                  name="q"
                  type="search"
                  value={search}
                  onChange={handleSearch}
                  onFocus={handleShowPopover}
                  onMouseUp={handleShowPopover}
                  onMouseDown={handleShowPopover} 
                  placeholder="Search articles"
                  className={css({
                    p: 0,
                    h: "40px",
                    w: "100%",
                    outline: 0,
                    border: "none",
                    bg: "transparent",
                    fontSize: "14px",
                    _placeholder: {color: header_theme === 'light' ? 'white' : 'gray.400'},
                    _focus: {
                      _placeholder: {color: header_theme === 'light' ? 'gray.400' : 'white'}
                    }
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
                css({ w: "16px", h: "16px" })
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
        {
          showPopover && (
            <div 
                ref={popoverRef} 
                className={css({ 
                  w: '100%', 
                  zIndex: 2, 
                  p: '12px',
                  gap:'12px', 
                  bg: 'white', 
                  rounded: 'sm', 
                  boxShadow:'sm', 
                  borderWidth: '1px',
                  direction: 'column',
                  position: 'absolute', 
                  borderColor: 'gray.50', 
                })
              }
            >
              {
              !articles?.length ? <p className={css({ color: 'gray.500' })}>We couldn't find any articles for: <strong>{search}</strong></p> :
                <>
                  {
                    articles?.map(a => (
                      <Link href={`/article/${a.slug}`} key={a.slug} className={css({display:'block',p: '8px 12px',rounded: 'md',borderWidth: '1px',borderColor: 'gray.100', _hover: {boxShadow: 'xs'}})}>
                        <h2 className={css({color: 'gray.800', fontWeight: 700})}>{a.title}</h2>
                        <p className={css({color: 'gray.500', fontSize: 'sm'})}>{a.description}</p>
                      </Link>
                    ))
                  }
                </>
              }
            </div>
          )
        }
      </div>
    </section>
  );
};
