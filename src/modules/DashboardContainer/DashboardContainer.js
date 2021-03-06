import { ThemeProvider } from '@emotion/react'
import React, { useContext } from 'react'
import { DashboardHeader } from '../../components'
import { DashboardContext } from '../../context/dashContext'
import { darkTheme, lightTheme } from '../../theme/generalTheme'
import {
  SocialMediaCardContainer,
  ModalContainer,
  OverviewCardContainer,
} from '../'
import {
  DashboardBG,
  DashboardContainerStyled,
} from './DashboardContainer.style'

const DashboardContainer = () => {
  const {
    fetchedData,
    fetchedOverviewData,
    isModalOpen,
    darkMode,
    modalData,
    handleCloseModal,
    getSocialMediaData,
    formattedFollowerNumber,
    textByMedia,
  } = useContext(DashboardContext)

  const modalProps = {
    isModalOpen,
    modalData,
    handleCloseModal,
    getSocialMediaData,
    formattedFollowerNumber,
    textByMedia,
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <DashboardContainerStyled>
        <DashboardHeader totalFollowers={23004} />
        <SocialMediaCardContainer fetchData={fetchedData} />
        <OverviewCardContainer fetchData={fetchedOverviewData} />
        {isModalOpen && <ModalContainer {...modalProps} />}
      </DashboardContainerStyled>
      <DashboardBG />
    </ThemeProvider>
  )
}

export default DashboardContainer
