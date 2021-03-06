import React, { useContext } from 'react'
import { DashboardContext } from '../../context/dashContext'
import PropTypes from 'prop-types'
import FollowersIndicator from '../FollowersIndicator'
import { OverviewCardStyled, OverviewInfoStyled } from './OverviewCard.style'

const OverviewCard = ({ cardData }) => {
  const { rrss_description, percent, rrss_type, count } = cardData
  const { getSocialMediaData, formattedFollowerNumber, checkIfIsYoutube } =
    useContext(DashboardContext)
  const iconName = getSocialMediaData(rrss_type).name
  const iconImg = getSocialMediaData(rrss_type).component
  const isNegative = percent < 0

  return (
    <OverviewCardStyled>
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

OverviewCard.propTypes = {
  cardData: PropTypes.shape({
    rrss_description: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    rrss_type: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }),
}

export default OverviewCard
