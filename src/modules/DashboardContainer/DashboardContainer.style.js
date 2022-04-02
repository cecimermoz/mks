import styled from '@emotion/styled'

const DashboardContainerStyled = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  font-family: ${(props) => props.theme.generals.fontFamily};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.primaryText};
`
const DashboardBG = styled.div`
  background: ${(props) => props.theme.background};
`

export { DashboardBG, DashboardContainerStyled }
