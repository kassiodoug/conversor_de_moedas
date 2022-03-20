import React, { useEffect, useState } from "react";
import CardMoedaItem from "./CardMoedaItem";
import { CardMoedaSec } from "./UI/style.js"

const CardMoeda = () => {

  const defaultMoedas = [
    "USD", "EUR", "JPY", "ETH",
    "GBP", "CNY", "BTC", "ARS"
  ]

  const [moedas, setMoedas] = useState({USDBRL: 'OPA'})
  // USD-BRL,EUR-BRL,BTC-BRL
  let moedasJoin = defaultMoedas.map(item => `${item}-BRL`).join(',')

  // console.log(moedasJoin)

  const pegarDados = async () => {
    const response = await fetch(`https://economia.awesomeapi.com.br/last/${moedasJoin}`)
    .then(res => res.json())
    .catch(error => console.log(error))

    setMoedas(response)
    // moedas.forEach(item => console.log(JSON.stringify(item)))
    // console.log(moedas)
  }

  useEffect(() => {
    pegarDados()
  }, [])

  return(
    <CardMoedaSec>
      {Object.keys(moedas).map((moeda, index) => <CardMoedaItem moeda={moedas[moeda]} key={index} />)}
      {/* {Object.keys(moedas).forEach(moeda => console.log(moedas[moeda]))} */}
    </CardMoedaSec>
  )
}

export default CardMoeda;