import PropTypes from 'prop-types'
import React from 'react'
import { SocialMediaCard } from '../../components'
import SocialMediaCardContainerStyled from './SocialMediaCardContainer.style'

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
