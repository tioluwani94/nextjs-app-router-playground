'use client'

import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className={flex({ gap: '12px', py: '64', direction: 'column', align: 'center', justify: 'center' })}>
      <h2 className={css({ fontSize: '4xl', fontWeight: 600 })}>Something went wrong!</h2>
      <button
        className={css({ rounded: 'sm', fontWeight: 500, h: '32px', px: '8px', cursor: 'pointer', bg: 'blue.500', color: 'white' })}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}