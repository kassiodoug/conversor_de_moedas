import styled from "styled-components"

export const Button =  styled.button(props => ({
  color: 'white',
  background: props.btnColor ?? "#d5150b",
  padding: '.1rem .5rem',
  border: '2px solid white',
  borderRadius: '20px',
  cursor: 'pointer',
  fontSize: '0.8rem',
}));
