import React from 'react'
import PropTypes from 'prop-types'
import { RRSS } from '../../mocks/data'
import {
  SocialMediaCardStyled,
  SocialMediaCardTextContainer,
  UserName,
} from './SocialMediaCard.style'
import { ReactComponent as FB } from '../../assets/icon-facebook.svg'
import { ReactComponent as IG } from '../../assets/icon-instagram.svg'
import { ReactComponent as TW } from '../../assets/icon-twitter.svg'
import { ReactComponent as YT } from '../../assets/icon-youtube.svg'
import CardTodaysFollowers from '../../components/CardTodaysFollowers'
import CardTotalFollowers from '../../components/CardTotalFollowers'

const SocialMediaCard = ({ cardData }) => {
  const { followers_perDay, followers_totalNumber, icon, user_name } = cardData
  const isNegative = followers_perDay <= 0
  const isYoutube = icon === RRSS[3]

  const iconSelect = (icon) => {
    switch (icon) {
      case RRSS[0]:
        return <FB style={{ verticalAlign: 'middle' }} />
      case RRSS[1]:
        return <TW style={{ verticalAlign: 'middle' }} />
      case RRSS[2]:
        return <IG style={{ verticalAlign: 'middle' }} />
      case RRSS[3]:
        return <YT style={{ verticalAlign: 'middle' }} />
    }
  }

  const backgroundSelect = (icon) => {
    switch (icon) {
      case RRSS[0]:
        return 'hsl(195, 100%, 50%)'
      case RRSS[1]:
        return 'hsl(203, 89%, 53%)'
      case RRSS[2]:
        return 'linear-gradient(90deg, hsl(37, 97%, 70%) 0%,  hsl(329, 70%, 58%) 100%);'
      case RRSS[3]:
        return 'hsl(348, 97%, 39%)'
    }
  }

  const formattedTotalFollowers = (number) => {
    let num = number.toString()
    if (num.length >= 5) return `${num.slice(0, num.length - 3)}k`
    return number
  }
  const formattedFollowersPerDay = (number) => {
    if (number < 0) return number.toString().replace('-', '')
    return number
  }

  return (
    cardData && (
      <SocialMediaCardStyled background={backgroundSelect(icon)}>
        <div />
        <SocialMediaCardTextContainer>
          <div>
            {iconSelect(icon)}
            <UserName>{user_name}</UserName>
          </div>
          <CardTotalFollowers
            totalFollowers={formattedTotalFollowers(followers_totalNumber)}
            isYoutube={isYoutube}
          />
          <CardTodaysFollowers
            followers={formattedFollowersPerDay(followers_perDay)}
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