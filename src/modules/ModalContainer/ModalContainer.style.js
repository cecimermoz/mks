import styled from '@emotion/styled'

const ModalBackground = styled.div`
  background: ${(props) =>
    props.isModalOpen ? props.theme.generals.black60 : 'none'};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
`
const ModalStyled = styled.div`
  font-family: ${(props) => props.theme.generals.fontFamily};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  maxwidth: calc(1440px - 4rem);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 1rem;
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.backgroundTop};
  span[datatype='close-modal'] {
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    right: 2rem;
  }
  @media (max-width: 850px) {
    width: 90%;
  }
`
const ModalTitle = styled.div`
  padding: 1rem 4rem;
  > span[datatype='user-name'] {
    margin-left: 0.5rem;
    color: ${(props) => props.theme.secondaryText};
    font-size: 0.9rem;
    font-weight: ${(props) => props.theme.generals.fontWeight[1]};
  }
  @media (max-width: 500px) {
    padding: 2rem;
    > h2 {
      margin: 0.5rem 0;
    }
  }
`
const ModalChart = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 2rem 1rem 2rem 2rem;
  box-sizing: border-box;
  border-radius: 1rem;
  @media (max-width: 500px) {
    display: none;
  }
`

const ModalTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 1250px) {
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-end;
  }
`

const ModalTextStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  &:not(:first-of-type) {
    margin-left: 1.5rem;
  }
  > span {
    font-family: 'Inter', sans-serif;
  }
  > span[datatype='number'],
  > div[datatype='number'] {
    font-size: 2.5rem;
    opacity: 0.85;
    font-weight: 700;
    > svg {
      transform: scale(1.5);
      margin-right: 1rem;
      margin-bottom: 0.3rem;
    }
  }
  > span[datatype='text'] {
    margin-left: 1rem;
  }
  @media (max-width: 1250px) {
    flex-direction: column-reverse;
    align-items: baseline;
    > span[datatype='text'] {
      margin: 0;
    }
  }
  @media (max-width: 700px) {
    flex-direction: row-reverse;
    align-items: center;
    text-align: right;
    gap: 1rem;
  }
  @media (max-width: 500px) {
    > div[datatype='number'] {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
    &:not(:first-of-type) {
      margin-left: 0;
    }
  }
`

export {
  ModalBackground,
  ModalStyled,
  ModalTitle,
  ModalChart,
  ModalTextStyled,
  ModalTextContainer,
}
