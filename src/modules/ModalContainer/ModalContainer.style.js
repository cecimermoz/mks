import styled from '@emotion/styled'

const ModalBackground = styled.div`
  background: ${(props) =>
    props.isModalOpen ? 'hsla(230, 17%, 14%, 50%)' : 'none'};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  color: hsl(0, 0%, 100%);
`
const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% - 2rem);
  transform: translate(-50%, -50%);
  width: 70%;
  maxwidth: calc(1440px - 4rem);
  margin: 2rem;
  background-color: hsl(232, 19%, 15%);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 1rem;
  span[datatype='close-modal'] {
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    right: 2rem;
  }
`

const ModalTextStyled = styled.div`
  display: flex;
  align-items: center;
  
    &:not(:first-of-type){
      margin-left: 1.5rem;
    }
  >span{
    color: hsl(228, 34%, 66%),
    font-family: 'Inter', sans-serif;
    margin: 2rem 0 1.5rem 0;
  }
  > span[datatype='number'], >div[datatype="number"] {
    font-size: 3rem;
    font-weight: 700;
    > svg{
      transform: scale(1.5);
      margin-right: 1rem;
    }
  }
  > span[datatype='text'] {
    font-size: 1.1rem;
    margin-left: 1rem
  }
`

export { ModalBackground, ModalStyled, ModalTextStyled }
