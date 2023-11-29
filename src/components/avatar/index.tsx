"use client"

import { css, cx } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { SystemStyleObject } from "@/styled-system/types";
import * as avatar from "@zag-js/avatar"
import { useMachine, normalizeProps } from "@zag-js/react"
import { avatar as avatarRecipe } from '@/styled-system/recipes'

export const Avatar: React.FC<{name: string; src?: string; css?: SystemStyleObject, size?: any}> = ({name, src, size = 'md', css: cssProp = {}}) => {
  const [state, send] = useMachine(avatar.machine({ id: "1" }))

  const api = avatar.connect(state, send, normalizeProps);

  const initials = !!name.split(' ').length ? name.split(' ').length > 2 ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : name.split(' ')[0][0] : '';

  return (
    <div {...api.rootProps} className={css({
      gridTemplateRows: 'unset!'})}>
      <span {...api.fallbackProps} className={cx(avatarRecipe({ size }), css(cssProp), flex({ fontWeight: 600, align: 'center', justify: 'center' }))}>{initials}</span>
      <img alt={name} src={src} {...api.imageProps} className={cx(avatarRecipe({ size }), css(cssProp))} />
    </div>
  )
}