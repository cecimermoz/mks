import React from 'react'
import DashboardContainerStyled from './DashboardContainer.style'
import DashboardHeader from '../../components/DashboardHeader'
import SocialMediaCardContainer from '../SocialMediaCardContainer'

const DashboardContainer = () => {
  return (
    <DashboardContainerStyled>
      <DashboardHeader />
      <SocialMediaCardContainer />
    </DashboardContainerStyled>
  )
}

export default DashboardContainer
