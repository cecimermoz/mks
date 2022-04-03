import styled from '@emotion/styled'

const DashboardContainerStyled = styled.div`
  width: 100%;
  max-width: 1440px;
  font-family: ${(props) => props.theme.generals.fontFamily};
  margin: 0 auto;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.primaryText};
`
const DashboardBG = styled.div`
  background: ${(props) => props.theme.background};
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  top: 0;
`

export { DashboardBG, DashboardContainerStyled }
