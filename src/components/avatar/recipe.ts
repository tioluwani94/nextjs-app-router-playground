import { defineRecipe } from '@pandacss/dev'
 
export var avatarRecipe = defineRecipe({
  className: 'avatar',
  description: 'The styles for the Avatar component',
  base: {
    rounded: 'full',
  },
  variants: {
    size: {
      sm: { w: '24px', h: '24px', fontSize: 'sm' },
      md: { w: '32px', h: '32px', fontSize: 'md' },
      lg: { w: '40px', h: '40px', fontSize: 'lg' }
    },
  },
  defaultVariants: {
    size: 'sm',
  }
})