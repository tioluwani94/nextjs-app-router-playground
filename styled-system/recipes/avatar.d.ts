/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AvatarVariant {
  size: "sm" | "md" | "lg"
}

type AvatarVariantMap = {
  [key in keyof AvatarVariant]: Array<AvatarVariant[key]>
}

export type AvatarVariantProps = {
  [key in keyof AvatarVariant]?: ConditionalValue<AvatarVariant[key]>
}

export interface AvatarRecipe {
  __type: AvatarVariantProps
  (props?: AvatarVariantProps): string
  raw: (props?: AvatarVariantProps) => AvatarVariantProps
  variantMap: AvatarVariantMap
  variantKeys: Array<keyof AvatarVariant>
  splitVariantProps<Props extends AvatarVariantProps>(props: Props): [AvatarVariantProps, Pretty<DistributiveOmit<Props, keyof AvatarVariantProps>>]
}

/** The styles for the Avatar component */
export declare const avatar: AvatarRecipe