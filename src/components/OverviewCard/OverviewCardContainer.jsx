import React from 'react'
import PropTypes from 'prop-types'
import { OverviewCardStyled } from './OverviewCardContainer.style'

const OverviewCard = ({ cardData }) => {
  const { rrss_description, rrss_type, percent, count } = cardData

  return (
    <OverviewCardStyled>
      {/*TODO: Make dinamic arialabel */}
      <h4 aria-label={`${rrss_type} ${rrss_description}`}>
        {rrss_description} {rrss_type}
      </h4>
      <div>
        <span>{count}</span>
        <span>{percent}</span>
      </div>
    </OverviewCardStyled>
  )
}

OverviewCard.propTypes = {}

export default OverviewCard
