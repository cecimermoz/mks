import React from 'react'
import PropTypes from 'prop-types'
import OverviewCard from '../../components/OverviewCard/OverviewCardContainer'
import OverviewCardContainerStyled from './OverviewCardContainer.style'

const OverviewCardContainer = ({ fetchData }) => {
  console.log(fetchData)
  return (
    <>
      <h2>Overview - Today</h2>
      <OverviewCardContainerStyled>
        {fetchData.map((e) => (
          <OverviewCard
            cardData={e}
            key={`${e.rrss_type}-${e.rrss_description}`}
          />
        ))}
      </OverviewCardContainerStyled>
    </>
  )
}

OverviewCardContainer.propTypes = {
  //TODO: Make it work
}

export default OverviewCardContainer
