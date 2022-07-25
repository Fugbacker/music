import React from 'react'
import style from '../mainContent/Main.module.css'

const MainContent = () => {
  return (
    <div className={style.main_first_info}>
      <div className={style.main_first_infoItem}>
        <div className={style.main_first_infoItem_title}><h2>Найди свою музыку</h2></div>
        <div className={style.main_first_infoItem_descr}>
          Начните вводить имя исполнителя или название интересующей вас композиции и умный
          поиск начнет подсказывать варианты. Чем точнее вводимые данные, тем меньше предлагаемых
          композиций.
        </div>
      </div>
      <div className={style.main_first_infoItem}>
        <div className={style.main_first_infoItem_title2}><h2>Слушай онлайн</h2></div>
        <div className={style.main_first_infoItem_descr}>
          Сервис позволяет слушать найденные треки в реальном времени без установки какого-либо софта.
          Удобное создание плейлистов с возможностью просшуливания в удобное время.
        </div>
      </div>
      <div className={style.main_first_infoItem}>
        <div className={style.main_first_infoItem_title3}><h2>Качай бесплатно</h2></div>
        <div className={style.main_first_infoItem_descr}>
          Сервис позволяеет бесплатно скачать любой из найденых треков в режиме онлайн, как говорится
          без регистрации и смс.
        </div>
      </div>
    </div>
  )
}

export default MainContent
