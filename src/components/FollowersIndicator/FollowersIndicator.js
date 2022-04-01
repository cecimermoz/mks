import FollowersIndicatorStyled from './FollowersIndicator.style'
import PropTypes from 'prop-types'

import { ReactComponent as IconDown } from '../../assets/icon-down.svg'
import { ReactComponent as IconUp } from '../../assets/icon-up.svg'

const FollowersIndicator = (props) => {
  const { isNegative, followers, isYoutube, isToday } = props

  return (
    <FollowersIndicatorStyled isNegative={isNegative}>
      {isNegative ? (
        <IconDown aria-label="Less" />
      ) : (
        <IconUp aria-label="New" />
      )}
      <span aria-label={isYoutube ? 'suscribers per day' : 'followers per day'}>
        {isToday ? followers : `${followers}%`}
      </span>
      {isToday && <span>today</span>}
    </FollowersIndicatorStyled>
  )
}

FollowersIndicator.propTypes = {
  isToday: PropTypes.bool,
}
FollowersIndicator.defaultProps = {
  isToday: false,
}

export default FollowersIndicator
