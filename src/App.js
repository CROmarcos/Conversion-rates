import { useState } from 'react';
import './App.css';
import data from './exchangerates.json'

function App() {

  // Ispuna polja valuta
  let valute = []
  data.forEach(item => {
    valute.push(item.valuta)
  });

  const [curr, setCurr] = useState('AUD')
  const [amount, setAmount] = useState(0)

  const currencyChange = () => {
    var select = document.getElementById('izborValute').value.toString();
    setCurr(select)
  }

  const amountChange = () => {
    var select = parseFloat(document.getElementById('iznos').value.toString());
    setAmount(select)
  }

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
                <td>{curr}</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Input za promjenu vrijednosti */}
        <div className='Unos'>
          <div>
            <label>Unesi iznos</label>
            <input type="number" id='iznos' onChange={amountChange}></input></div>
          <div>
            <label>Odaberi valutu</label>
            <select id='izborValute' onChange={currencyChange}>
              {valute.map(
                valuta => <option key={valuta}>{valuta}</option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
