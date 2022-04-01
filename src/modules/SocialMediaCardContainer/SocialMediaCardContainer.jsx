import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import SocialMediaCard from '../SocialMediaCard'
import SocialMediaCardContainerStyled from './SocialMediaCardContainer.style'
import { DashboardContext } from '../../context/dashContext'

const SocialMediaCardContainer = ({ fetchData }) => {
  return (
    <SocialMediaCardContainerStyled>
      {fetchData.length &&
        fetchData.map((card) => {
          return (
            <SocialMediaCard
              key={`${card.icon}-${card.user_name}`}
              cardData={card}
            />
          )
        })}
    </SocialMediaCardContainerStyled>
  )
}

SocialMediaCardContainer.propTypes = {
  fetchData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default SocialMediaCardContainer
