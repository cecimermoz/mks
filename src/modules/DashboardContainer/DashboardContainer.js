import React, { useContext } from 'react'
import DashboardContainerStyled from './DashboardContainer.style'
import DashboardHeader from '../../components/DashboardHeader'
import SocialMediaCardContainer from '../SocialMediaCardContainer'

import OverviewCardContainer from '../OverviewCardContainer/OverviewCardContainer'
import { DashboardContext } from '../../context/dashContext'
import Modalcontainer from '../ModalContainer/ModalContainer'
import { ThemeProvider } from '@emotion/react'
import { darkTheme, lightTheme } from '../../theme/generalTheme'

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
    </ThemeProvider>
  )
}

export default DashboardContainer
