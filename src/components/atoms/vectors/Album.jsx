import * as React from 'react'

const Album = props => (
  <svg
    width={28}
    height={28}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0 0h28v28H0V0Zm14 25.2a11.2 11.2 0 1 0 0-22.4 11.2 11.2 0 0 0 0 22.4Zm0-7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Z'
      fill='#D9D9D9'
    />
  </svg>
)

export default Album
