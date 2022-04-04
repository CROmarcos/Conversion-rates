import { useState } from 'react';
import './App.css';
import data from './exchangerates.json'

function App() {

  // Ispuna polja valuta
  let valute = []
  data.forEach(item => {
    valute.push(item.valuta)
  });

  const [input, setInput] = useState({
    currency: 'AUD',
    amount: 0
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    console.log(input)
  }

  const convert = (money) => {
    let trazenaValuta = data.find(vlt => vlt.valuta === input.currency)
    return input.amount * parseFloat(trazenaValuta.srednji_tecaj) / money
  }

  convert(100)

  return (
    <div className="App">
      <header className="App-header">
        <h2>Curency rate</h2>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>Broj tečajnice</th>
              <th>Datum primjene</th>
              <th>Država</th>
              <th>Država ISO</th>
              <th>Šifra valute</th>
              <th>Valuta</th>
              <th>Jedinica</th>
              <th>Kupovni tečaj</th>
              <th>Srednji tečaj</th>
              <th>Prodajni tečaj</th>
              <th>Konverzija</th>
            </tr>
          </thead>
          <tbody>
            {data.map(valuta =>
              <tr key={valuta.valuta}>
                <td>{valuta.broj_tecajnice}</td>
                <td>{valuta.datum_primjene}</td>
                <td>{valuta.drzava}</td>
                <td>{valuta.drzava_iso}</td>
                <td>{valuta.sifra_valute}</td>
                <td>{valuta.valuta}</td>
                <td>{valuta.jedinica}</td>
                <td>{valuta.kupovni_tecaj}</td>
                <td>{valuta.srednji_tecaj}</td>
                <td>{valuta.prodajni_tecaj}</td>
                <td>{input.currency === valuta.valuta ? "---" : convert(parseFloat(valuta.srednji_tecaj)).toLocaleString("en-US", { maximumFractionDigits: 7 })}</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Input za promjenu vrijednosti */}
        <div className='Unos'>
          <div>
            <label className='amountInput'>Unesi iznos</label>
            <input className='amountInput' type="number" name='amount' value={input.amount} onChange={handleChange}></input>
            <br />
            <label>Odaberi valutu</label>
            <select id='izborValute' name='currency' onChange={handleChange}>
              {valute.map(
                vlt => <option key={vlt}>{vlt}</option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
