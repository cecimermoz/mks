import React from 'react'
import PropTypes from 'prop-types'
import SocialMediaCard from '../SocialMediaCard'
import SocialMediaCardContainerStyled from './SocialMediaCardContainer.style'

const SocialMediaCardContainer = ({ fetch_data }) => {
  return (
    <SocialMediaCardContainerStyled>
      {fetch_data.map((card) => {
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
  fetch_data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default SocialMediaCardContainer
