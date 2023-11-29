import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const avatarFn = /* @__PURE__ */ createRecipe('avatar', {
  "size": "sm"
}, [])

const avatarVariantMap = {
  "size": [
    "sm",
    "md",
    "lg"
  ]
}

const avatarVariantKeys = Object.keys(avatarVariantMap)

export const avatar = /* @__PURE__ */ Object.assign(avatarFn, {
  __recipe__: true,
  __name__: 'avatar',
  raw: (props) => props,
  variantKeys: avatarVariantKeys,
  variantMap: avatarVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, avatarVariantKeys)
  },
})