import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
import './index.css';
import {Link} from 'react-router'

interface IShowResult {
  message: string;
  status: string;
}

const App: React.FC = () => {
  const [ show, setShow ] = useState(true)
  const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])

  const dogResult = data as IShowResult

  const positions = useMousePosition()
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/hello">To Hello Page</Link>
        <Link to="/context">To Context</Link>
        <p>
          <button onClick={() => setShow(!show)}>Toggle Tracker</button>
        </p>
        { 
        loading ? <p>🐶 读取中</p> : <img src={dogResult && dogResult.message} alt="图片"/>
        }
        
        <p>X: {positions.x}, Y: {positions.y}</p>
        
        {/* { show && <MouseTracker />} */}
      </header>
    </div>
  );
}

export default App;
