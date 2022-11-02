import * as React from 'react'

const ListIcon = props => (
  <svg
    width={20}
    height={20}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M5 11.25h5v2.5H5v-2.5Z' fill='#D9D9D9' />
    <path
      d='M20 2.5h-1.25V0H6.25v2.5h-2.5v1.563L3 5H1.25v2.188L0 8.75V20h15l5-6.25V2.5ZM2.5 6.25h10v2.5h-10v-2.5Zm11.25 12.5H1.25V10h12.5v8.75Zm1.25-10h-1.25V5H5V3.75h10v5Zm2.5-3.125-1.25 1.563V2.5H7.5V1.25h10v4.375Z'
      fill='#D9D9D9'
    />
  </svg>
)

export default ListIcon
