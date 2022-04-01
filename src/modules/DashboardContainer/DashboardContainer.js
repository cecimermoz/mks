import React, { useContext } from 'react'
import DashboardContainerStyled from './DashboardContainer.style'
import DashboardHeader from '../../components/DashboardHeader'
import SocialMediaCardContainer from '../SocialMediaCardContainer'

import OverviewCardContainer from '../OverviewCardContainer/OverviewCardContainer'
import { DashboardContext } from '../../context/dashContext'

const DashboardContainer = () => {
  const { fetchedData, fetchedOverviewData } = useContext(DashboardContext)

  return (
    <DashboardContainerStyled>
      <DashboardHeader />
      <SocialMediaCardContainer fetchData={fetchedData} />
      <OverviewCardContainer fetchData={fetchedOverviewData} />
    </DashboardContainerStyled>
  )
}

export default DashboardContainer
