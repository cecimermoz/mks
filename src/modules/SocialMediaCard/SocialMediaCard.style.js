import styled from '@emotion/styled'

const SocialMediaCardStyled = styled.div`
  flex: 1;
  text-align: center;
  background: hsl(232, 19%, 15%);
  border-radius: 0.5rem;
  &:hover {
    background: hsl(228, 28%, 20%);
    cursor: pointer;
  }
`
const BorderColor = styled.div`
  border-radius: 0.5rem 0.5rem 0 0;
  height: 0.25rem;
  background: ${(props) => props.background};
}`

const SocialMediaCardTextContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export { SocialMediaCardStyled, SocialMediaCardTextContainer, BorderColor }
