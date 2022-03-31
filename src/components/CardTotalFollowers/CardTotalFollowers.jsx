import React from 'react'
import CardTotalFollowersStyled from './CardTotalFollowers.style'

const CardTotalFollowers = (props) => {
  const { totalFollowers, isYoutube } = props
  return (
    <CardTotalFollowersStyled>
      <h3 aria-label="Followers in total"> {totalFollowers} </h3>
      <span>{isYoutube ? 'suscribers' : 'followers'}</span>
    </CardTotalFollowersStyled>
  )
}

export default CardTotalFollowers
