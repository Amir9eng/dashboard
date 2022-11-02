import React from 'react'
import SideBar from '../../molecules/SideBar'
import './Layout.scss'
const Layout = ({ children }) => {
  return (
    <main className='Layout'>
      <SideBar />
      <section>{children}</section>
    </main>
  )
}

export default Layout
