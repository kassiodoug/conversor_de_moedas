import styled from "styled-components";

export const CurrencySec = styled.section`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  max-width: 100vw;
  justify-content: center;
  margin: .5rem auto;

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

export const BtnConverter = styled.button`
  padding: .5rem;
  background: green;
  border: none;
  border-radius: 10px;
  color: white;
  
  :hover {
    background: green;
    font-weight: bold;
    cursor: pointer;
  }
`;

