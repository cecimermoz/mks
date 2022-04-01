import styled from '@emotion/styled'
import { SocialMediaCardStyled } from '../../modules/SocialMediaCard/SocialMediaCard.style'

const OverviewCardStyled = styled(SocialMediaCardStyled)`
  padding: 2rem 2rem 2rem 1.5rem;
  > h4 {
    margin: 0 0 2rem 0;
    display: flex;
    justify-content: space-between;
  }
`
const OverviewInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  > span {
    font-size: 3rem;
    font-weight: 700;
  }
`

export { OverviewCardStyled, OverviewInfoStyled }
