import React from 'react'
import Link from "next/link"
import style from '../header/Header.module.css'

export const NavLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a className={style.header_menu_link}>
              Главная
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={style.header_menu_link}>
              Исполнители
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={style.header_menu_link}>
              Треки
            </a>
          </Link>
        </li>
        <li>
          <Link  href="/">
            <a className={style.header_menu_link}>
              Плейлисты
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks





