import React, { useContext } from 'react'
import { DashboardContext } from '../../context/dashContext'
import CardTotalFollowersStyled from './CardTotalFollowers.style'

const CardTotalFollowers = (props) => {
  const { totalFollowers, isYoutube } = props
  const { textByMedia } = useContext(DashboardContext)
  return (
    <CardTotalFollowersStyled>
      <h3 aria-label="Followers in total"> {totalFollowers} </h3>
      <span>{textByMedia(isYoutube, 'suscribers', 'followers')}</span>
    </CardTotalFollowersStyled>
  )
}

export default CardTotalFollowers
