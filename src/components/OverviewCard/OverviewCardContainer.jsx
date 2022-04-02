import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  OverviewCardStyled,
  OverviewInfoStyled,
} from './OverviewCardContainer.style'
import { DashboardContext } from '../../context/dashContext'
import FollowersIndicator from '../FollowersIndicator'

const OverviewCard = ({ cardData }) => {
  const { rrss_description, percent, rrss_type, count } = cardData
  const {
    getSocialMediaData,
    formattedFollowerNumber,
    rrss,
    handleOpenModal,
    checkIfIsYoutube,
  } = useContext(DashboardContext)
  const iconName = getSocialMediaData(rrss_type).name
  const iconImg = getSocialMediaData(rrss_type).component
  const isNegative = percent < 0

  return (
    <OverviewCardStyled>
      {/*TODO: Make dinamic arialabel */}
      <h4 aria-label={`${iconName} ${rrss_description}`}>
        {rrss_description} {iconImg}
      </h4>
      <OverviewInfoStyled>
        <span>{formattedFollowerNumber(count)}</span>
        <FollowersIndicator
          isNegative={isNegative}
          followers={formattedFollowerNumber(percent)}
          isYoutube={checkIfIsYoutube(rrss_type)}
          needPercent
        />
      </OverviewInfoStyled>
    </OverviewCardStyled>
  )
}

OverviewCard.propTypes = {}

export default OverviewCard
