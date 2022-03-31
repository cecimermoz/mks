import CardTodaysFollowersStyled from './CardTodaysFollowers.style'
import { ReactComponent as IconDown } from '../../assets/icon-down.svg'
import { ReactComponent as IconUp } from '../../assets/icon-up.svg'

const CardTodaysFollowers = (props) => {
  const { isNegative, followers, isYoutube } = props

  return (
    <CardTodaysFollowersStyled isNegative={isNegative}>
      {isNegative ? (
        <IconDown aria-label="Less" />
      ) : (
        <IconUp aria-label="New" />
      )}
      <span aria-label={isYoutube ? 'suscribers per day' : 'followers per day'}>
        {/* TODO: Fix this -- isNegative --*/}
        {followers}
      </span>
      <span>today</span>
    </CardTodaysFollowersStyled>
  )
}

export default CardTodaysFollowers
