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
  const [rrss, setRrss] = useState(RRSS)
  const [fetchedData, setFetchedData] = useState(MOCKED_FETCH_DATA)
  const [fetchedOverviewData, setFetchedOverviewData] = useState(
    MOCKED_FETCH_DATA_OVERVIEW_TODAY
  )

  const iconSelect = (icon) => {
    switch (icon) {
      case rrss[0]:
        return {
          component: <FB style={{ verticalAlign: 'middle' }} />,
          background: 'hsl(195, 100%, 50%)',
          name: 'facebook',
        }
      case rrss[1]:
        return {
          component: <TW style={{ verticalAlign: 'middle' }} />,
          background: 'hsl(203, 89%, 53%)',
          name: 'twitter',
        }
      case rrss[2]:
        return {
          component: <IG style={{ verticalAlign: 'middle' }} />,
          background:
            'linear-gradient(90deg, hsl(37, 97%, 70%) 0%,  hsl(329, 70%, 58%) 100%)',
          name: 'instagram',
        }
      case rrss[3]:
        return {
          component: <YT style={{ verticalAlign: 'middle' }} />,
          background: 'hsl(348, 97%, 39%)',
          name: 'youtube',
        }
    }
  }

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
    iconSelect,
    formattedFollowerNumber,
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}
