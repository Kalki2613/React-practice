import { useState } from 'react';
import './App.css';
import Lottery from './Lottery'; 
import {sum} from './helper.js';

function App() {

  let winningConditions=(ticket)=>{
    return sum(ticket)<=15;
  };
  
  return (
    <>
      <Lottery n={3} winningConditions={winningConditions} /> 
    </>
  )
}

export default App
