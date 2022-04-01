import styled from '@emotion/styled'

const ModalcontainerStyled = styled.div`
  background: ${(props) => (props.isModalOpen ? 'rgba(0, 0, 0, 0.8)' : 'none')};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
`

export { ModalcontainerStyled }
