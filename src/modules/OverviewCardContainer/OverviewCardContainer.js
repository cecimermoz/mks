import React from 'react'
import OverviewCard from '../../components/OverviewCard/OverviewCardContainer'
import SocialMediaCardContainerStyled from '../SocialMediaCardContainer/SocialMediaCardContainer.style'

const OverviewCardContainer = ({ fetchData }) => {
  return (
    <section style={{ margin: '2.5rem 0 1.25rem 0r' }}>
      <h2>Overview - Today</h2>
      <SocialMediaCardContainerStyled>
        {fetchData.map((e) => (
          <OverviewCard
            cardData={e}
            key={`${e.rrss_type}-${e.rrss_description}`}
          />
        ))}
      </SocialMediaCardContainerStyled>
    </section>
  )
}

OverviewCardContainer.propTypes = {
  //TODO: Make it work
}

export default OverviewCardContainer
