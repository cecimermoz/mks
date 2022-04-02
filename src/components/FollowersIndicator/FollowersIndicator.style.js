import styled from '@emotion/styled'

const FollowersIndicatorStyled = styled.div`
  color: ${(props) =>
    props.isNegative
      ? props.theme.generals.negative
      : props.theme.generals.positive};
  & > svg {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  & > span {
    font-weight: 700;
    margin-right: 0.5rem;
  }
`
export default FollowersIndicatorStyled
