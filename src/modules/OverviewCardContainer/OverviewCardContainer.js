import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import OverviewCard from '../../components/OverviewCard/OverviewCardContainer'
import OverviewCardContainerStyled from './OverviewCardContainer.style'
import { DashboardContext } from '../../context/dashContext'

const OverviewCardContainer = ({ fetchData }) => {
  const { iconSelect } = useContext(DashboardContext)

  return (
    <section style={{ marginTop: '2.5rem' }}>
      <h2>Overview - Today</h2>
      <OverviewCardContainerStyled>
        {fetchData.map((e) => (
          <OverviewCard
            cardData={e}
            key={`${e.rrss_type}-${e.rrss_description}`}
          />
        ))}
      </OverviewCardContainerStyled>
    </section>
  )
}

OverviewCardContainer.propTypes = {
  //TODO: Make it work
}

export default OverviewCardContainer
