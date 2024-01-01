import { HTMLAttributes } from "react";
import { css } from "~/styled-system/css";
import { SystemStyleObject } from "~/styled-system/types";


export const Icon = (
    props: HTMLAttributes<HTMLDivElement> & { css?: SystemStyleObject }
  ) => {
    const { css: cssProp, ...rest } = props;
    return <div className={css(cssProp)} {...rest} />;
  };
  