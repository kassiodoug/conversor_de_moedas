import React from "react";
import { CardItem } from "./UI/style.js";

const CardMoedaItem = ({ moeda }) => {

  const moedasSimbolo = {
    "BRL": "R$"
  }

  return(
    <CardItem>
      <figure>
        <img src="" alt="Bandeira do pais" />
        <h4>{`${moeda.code} -> ${moeda.codein}`}</h4>
        <p>{`${moedasSimbolo[moeda.codein]} ${moeda.bid}`}</p>
      </figure>
    </CardItem>
  )
}

export default CardMoedaItem;