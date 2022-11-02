import * as React from 'react'

const PlayedIcon = props => (
  <svg
    width={16}
    height={20}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0 0v19.366h16V0H0Zm8 2.42a2.81 2.81 0 0 1 1.886.71c.5.454.78 1.07.78 1.712 0 .642-.28 1.257-.78 1.711A2.81 2.81 0 0 1 8 7.263a2.81 2.81 0 0 1-1.886-.71 2.313 2.313 0 0 1-.78-1.711c0-.642.28-1.258.78-1.712A2.81 2.81 0 0 1 8 2.42Zm0 14.526a4.355 4.355 0 0 1-1.53-.277 4.05 4.05 0 0 1-1.298-.787 3.63 3.63 0 0 1-.868-1.178A3.343 3.343 0 0 1 4 13.314c0-.476.103-.949.304-1.39.201-.44.496-.84.868-1.177a4.05 4.05 0 0 1 1.297-.787A4.355 4.355 0 0 1 8 9.683c1.06 0 2.078.383 2.828 1.064.75.68 1.172 1.604 1.172 2.568 0 .963-.421 1.886-1.172 2.567-.75.681-1.767 1.064-2.828 1.064Z'
      fill='#D9D9D9'
    />
    <path
      d='M8 15.131c1.105 0 2-.813 2-1.815 0-1.003-.895-1.816-2-1.816s-2 .813-2 1.816c0 1.002.895 1.815 2 1.815Z'
      fill='#D9D9D9'
    />
  </svg>
)

export default PlayedIcon
