import React from 'react'
import UserName from './CardSocialMediaUser.style'

const CardSocialMediaUser = (props) => {
  const { type, user } = props
  return (
    <div>
      {type}
      <UserName>{user}</UserName>
    </div>
  )
}

export default CardSocialMediaUser
