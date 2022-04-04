import styled from '@emotion/styled'
import { SocialMediaCardStyled } from '../../components/SocialMediaCard/SocialMediaCard.style'

const OverviewCardStyled = styled(SocialMediaCardStyled)`
  padding: 2rem 2rem 2rem 1.5rem;
  > h4 {
    margin: 0 0 1.75rem 0;
    font-size: 14px;
    font-weight: ${(props) => props.theme.generals.fontWeight[0]};
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 1264px) and (min-width: 1051px) {
    padding: 2rem 1rem;
    flex-basis: 31%;
  }
  @media (max-width: 720px) {
    flex-basis: 100%;
  }
`
const OverviewInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  > span {
    font-size: 2.5rem;
    font-weight: 700;
  }
`

export { OverviewCardStyled, OverviewInfoStyled }
