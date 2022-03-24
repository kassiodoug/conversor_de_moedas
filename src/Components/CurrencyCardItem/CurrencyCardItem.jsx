import React from "react";
import { CardItem } from "./style.js";

const CurrencyCardItem = ({ currency }) => {
  try {
      return(
    <CardItem>
      <h6>{currency.name}</h6>
      <p>{currency.bid}</p>

      <p>Low: {currency.low}</p>
      <p>High: {currency.high}</p>
    </CardItem>
  )
  } catch (error) {
    return(
      <CardItem>
      <h4>Erro na conversão</h4>
    </CardItem>
    )
  }
}

export default CurrencyCardItem;