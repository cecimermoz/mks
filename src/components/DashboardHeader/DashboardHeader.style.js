import styled from '@emotion/styled'

const DashboardHeaderStyled = styled.header`
  width: 100%;
  display: flex;
`
const HeaderText = styled.div`
  flex: 4;
  padding: 20px 0;
`
const H1Styled = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.primaryText};
`
const SubTextStyled = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.secondaryText};
`

const ModeSwitch = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export {
  DashboardHeaderStyled,
  HeaderText,
  ModeSwitch,
  H1Styled,
  SubTextStyled,
}
