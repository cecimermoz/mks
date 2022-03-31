import React from 'react'
import DashboardContainerStyled from './DashboardContainer.style'
import DashboardHeader from '../../components/DashboardHeader'
import SocialMediaCardContainer from '../SocialMediaCardContainer'
import {
  RRSS,
  MOCKED_FETCH_DATA,
  MOCKED_FETCH_DATA_OVERVIEW_TODAY,
} from '../../mocks/data'

const DashboardContainer = () => {
  return (
    <DashboardContainerStyled>
      <DashboardHeader />
      <SocialMediaCardContainer fetch_data={MOCKED_FETCH_DATA} />
    </DashboardContainerStyled>
  )
}

export default DashboardContainer
