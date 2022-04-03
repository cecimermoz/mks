import React from 'react'
import OverviewCard from '../../components/OverviewCard/OverviewCardContainer'
import { OverviewCardContainerStyled } from './OverviewCardContainer.style'

const OverviewCardContainer = ({ fetchData }) => {
  return (
    <div
      style={{
        margin: '2.5rem 0 1.25rem 0',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}
    >
      <h2>Overview - Today</h2>
      <OverviewCardContainerStyled>
        {fetchData.map((e) => (
          <OverviewCard
            cardData={e}
            key={`${e.rrss_type}-${e.rrss_description}`}
          />
        ))}
      </OverviewCardContainerStyled>
    </div>
  )
}

OverviewCardContainer.propTypes = {
  //TODO: Make it work
}

export default OverviewCardContainer
