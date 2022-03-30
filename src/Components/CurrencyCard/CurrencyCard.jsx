import React, { useEffect, useState } from "react";
import { CurrencySec, BtnConverter, Symbol } from "./style.js";
import Loading from "../Loading/Loading";
import { Table, Td, Th, Thead, Tbody, Tr } from "../GlobalStyle";

const CurrencyCard = ({ mainCurrency, secCurrencys }) => {
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState('')

  const CurrencysSymbol = {
    "AFN": "؋",
    "EUR": "€",
    "ALL": "L",
    "DZD": "د.ج",
    "USD": "$",
    "AOA": "Kz",
    "XCD": "$",
    "ARS": "$",
    "AMD": "",
    "AWG": "ƒ",
    "AUD": "$",
    "AZN": "",
    "BSD": "$",
    "BHD": ".د.ب",
    "BDT": "৳",
    "BBD": "$",
    "BYN": "Br",
    "BZD": "$",
    "XOF": "Fr",
    "BMD": "$",
    "BTN": "Nu.",
    "BOB": "Bs.",
    "BAM": "",
    "BWP": "P",
    "NOK": "kr",
    "BRL": "R$",
    "BND": "$",
    "BGN": "лв",
    "BIF": "Fr",
    "KHR": "៛",
    "XAF": "Fr",
    "CAD": "$",
    "CVE": "Esc",
    "KYD": "$",
    "CLP": "$",
    "CNY": "¥",
    "COP": "$",
    "KMF": "Fr",
    "CDF": "Fr",
    "NZD": "$",
    "CRC": "₡",
    "HRK": "kn",
    "CUC": "$",
    "ANG": "ƒ",
    "CZK": "Kč",
    "DKK": "kr",
    "DJF": "Fr",
    "DOP": "$",
    "EGP": "£",
    "ERN": "Nfk",
    "ETB": "Br",
    "FKP": "£",
    "FJD": "$",
    "XPF": "Fr",
    "GMD": "D",
    "GEL": "ლ",
    "GHS": "₵",
    "GIP": "£",
    "GTQ": "Q",
    "GBP": "£",
    "GNF": "Fr",
    "GYD": "$",
    "HTG": "G",
    "HNL": "L",
    "HKD": "$",
    "HUF": "Ft",
    "ISK": "kr",
    "INR": "₹",
    "IDR": "Rp",
    "IRR": "﷼",
    "IQD": "ع.د",
    "ILS": "₪",
    "JMD": "$",
    "JPY": "¥",
    "JOD": "د.ا",
    "KZT": "",
    "KES": "Sh",
    "KWD": "د.ك",
    "KGS": "с",
    "LAK": "₭",
    "LBP": "ل.ل",
    "LSL": "L",
    "LRD": "$",
    "LYD": "ل.د",
    "CHF": "Fr",
    "MOP": "P",
    "MKD": "ден",
    "MGA": "Ar",
    "MWK": "MK",
    "MYR": "RM",
    "MVR": ".ރ",
    "MRO": "UM",
    "MUR": "₨",
    "MXN": "$",
    "MDL": "L",
    "MNT": "₮",
    "MAD": "د.م.",
    "MZN": "MT",
    "MMK": "Ks",
    "NAD": "$",
    "NPR": "₨",
    "NIO": "C$",
    "NGN": "₦",
    "KPW": "₩",
    "OMR": "ر.ع.",
    "PKR": "₨",
    "PGK": "K",
    "PYG": "₲",
    "PEN": "S/.",
    "PHP": "₱",
    "PLN": "zł",
    "QAR": "ر.ق",
    "RON": "lei",
    "RUB": "₽",
    "RWF": "Fr",
    "SHP": "£",
    "WST": "T",
    "STD": "Db",
    "SAR": "ر.س",
    "RSD": "дин.",
    "SCR": "₨",
    "SLL": "Le",
    "SGD": "$",
    "SBD": "$",
    "SOS": "Sh",
    "ZAR": "R",
    "KRW": "₩",
    "SSP": "£",
    "LKR": "Rs",
    "SDG": "ج.س.",
    "SRD": "$",
    "SZL": "L",
    "SEK": "kr",
    "SYP": "£",
    "TWD": "$",
    "TJS": "ЅМ",
    "TZS": "Sh",
    "THB": "฿",
    "TOP": "T$",
    "TTD": "$",
    "TND": "د.ت",
    "TRY": "",
    "TMT": "m",
    "UGX": "Sh",
    "UAH": "₴",
    "AED": "د.إ",
    "UYU": "$",
    "UZS": "",
    "VUV": "Vt",
    "VEF": "Bs F",
    "VND": "₫",
    "YER": "﷼",
    "ZMW": "ZK"
  }

  const pegarDados = async (e, currencys) => {
    let currencyJoin = currencys ?? secCurrencys.map(item => `${mainCurrency}-${item}`).join(',')
    setResult({})
    setLoading(Loading)
    const response = await fetch(`https://economia.awesomeapi.com.br/last/${currencyJoin}`)
    const dados = await response.json()

    setResult(dados)
  }

  useEffect(() => {
    pegarDados('e', "USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,ARS-BRL")
  }, [])

  return (
    <section>
      {secCurrencys.length ? <BtnConverter onClick={pegarDados} >Converter</BtnConverter> : ''}

      {Object.keys(result).length === 0 ? loading :
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
              {
                Object.keys(result).map((item, index) => {
                  let { name, bid, low, high, code, codein } = result[item]
                  bid = (+bid).toFixed(2)
                  low = (+low).toFixed(2)
                  high = (+high).toFixed(2)

                  return (
                    <Tr key={index}>
                      <Td>
                        <h6>{name.split('/')[0]} ({code}) para:</h6>
                        <h5>{name.split('/')[1]} ({codein})</h5>
                        {/* <p>{code} <span>&#10132;</span> {codein}</p> */}
                      </Td>
                      <Td><Symbol>{`${CurrencysSymbol[codein]}`}</Symbol>{` ${bid}`}</Td>
                      <Td><Symbol>{`${CurrencysSymbol[codein]}`}</Symbol>{` ${low}`}</Td>
                      <Td><Symbol>{`${CurrencysSymbol[codein]}`}</Symbol>{` ${high}`}</Td>
                    </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </CurrencySec>
      }
    </section >
  )
}

export default CurrencyCard;