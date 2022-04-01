import FollowersIndicatorStyled from './FollowersIndicator.style'
import PropTypes from 'prop-types'

import { ReactComponent as IconDown } from '../../assets/icon-down.svg'
import { ReactComponent as IconUp } from '../../assets/icon-up.svg'
import { useContext } from 'react'
import { DashboardContext } from '../../context/dashContext'

const FollowersIndicator = (props) => {
  const { isNegative, followers, isYoutube, isToday } = props
  const { textByMedia } = useContext(DashboardContext)

  return (
    <FollowersIndicatorStyled isNegative={isNegative}>
      {isNegative ? (
        <IconDown aria-label="Less" />
      ) : (
        <IconUp aria-label="New" />
      )}
      <span
        aria-label={textByMedia(
          isYoutube,
          'suscribers per day',
          'followers per day'
        )}
      >
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
