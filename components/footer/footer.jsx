import React from 'react'
import Link from "next/link"
import style from '../footer/Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer_top}>
      <div className="content">
        <div className={style.footer_content_big}>
          <div className={style.footer_content_small}>
            <div className={style.footer_small_img} />
            <div className={style.footer_small_slog}>Сервис поиска хорошей музыки</div>
            <div className={style.footer_small_copy}>
              CHARTMUSIC, 2022. Все права защищены.
              <br />
              email: admin@chartmusic.ru
            </div>
          </div>
          <div className={style.footer_links_td}>
            <div className={style.footer_links_title}>Онлайн сервисы</div>
            <div className={style.footer_links_data}>
              <Link href="/">
                <a>Поиск трека</a>
              </Link>
              <br />
              <Link href="/jkh">
                <a>Слушать онлайн</a>
              </Link>
              <br />
              <Link href="/mkd">
                <a>Скачать бесплатно</a>
              </Link>
              <br />
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  )

}

export default Footer

