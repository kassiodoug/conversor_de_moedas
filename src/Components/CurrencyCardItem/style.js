import styled from "styled-components";

export const CardItem = styled.section`
  border: 2px solid #ccc;
  border-radius: .5rem;
  margin: .2rem;
  padding: 1rem;
  font-size: 1rem;
  
  @media (max-width: 900px){
    flex-basis: 20%;
  }

  @media (max-width: 600px){
    flex-basis: 40%;
  }
  
  @media (max-width: 375px){
    flex-basis: 100%;
  }
`;
