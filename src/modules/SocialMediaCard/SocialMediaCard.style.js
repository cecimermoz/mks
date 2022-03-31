import styled from '@emotion/styled'

const SocialMediaCardStyled = styled.div`
  flex: 1;
  text-align: center;
  background: hsl(232, 19%, 15%);
  border-radius: 0.5rem;
  & > div:first-of-type {
    border-radius: 0.5rem 0.5rem 0 0;
    height: 0.25rem;
    background-color: red; /*TODO: make dinamic */
  }
  &:hover {
    background: hsl(228, 28%, 20%);
    cursor: pointer;
  }
`
const SocialMediaCardTextContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const UserName = styled.span`
  margin-left: 1rem;
  vertical-align: middle;
`

export { SocialMediaCardStyled, SocialMediaCardTextContainer, UserName }
