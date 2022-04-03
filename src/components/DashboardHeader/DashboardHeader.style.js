import styled from '@emotion/styled'

const DashboardHeaderStyled = styled.header`
  width: 100%;
  display: flex;
`
const HeaderText = styled.div`
  flex: 3;
  padding: 20px 0;
`
const H1Styled = styled.h1`
  margin: 0;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.primaryText};
`
const SubTextStyled = styled.span`
  font-size: 1rem;
  font-weight: ${(props) => props.theme.generals.fontWeight[1]};
  color: ${(props) => props.theme.secondaryText};
`

const ModeSwitch = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 720px) {
    justify-content: center;
    flex: 1.5;
    flex-wrap: wrap;
    text-align: right;
    align-content: flex-end;
    flex-direction: column;
  }
`

export {
  DashboardHeaderStyled,
  HeaderText,
  ModeSwitch,
  H1Styled,
  SubTextStyled,
}
