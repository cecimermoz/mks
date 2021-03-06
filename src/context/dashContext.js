import React, { createContext, useEffect, useState } from 'react'
import {
  RRSS,
  MOCKED_FETCH_DATA,
  MOCKED_FETCH_DATA_OVERVIEW_TODAY,
} from '../mocks/data'
import { ReactComponent as FB } from '../assets/icon-facebook.svg'
import { ReactComponent as IG } from '../assets/icon-instagram.svg'
import { ReactComponent as TW } from '../assets/icon-twitter.svg'
import { ReactComponent as YT } from '../assets/icon-youtube.svg'

export const DashboardContext = createContext()

export const Context = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [rrss, setRrss] = useState(RRSS)
  const [fetchedData, setFetchedData] = useState(MOCKED_FETCH_DATA)
  const [fetchedOverviewData, setFetchedOverviewData] = useState(
    MOCKED_FETCH_DATA_OVERVIEW_TODAY
  )

  const handleOpenModal = (data) => {
    setModalData(data)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsModalOpen(null)
  }

  const getSocialMediaData = (icon) => {
    switch (icon) {
      case rrss[0]:
        return {
          component: <FB style={{ verticalAlign: 'middle' }} />,
          background: 'hsl(195, 100%, 50%)',
          name: 'Facebook',
        }
      case rrss[1]:
        return {
          component: <TW style={{ verticalAlign: 'middle' }} />,
          background: 'hsl(203, 89%, 53%)',
          name: 'Twitter',
        }
      case rrss[2]:
        return {
          component: <IG style={{ verticalAlign: 'middle' }} />,
          background:
            'linear-gradient(90deg, hsl(37, 97%, 70%) 0%,  hsl(329, 70%, 58%) 100%)',
          name: 'Instagram',
        }
      case rrss[3]:
        return {
          component: <YT style={{ verticalAlign: 'middle' }} />,
          background: 'hsl(348, 97%, 39%)',
          name: 'Youtube',
        }
    }
  }

  const checkIfIsYoutube = (rrssName) => rrssName === rrss[3]

  const textByMedia = (isYoutube = false, textForYt, otherText) =>
    isYoutube ? textForYt : otherText

  const formattedFollowerNumber = (number) => {
    let num = number.toString()
    if (num.length >= 5) return `${num.slice(0, num.length - 3)}k`
    if (number < 0) return number.toString().replace('-', '')
    return number
  }

  const value = {
    rrss,
    fetchedData,
    fetchedOverviewData,
    darkMode,
    setDarkMode,
    isModalOpen,
    modalData,
    handleOpenModal,
    handleCloseModal,
    getSocialMediaData,
    formattedFollowerNumber,
    textByMedia,
    checkIfIsYoutube,
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}
