import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import style from '../topList/Toplist.module.css'

const TopList = () => {
  const [list, setList] = useState([])
  console.log('LIST', list)

  useEffect(() => {
    axios.get('/api/toplist')
    .then(({ data }) => {
      setList(Object.values(data.result.tracks))
    })
  }, [])

  return (
    <>
      <h2 className={style.topH2}>Топ скачиваемых треков</h2>
      <div className={style.topListContainer}>
        {list.map((it, index) => {
        return (
          <div className={style.topItem} key={index}>
            <div className={style.listNumber}>{index+1}</div>
            <div className={style.photoArtist}>
            <Image
              src={`https://cdn42.zvuk.com/pic?type=release&id=${it.release_id}`}
              width={50}
              height={50}
            />
            </div>
            <div className={style.topArtistName}>{it.credits}</div>
            <div className={style.topTrackName}>{it.title}</div>
            <div className={style.download}></div>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default TopList