import React from 'react'
import UserName from './CardSocialMediaUser.style'
import PropTypes from 'prop-types'

const CardSocialMediaUser = (props) => {
  const { type, user } = props

  return (
    <div>
      {type}
      <UserName>{user}</UserName>
    </div>
  )
}

CardSocialMediaUser.propTypes = {
  type: PropTypes.element.isRequired,
  user: PropTypes.string.isRequired,
}

export default CardSocialMediaUser
