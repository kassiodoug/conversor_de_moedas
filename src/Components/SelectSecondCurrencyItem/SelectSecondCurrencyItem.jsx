import React, { useEffect, useState } from 'react';
import { Button } from './style'; 

function SelectSecondCurrencyItem({ currency, setSecCurrencyApp, secCurrencyApp }) {
  const [btnColor, setBtnColor] = useState("red");

  const selectSecCurrency = (e) => {
    const newCurrency = e.target.name
    let handleArray = Array(...new Set([...secCurrencyApp, newCurrency]))

    if (secCurrencyApp.indexOf(newCurrency) === -1) {
      setSecCurrencyApp(handleArray)
      // setBtnColor("green")
    } else {
      setSecCurrencyApp(secCurrencyApp.filter(item => item !== newCurrency))
      // setBtnColor("red")
    }
  }

  useEffect(() => {
    setBtnColor("green" ? "red" : "green")
  }, [])

  return (
    <section>
      <Button
        onClick={(e) => selectSecCurrency(e)}
        name={currency}
        style={{ background: btnColor }}
        >
          {currency}
      </Button>
    </section>
  )
}

export default SelectSecondCurrencyItem;
