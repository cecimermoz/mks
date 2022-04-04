import React, { useContext } from 'react'
import {
  CardSocialMediaUser,
  CardTotalFollowers,
  FollowersIndicator,
} from '../../components'
import { DashboardContext } from '../../context/dashContext'
import PropTypes from 'prop-types'
import {
  BorderColor,
  SocialMediaCardStyled,
  SocialMediaCardTextContainer,
} from './SocialMediaCard.style'

const SocialMediaCard = ({ cardData }) => {
  const {
    getSocialMediaData,
    formattedFollowerNumber,
    handleOpenModal,
    checkIfIsYoutube,
  } = useContext(DashboardContext)
  const { followers_perDay, followers_totalNumber, icon, user_name } = cardData
  const isNegative = followers_perDay <= 0

  return (
    cardData && (
      <SocialMediaCardStyled onClick={() => handleOpenModal(cardData)}>
        <BorderColor background={getSocialMediaData(icon).background} />
        <SocialMediaCardTextContainer>
          <CardSocialMediaUser
            type={getSocialMediaData(icon).component}
            user={user_name}
          />
          <CardTotalFollowers
            totalFollowers={formattedFollowerNumber(followers_totalNumber)}
            isYoutube={checkIfIsYoutube(icon)}
          />
          <FollowersIndicator
            followers={formattedFollowerNumber(followers_perDay)}
            isNegative={isNegative}
            isYoutube={checkIfIsYoutube(icon)}
            isToday
            needPercent
          />
        </SocialMediaCardTextContainer>
      </SocialMediaCardStyled>
    )
  )
}

SocialMediaCard.propTypes = {
  cardData: PropTypes.shape({
    followers_perDay: PropTypes.number.isRequired,
    followers_totalNumber: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    user_name: PropTypes.string.isRequired,
  }),
}

export default SocialMediaCard
