import styled from '@emotion/styled'

const ModalcontainerStyled = styled.div`
  background: ${(props) =>
    props.isModalOpen ? 'hsla(232, 19%, 15%,0.7)' : 'none'};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
`

export { ModalcontainerStyled }
