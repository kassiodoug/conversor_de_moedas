import styled, { createGlobalStyle } from "styled-components";

let GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    transition: 100ms all;
  }
`;

export const Table = styled.table`
  width: 100vw;
  border-collapse: collapse;
  text-align: left;
`;

export const Tr = styled.tr`
  /* background: #eee; */
  border-bottom: 1px solid black;
`;

export const Td = styled.td`
  :nth-child(1) {
    padding: 0.3rem;
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
  tr:nth-child(even) {
    background: #eee;
  }
`;

export const Th = styled.th`
  font-weight: normal;
  padding: 0.3rem;
`;

export default GlobalStyle;
