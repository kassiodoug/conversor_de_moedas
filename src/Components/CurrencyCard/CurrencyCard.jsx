import React, { useState } from "react";
import CurrencyCardItem from "../CurrencyCardItem/CurrencyCardItem";
import { CurrencySec, BtnConverter } from "./style.js";
import Loading from "../Loading/Loading";
import { Table, Td, Th, Thead, Tbody, Tr } from "../GlobalStyle";

const CurrencyCard = ({ mainCurrency, secCurrencys }) => {
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState('')

  let moedasJoin = secCurrencys.map(item => `${mainCurrency}-${item}`).join(',')

  const pegarDados = async () => {
    setResult({})
    const response = await fetch(`https://economia.awesomeapi.com.br/last/${moedasJoin}`)
      .then(res => res.json())
      .catch(error => console.log(error))

    setLoading(Loading)
    setResult(response)
  }

  return (
    <section>
      {secCurrencys.length ? <BtnConverter onClick={pegarDados} >Converter</BtnConverter> : ''}
      <CurrencySec>

        <Table>
          <Thead>
            <Tr>
              <Th>Moedas</Th>
              <Th>Venda</Th>
              <Th>Mínimo</Th>
              <Th>Máxima</Th>
            </Tr>
          </Thead>
          <Tbody>

            {/* {loading &&
          Object.keys(result).map((item, index) => <CurrencyCardItem key={index} currency={result[item]} />)
          
        } */}
            {/* {Object.keys(result).length > 0 ?
              Object.keys(result).map((item, index) => <CurrencyCardItem key={index} currency={result[item]} />)
              : loading
            } */}
            {
              Object.keys(result).map((item, index) => (
                <Tr key={index}  >
                  <Td>
                    <h6>{result[item].name}</h6>
                    <p>{`${result[item].code} --> ${result[item].codein}`}</p>
                  </Td>
                  <Td>{result[item].bid}</Td>
                  <Td>{result[item].low}</Td>
                  <Td>{result[item].high}</Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </CurrencySec>
    </section >
  )
}

export default CurrencyCard;