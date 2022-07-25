import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'
import ButtonMongo from './startParser'

import style from '../search/Search.module.css'


const Search = () => {
  const router = useRouter()
  const [enterText, setEnterText] = useState('')
  const [chooseTrack, setChooseTrack] = useState('')
  const [trackList, setTrackList] = useState('')
  console.log('trackList', trackList)
  console.log('chooseTrack', chooseTrack)

  const toolTipsMusicTrack = async (subject = '') => {
    const response = await axios.get(`/api/tooltips?text=${subject}`)
    const newValue = response.data
    setTrackList(() => newValue)
  }

  const onChange = (e) => {
    setEnterText(() => e.target.value)
    toolTipsMusicTrack(e.target.value)
  }

  const updateInputText = ({ name, title, id }) => {
    setEnterText(`${name}, ${title}`)
    setChooseTrack(`${name}, ${title}, ${id}`)
    setTrackList([])
  }

  // const clearInput = () => {
  //   setValue([])
  //   setEnterText('')
  //   setData('')
  // }

  const clearToolTips = () => {
    setEnterText([])
    setTrackList('')
  }

  // useEffect(() => {
  //   document.addEventListener('click', clearToolTips)
  //   return () => document.removeEventListener('click', clearToolTips)
  // }, [])


  return (
    <div>
      <div className={style.search__wrap}>
        <div className={style.search}>
          <div className={style.searchInputs}>
            <input
              className={style.imputSearch}
              type="text"
              placeholder="Исполнитель или название трека"
              value={enterText}
              onChange={onChange}
            />
            <button
              className={style.searchButton}
              type="button"
              autoComplete="off"
              disabled={enterText.length < 4}
            >
              <div aria-hidden="true" className={style.searchIcon}>
                {trackList.length === 0 ? (
                  <BsSearch
                    onClick={() => {
                      askReestr(cadNumber, enterText)
                      setLoading(true)
                      // router.push(`/object/${cadNumber || enterText}`)
                    }}
                  />
                ) : (
                  <AiOutlineCloseCircle
                    onClick={() => {
                      clearToolTips()
                    }}
                  />
                )}
              </div>
            </button>
          </div>
          {trackList.length !== 0 && (
            <div className={style.dataResult}>
              {trackList.map((it, index) => {
                const uniqueKey = +new Date()
                return (
                  <>
                    <div
                      className={style.dataItem}
                      aria-hidden="true"
                      onClick={() => updateInputText({ name: it.aname, title: it.title, id: it.id })}
                      key={`${index + uniqueKey}`}
                    >
                      <p className={style.artist}>{it.aname}</p>
                      <p className={style.title}>{it.title}</p>
                    </div>
                  </>
                )
              })}
            </div>
          )}
        </div>
        <ButtonMongo />
      </div>
    </div>

  )
}

export default Search
