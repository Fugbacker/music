import React from 'react'
import NavLinks from './navlinks'
import style from '../header/Header.module.css'

export const Navigation = () => {
  return (
    <nav className={style.header_menu}>
      <NavLinks />
    </nav>
  )
}

export default Navigation