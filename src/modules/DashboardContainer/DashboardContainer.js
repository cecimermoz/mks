import React, { useContext } from 'react'
import DashboardContainerStyled from './DashboardContainer.style'
import DashboardHeader from '../../components/DashboardHeader'
import SocialMediaCardContainer from '../SocialMediaCardContainer'

import OverviewCardContainer from '../OverviewCardContainer/OverviewCardContainer'
import { DashboardContext } from '../../context/dashContext'
import Modalcontainer from '../ModalContainer/ModalContainer'

const DashboardContainer = () => {
  const { fetchedData, fetchedOverviewData, isModalOpen } =
    useContext(DashboardContext)

  return (
    <DashboardContainerStyled>
      <DashboardHeader />
      <SocialMediaCardContainer fetchData={fetchedData} />
      <OverviewCardContainer fetchData={fetchedOverviewData} />
      {isModalOpen && <Modalcontainer />}
    </DashboardContainerStyled>
  )
}

export default DashboardContainer
