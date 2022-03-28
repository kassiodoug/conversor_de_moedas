import React, { useEffect, useState } from 'react';
import { Button } from './style'; 

function SelectSecondCurrencyItem({ currency, setSecCurrencyApp, secCurrencyApp }) {
  const btnRed = "#d5150b"
  const btnGreen = "#20c634" 
  const [btnColor, setBtnColor] = useState(btnRed);

  const selectSecCurrency = (e) => {
    const newCurrency = e.target.name
    let handleArray = Array(...new Set([...secCurrencyApp, newCurrency]))

    if (secCurrencyApp.indexOf(newCurrency) === -1) {
      setSecCurrencyApp(handleArray)
      setBtnColor(btnGreen)
    } else {
      setSecCurrencyApp(secCurrencyApp.filter(item => item !== newCurrency))
      setBtnColor(btnRed)
    }
  }

  return (
    <section>
      <Button
        onClick={(e) => selectSecCurrency(e)}
        name={currency}
        // style={{ background: btnColor }}
        btnColor={btnColor}
        >
          {currency}
      </Button>
    </section>
  )
}

export default SelectSecondCurrencyItem;
