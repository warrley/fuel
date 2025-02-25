import { act, use, useState } from 'react';
import './App.css'

import logoImg from './assets/logo.png'
import arrow from './assets/leftarrow.png'

function App() {
  const [alcohol, setAlcohol] = useState<number>(0);
  const [gasoline, setGasoline] = useState<number>(0);
  const [relation, setRelation] = useState<number>(0)
  const [show, setShow] = useState<boolean>(false);

  const handleCalc = () => {
    if (alcohol > 0 && gasoline > 0) {
      setRelation(alcohol / gasoline);
      setShow(true);
    } else {
      alert("Enter a valid values");
    }

  }

  const handleBack = () => {
    setShow(false);
    setAlcohol(0);
    setGasoline(0);
  }

  return (
    <div>
      {show ?
        <div className='best'>
          <img onClick={handleBack} src={arrow} alt="" />
          <h1>it's better to use <strong style={relation <= 0.7 ? {color: 'skyblue'} : {color: 'yellow'}}>{relation <= 0.7 ? 'alcohol' : 'gasoline'}</strong></h1>
          <h3 style={{color: 'skyblue'}}>Alcool: R$ {alcohol.toFixed(2)}</h3>
          <h3 style={{color: 'yellow'}}>Gasolina: R$ {gasoline.toFixed(2)}</h3>
          <h3>alcohol is {(relation * 100).toFixed(2)}% of the price of gasoline</h3>
        </div>
        : 
        <main className='container'>
        <img src={logoImg} alt="" />
      <h1>what is the best option?</h1>

      <form>
        <label>alcohol (price per liter): </label>
        <input
          type='number'
          placeholder='4,9'
          min="1"
          step="0.01"
          required
          value={alcohol > 0 ? alcohol : ''}
          onChange={e => setAlcohol(parseFloat(e.target.value))}
        />
        
        <label>gasoline (price per liter): </label>
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
      }

      
    </div>
  )
}

export default App;
