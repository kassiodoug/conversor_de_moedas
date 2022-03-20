import styled from 'styled-components'

export const Container = styled.section`
  background: blue;
  text-align: center;
  padding: .5rem;
`;

export const CardItem = styled.section`
  border: 2px solid white;
  border-radius: .5rem;
  margin: .2rem;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1rem;
  flex-basis: 20%;

  @media (max-width: 900px){
    background: yellow;
  }

  @media (max-width: 600px){
    flex-basis: 30%;
    background: green;
  }
  
  @media (max-width: 375px){
    flex-basis: 100%;
  }
`;

export const CardMoedaPrincipal = styled.section`
  width: 40%;
  height: 40%;
  min-height: 175px;
  min-width: 175px;
  max-height: 200px;
  max-width: 200px;
  border: 2px solid white;
  border-radius: .5rem;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0 auto 2rem;
`;

export const CardMoedaSec = styled.section`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  max-width: 100vw;
  justify-content: center;
  margin: 0 auto;

  box-sizing: content-box;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* @media (max-width: 825px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 625px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  } */
`;