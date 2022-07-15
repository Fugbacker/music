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
  const [trackList, setTrackList] = useState('')
  console.log('trackList', trackList)

  const toolTipsMusicTrack = async (subject = '') => {
    const response = await axios.get(`/api/tooltips?text=${subject}`)
    const newValue = response.data
    setTrackList(() => newValue)
  }

  const onChange = (e) => {
    setEnterText(() => e.target.value)
    toolTipsMusicTrack(e.target.value)
  }

  // const updateInputText = ({ name, number }) => {
  //   setEnterText(name)
  //   setCadNumber(number)
  //   setValue([])
  // }

  // const clearInput = () => {
  //   setValue([])
  //   setEnterText('')
  //   setData('')
  // }

  const clearToolTips = () => {
    setEnterText([])
    setTrackList('')
  }

  useEffect(() => {
    document.addEventListener('click', clearToolTips)
    return () => document.removeEventListener('click', clearToolTips)
  }, [])


  return (
    <div>
      <div className={style.search__wrap}>
        <div className={style.search}>
          <div className={style.searchInputs}>
            <input
              className={style.imputSearch}
              type="text"
              placeholder="Артист или название трэка"
              value={enterText}
              onChange={onChange}
            />
            <button
              className={style.searchButton}
              type="button"
              autoComplete="off"
              disabled={enterText.length < 4}
              // onClick={() => {
              //   askReestr(cadNumber, enterText)
              //   setLoading(true)
              //   router.push(`/object/${cadNumber || enterText}`)
              // }}
            >
              <div aria-hidden="true" className={style.searchIcon}>
                {enterText.length === 0 ? (
                  <BsSearch />
                ) : (
                  <AiOutlineCloseCircle />
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
                      onClick={() => updateInputText({ name: it.full_name, number: it.cadnum })}
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
