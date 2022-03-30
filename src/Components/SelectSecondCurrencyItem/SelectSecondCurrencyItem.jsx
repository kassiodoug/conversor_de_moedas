import React from 'react';
import { Button } from './style'; 

function SelectSecondCurrencyItem({ currency, setSecCurrencyApp, secCurrencyApp }) {
  const btnRed = "#d5150b"
  const btnGreen = "#20c634" 

  const selectSecCurrency = (e) => {
    const newCurrency = e.target.value
    let handleArray = Array(...new Set([...secCurrencyApp, newCurrency]))

    if (secCurrencyApp.indexOf(newCurrency) === -1) {
      setSecCurrencyApp(handleArray)
    } else {
      setSecCurrencyApp(secCurrencyApp.filter(item => item !== newCurrency))
    }
  }

  return (
    <section>
      <Button
        onClick={selectSecCurrency}
        value={currency}
        selectSecCurrency={selectSecCurrency}
        btnColor={secCurrencyApp.indexOf(currency) === -1 ? btnRed : btnGreen }
        >
          {currency}
      </Button>
    </section>
  )
}

export default SelectSecondCurrencyItem;
