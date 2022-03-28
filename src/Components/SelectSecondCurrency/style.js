import styled from "styled-components"

export const Wrapper =  styled.section`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: .5rem;
  border: 2px solid #ccc;
  border-radius: .5rem;
  gap: .01rem;
  margin: .5rem auto;
  max-width: 70%;
  
  @media (max-width: 800px){
    margin: 1rem auto;
    max-width: 100%;
  }
  
  @media (max-width: 375px){
    margin: 1rem .1rem;
  }
`;