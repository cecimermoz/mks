import styled from '@emotion/styled'
import SocialMediaCardContainerStyled from '../SocialMediaCardContainer/SocialMediaCardContainer.style'

const OverviewSectionStyled = styled(SocialMediaCardContainerStyled)`
        margin: 2.5rem 0 1.25rem 0;
        display: flex;
        flex-direction: column;
        flex-wrap: : wrap;
`
const OverviewCardContainerStyled = styled(SocialMediaCardContainerStyled)`
  flex-wrap: wrap;
`

export { OverviewCardContainerStyled, OverviewSectionStyled }
