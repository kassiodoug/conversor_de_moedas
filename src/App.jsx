import React from "react";
import CardMoeda from "./Components/CardMoeda";
import CardPrincipal from "./Components/CardPrincipal";

import GlobalStyle from "./Components/GlobalStyle";
import { Container } from './Components/UI/style.js' 

function App() {
  return (
    <main>
      <GlobalStyle />
        <Container>
          <CardPrincipal />
          <CardMoeda />
        </Container>
    </main>
  );
}

export default App;
