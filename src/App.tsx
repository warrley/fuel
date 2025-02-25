import { act, useState } from 'react';
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [alcohol, setAlcohol] = useState<number>(0);
  const [gasoline, setGasoline] = useState<number>(0);

  const handleCalc = () => {
    if (alcohol > 0 && gasoline > 0) {
      var res = alcohol / gasoline;
      if (res <= 0.7) {
        alert("deu bom");
      }
    } else {
      alert("Enter a valid values");
    }

  }

  return (
    <div>
      <main className='container'>
        <img src={logoImg} alt="" />
      <h1>What is the best option?</h1>

      <form>
        <label>Alcohol (price per liter): </label>
        <input
          type='number'
          placeholder='4,9'
          min="1"
          step="0.01"
          required
          value={alcohol > 0 ? alcohol : ''}
          onChange={e => setAlcohol(parseFloat(e.target.value))}
        />
        
        <label>Gasoline (price per liter): </label>
        <input
          type='number'
          placeholder='4,9'
          min="1"
          step="0.01"
          required
          value={gasoline > 0 ? gasoline : ''}
          onChange={e => setGasoline(parseFloat(e.target.value))}
        />

        <input className='button' onClick={handleCalc} type="submit" value="Calculate"/>
        </form>
      </main>
    </div>
  )
}

export default App;
