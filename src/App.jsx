import { useState } from 'react'
import './App.css'
import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import WeatherApp from './WeatherApp.jsx';
function App() {

  return (
    <div style={{ textAlign: "center" }}>
      <WeatherApp />
    </div>
  )
}

export default App
