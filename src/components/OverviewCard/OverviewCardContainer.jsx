import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  OverviewCardStyled,
  OverviewInfoStyled,
} from './OverviewCardContainer.style'
import { DashboardContext } from '../../context/dashContext'
import FollowersIndicator from '../FollowersIndicator'

const OverviewCard = ({ cardData }) => {
  const { rrss_description, percent, rrss_type, count, icon } = cardData
  const { iconSelect, formattedFollowerNumber, rrss, handleOpenModal } =
    useContext(DashboardContext)
  const iconName = iconSelect(rrss_type).name
  const iconImg = iconSelect(rrss_type).component
  const isNegative = percent < 0
  const isYoutube = rrss_type === rrss[3]

  return (
    <OverviewCardStyled onClick={() => handleOpenModal(cardData)}>
      {/*TODO: Make dinamic arialabel */}
      <h4 aria-label={`${iconName} ${rrss_description}`}>
        {rrss_description} {iconImg}
      </h4>
      <OverviewInfoStyled>
        <span>{formattedFollowerNumber(count)}</span>
        <FollowersIndicator
          isNegative={isNegative}
          followers={formattedFollowerNumber(percent)}
          isYoutube={isYoutube}
        />
      </OverviewInfoStyled>
    </OverviewCardStyled>
  )
}

OverviewCard.propTypes = {}

export default OverviewCard
