import styled from '@emotion/styled'

const CardTodaysFollowersStyled = styled.div`
  color: ${({ isNegative }) =>
    isNegative ? 'hsl(356, 69%, 56%)' : 'hsl(163, 72%, 41%)'};
  & > svg {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  & > span {
    font-weight: 700;
    margin-right: 0.5rem;
  }
`
export default CardTodaysFollowersStyled
