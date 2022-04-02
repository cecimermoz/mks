import styled from '@emotion/styled'

/* The switch - the box around the slider */
const LabelText = styled.label`
  font-weight: 700;
  margin-right: 1rem;
`

const SwitchStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
`
const InputCheck = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background: linear-gradient(
      90deg,
      hsl(210, 78%, 56%) 0%,
      hsl(146, 68%, 55%) 100%
    );
  }

  &:focus + span {
    box-shadow: 0 0 1px
      linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%);
  }

  &:checked + span:before {
    transform: translateX(-23px);
  }
`

const Slider = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(230, 22%, 74%);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: 19px;
    width: 19px;
    right: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    border-radius: 50%;
    transition: 0.4s;
  }
`
export { SwitchStyled, Slider, InputCheck, LabelText }
