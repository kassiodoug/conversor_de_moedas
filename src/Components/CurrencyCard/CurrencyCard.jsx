import React, { useState } from "react";
import CurrencyCardItem from "../CurrencyCardItem/CurrencyCardItem";
import { CurrencySec } from "./style.js"

const CurrencyCard = ({ mainCurrency, secCurrencys }) => {
  const [result, setResult] = useState({})

  let moedasJoin = secCurrencys.map(item => `${mainCurrency}-${item}`).join(',')

  const pegarDados = async () => {
    const response = await fetch(`https://economia.awesomeapi.com.br/last/${moedasJoin}`)
      .then(res => res.json())
      .catch(error => console.log(error))

    setResult(response)
  }

  return (
    <section>
      {secCurrencys.length ? <button onClick={() => pegarDados()} >Converter</button> : ''}
      <CurrencySec>
        {Object.keys(result).length > 0 ?
          Object.keys(result).map((item, index) => <CurrencyCardItem key={index} currency={result[item]} />)
          : 'ola'
        }
      </CurrencySec>
    </section>
  )
}

export default CurrencyCard;