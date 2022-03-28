import React, { useState } from "react";
import CurrencyCard from "./Components/CurrencyCard/CurrencyCard";
import MainCard from "./Components/MainCard/MainCard";
import SelectSecondCurrency from './Components/SelectSecondCurrency/SelectSecondCurrency';

import GlobalStyle from "./Components/GlobalStyle";
import { Container } from './Components/UI/style.js'

function App() {
  const [currencyApp, setCurrencyApp] = useState({ mainCurrency: '', secCurrency: [] })
  const [secCurrencyApp, setSecCurrencyApp] = useState([])

  return (
    <main>
      <GlobalStyle />
      <Container>
        <MainCard
          setCurrencyApp={setCurrencyApp}
          setSecCurrencyApp={setSecCurrencyApp}
        />
        {
          (currencyApp.mainCurrency === '') ? <h4>Selecione a moeda principal</h4> :
            <SelectSecondCurrency
              currency={currencyApp.secCurrency}
              setSecCurrencyApp={setSecCurrencyApp}
              secCurrencyApp={secCurrencyApp}
            />
        }
        <CurrencyCard
          mainCurrency={currencyApp.mainCurrency}
          secCurrencys={secCurrencyApp}
        />
      </Container>
    </main>
  );
}

export default App;
