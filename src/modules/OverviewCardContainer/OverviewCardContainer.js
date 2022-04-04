import React from 'react'
import { OverviewCard } from '../../components'
import PropTypes from 'prop-types'

import {
  OverviewCardContainerStyled,
  OverviewSectionStyled,
} from './OverviewCardContainer.style'

const OverviewCardContainer = ({ fetchData }) => {
  return (
    <OverviewSectionStyled>
      <h2>Overview - Today</h2>
      <OverviewCardContainerStyled>
        {fetchData.map((el) => (
          <OverviewCard
            cardData={el}
            key={`${el.rrss_type}-${el.rrss_description}`}
          />
        ))}
      </OverviewCardContainerStyled>
    </OverviewSectionStyled>
  )
}

OverviewCardContainer.propTypes = {
  fetchData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default OverviewCardContainer
