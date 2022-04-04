import styled from '@emotion/styled'

const SocialMediaCardStyled = styled.div`
  flex-basis: 23%;
  box-sizing: border-box;
  text-align: center;
  background: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
  &:hover {
    background: ${(props) => props.theme.primaryHover};
    cursor: pointer;
  }
  @media (max-width: 1050px) {
    flex-basis: 48%;
  }
  @media (max-width: 864px) {
    flex-basis: 40%;
  }
  @media (max-width: 720px) {
    flex-basis: 100%;
  }
`
const BorderColor = styled.div`
  border-radius: 0.5rem 0.5rem 0 0;
  height: 0.25rem;
  background: ${(props) => props.background};
}`

const SocialMediaCardTextContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export { SocialMediaCardStyled, SocialMediaCardTextContainer, BorderColor }
