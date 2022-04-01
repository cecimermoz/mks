import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  BorderColor,
  SocialMediaCardStyled,
  SocialMediaCardTextContainer,
} from './SocialMediaCard.style'
import CardTodaysFollowers from '../../components/CardTodaysFollowers'
import CardTotalFollowers from '../../components/CardTotalFollowers'
import CardSocialMediaUser from '../../components/CardSocialMediaUser'
import { DashboardContext } from '../../context/dashContext'

const SocialMediaCard = ({ cardData }) => {
  const { rrss, iconSelect, formattedFollowerNumber } =
    useContext(DashboardContext)
  const { followers_perDay, followers_totalNumber, icon, user_name } = cardData
  const isNegative = followers_perDay <= 0
  const isYoutube = icon === rrss[3]

  return (
    cardData && (
      <SocialMediaCardStyled>
        <BorderColor background={iconSelect(icon).background} />
        <SocialMediaCardTextContainer>
          <CardSocialMediaUser
            type={iconSelect(icon).component}
            user={user_name}
          />
          <CardTotalFollowers
            totalFollowers={formattedFollowerNumber(followers_totalNumber)}
            isYoutube={isYoutube}
          />
          <CardTodaysFollowers
            followers={formattedFollowerNumber(followers_perDay)}
            isNegative={isNegative}
            isYoutube={isYoutube}
          />
        </SocialMediaCardTextContainer>
      </SocialMediaCardStyled>
    )
  )
}

SocialMediaCard.propTypes = {
  // TODO: make it work
  //followers_perDay: PropTypes.number.isRequired,
  //followers_totalNumber: PropTypes.number.isRequired,
  //icon: PropTypes.string.isRequired,
  //user_name: PropTypes.string.isRequired,
}

export default SocialMediaCard
