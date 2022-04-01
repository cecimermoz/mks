import React from 'react'
import PropTypes from 'prop-types'
import { RRSS } from '../../mocks/data'
import {
  BorderColor,
  SocialMediaCardStyled,
  SocialMediaCardTextContainer,
} from './SocialMediaCard.style'
import { ReactComponent as FB } from '../../assets/icon-facebook.svg'
import { ReactComponent as IG } from '../../assets/icon-instagram.svg'
import { ReactComponent as TW } from '../../assets/icon-twitter.svg'
import { ReactComponent as YT } from '../../assets/icon-youtube.svg'
import CardTodaysFollowers from '../../components/CardTodaysFollowers'
import CardTotalFollowers from '../../components/CardTotalFollowers'
import CardSocialMediaUser from '../../components/CardSocialMediaUser'

const SocialMediaCard = ({ cardData }) => {
  const { followers_perDay, followers_totalNumber, icon, user_name } = cardData
  const isNegative = followers_perDay <= 0
  const isYoutube = icon === RRSS[3]

  const iconSelect = (icon) => {
    switch (icon) {
      case RRSS[0]:
        return {
          component: <FB style={{ verticalAlign: 'middle' }} />,
          background: 'hsl(195, 100%, 50%)',
          name: 'facebook',
        }
      case RRSS[1]:
        return {
          component: <TW style={{ verticalAlign: 'middle' }} />,
          background: 'hsl(203, 89%, 53%)',
          name: 'twitter',
        }
      case RRSS[2]:
        return {
          component: <IG style={{ verticalAlign: 'middle' }} />,
          background:
            'linear-gradient(90deg, hsl(37, 97%, 70%) 0%,  hsl(329, 70%, 58%) 100%)',
          name: 'instagram',
        }
      case RRSS[3]:
        return {
          component: <YT style={{ verticalAlign: 'middle' }} />,
          background: 'hsl(348, 97%, 39%)',
          name: 'youtube',
        }
    }
  }

  const formattedFollowerNumber = (number) => {
    let num = number.toString()
    if (num.length >= 5) return `${num.slice(0, num.length - 3)}k`
    if (number < 0) return number.toString().replace('-', '')
    return number
  }

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
