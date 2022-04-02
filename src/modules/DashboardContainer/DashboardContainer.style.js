import styled from '@emotion/styled'

const DashboardContainerStyled = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  background: ${(props) => props.theme.primary};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /*temporary*/
  color: hsl(0, 0%, 100%);
`

export default DashboardContainerStyled
