import React from 'react'
import DashboardContainerStyled from './DashboardContainer.style'
import DashboardHeader from '../../components/DashboardHeader'
import SocialMediaCardContainer from '../SocialMediaCardContainer'
import {
  RRSS,
  MOCKED_FETCH_DATA,
  MOCKED_FETCH_DATA_OVERVIEW_TODAY,
} from '../../mocks/data'
import OverviewCardContainer from '../OverviewCardContainer/OverviewCardContainer'

const DashboardContainer = () => {
  return (
    <DashboardContainerStyled>
      <DashboardHeader />
      <SocialMediaCardContainer fetchData={MOCKED_FETCH_DATA} />
      <OverviewCardContainer fetchData={MOCKED_FETCH_DATA_OVERVIEW_TODAY} />
    </DashboardContainerStyled>
  )
}

export default DashboardContainer
