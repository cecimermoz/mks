import { ThemeProvider } from '@emotion/react'
import React, { useContext } from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import { DashboardContext } from '../../context/dashContext'
import { darkTheme, lightTheme } from '../../theme/generalTheme'
import Modalcontainer from '../ModalContainer/ModalContainer'
import OverviewCardContainer from '../OverviewCardContainer/OverviewCardContainer'
import SocialMediaCardContainer from '../SocialMediaCardContainer'
import {
  DashboardBG,
  DashboardContainerStyled,
} from './DashboardContainer.style'

const DashboardContainer = () => {
  const { fetchedData, fetchedOverviewData, isModalOpen, darkMode } =
    useContext(DashboardContext)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <DashboardContainerStyled>
        <DashboardHeader />
        <SocialMediaCardContainer fetchData={fetchedData} />
        <OverviewCardContainer fetchData={fetchedOverviewData} />
        {isModalOpen && <Modalcontainer />}
      </DashboardContainerStyled>
      <DashboardBG />
    </ThemeProvider>
  )
}

export default DashboardContainer
