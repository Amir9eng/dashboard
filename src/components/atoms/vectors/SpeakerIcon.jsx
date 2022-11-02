import * as React from 'react'

const SpeakerIcon = props => (
  <svg
    width={21}
    height={19}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M14.125 6.218c1.25 1.667 1.25 4.896 0 6.563M16.938 2.938c3.738 3.57 3.76 9.578 0 13.125M1 12.274V6.726c0-.539.42-.976.938-.976h3.361a.92.92 0 0 0 .663-.286l2.813-3.176c.59-.615 1.6-.18 1.6.69v13.044c0 .876-1.022 1.308-1.609.681l-2.803-3.158a.92.92 0 0 0-.67-.295H1.936c-.517 0-.937-.437-.937-.976v0Z'
      stroke='#FBBA12'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default SpeakerIcon
