import React from 'react'
import Link from "next/link"
import MobileNavigation from './mobile-navigation'
import Navigation from './navigation'
import style from '../header/Header.module.css'

const Header = () => {
  return (
    <div className={style.header_bottom}>
      <div className={style.content}>
        <Link href="/">
          <a className={style.header_logo}>
            <div className={style.header_logo_img} />
            <div className={style.header_logo_text}>
              <div className={style.header_logo_title}><p>chartmusic.ru</p></div>
              {/* <div className={style.header_logo_descr}>Вся музыка в кармане</div> */}
            </div>
          </a>
        </Link>
          <Navigation />
          <MobileNavigation />
      </div>
    </div>
  )
}

export default Header
