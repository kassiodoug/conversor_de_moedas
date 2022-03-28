import React from "react";
import { CardItem } from "./style.js";
import { Td, Tr } from "../GlobalStyle";

const CurrencyCardItem = ({ currency }) => {

  try {
    return (
      // <CardItem>
      //   <h6>{currency.name}</h6>
      //   <p>{currency.bid}</p>

      //   <p>Low: {currency.low}</p>
      //   <p>High: {currency.high}</p>
      // </CardItem>




      <Tr>
        <Td>
          <p>{currency.name}</p>
          <p>{`${currency.codein} -> ${currency.code}`}</p>
        </Td>
        <Td>{currency.bid}</Td>
        <Td>{currency.low}</Td>
        <Td>{currency.high}</Td>
      </Tr>


    )
  } catch (error) {
    return (
      <CardItem>
        <h4>Erro na conversão</h4>
      </CardItem>
    )
  }
}

export default CurrencyCardItem;