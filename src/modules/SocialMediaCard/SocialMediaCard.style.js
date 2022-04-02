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
