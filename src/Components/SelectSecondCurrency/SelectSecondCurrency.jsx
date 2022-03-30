import React from 'react';
import { Wrapper } from './style';
import SelectSecondCurrencyItem from '../SelectSecondCurrencyItem/SelectSecondCurrencyItem'

function SelectSecondCurrency({ currency, setSecCurrencyApp, secCurrencyApp }) {
  
  return (
    <section>
      <h4>Conversões válidas para a moeda selecionada</h4>
      <Wrapper>
        {
          Object.keys(currency).map((item, index) => 
            <SelectSecondCurrencyItem
              key={index}
              currency={currency[item]}
              setSecCurrencyApp={setSecCurrencyApp} 
              secCurrencyApp={secCurrencyApp}
            />)}
      </Wrapper>
    </section>
  )
}

export default SelectSecondCurrency;
