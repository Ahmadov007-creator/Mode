import { useState } from 'react';
import './App.css';
import tun from './images/tun.mp4'
import kun from './images/kun.mp4'

function App() {
  const [mode, setMode] = useState(true)
  return (
    <div className="App">
      <h1>Mode</h1>
      <header className={mode == true ? kun : tun}>
        <h1 className='header'>Header</h1>
        <button className='btn btn-outline-primary' onClick={() => setMode(true)}>Day</button>
      </header>
      <main className={mode == true ? kun : tun}>
        <video src={kun} autoPlay muted></video>
      </main>
      <footer className={mode == true ? kun : tun}>
        <h1>Footer</h1>
        <button className='btn btn btn-outline-secondary' onClick={() => setMode(false)}>Night</button>
      </footer>
    </div>
  );
}

export default App;

