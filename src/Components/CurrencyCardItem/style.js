import styled from "styled-components";

export const CardItem = styled.section`
  border: 2px solid white;
  border-radius: .5rem;
  margin: .2rem;
  padding: 1rem;
  font-size: 1rem;
  flex-basis: 20%;

  @media (max-width: 900px){
    background: yellow;
  }

  @media (max-width: 600px){
    flex-basis: 40%;
    background: green;
  }
  
  @media (max-width: 375px){
    flex-basis: 100%;
  }
`;