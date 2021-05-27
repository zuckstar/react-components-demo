import React, { useState } from 'react';
import { Button } from 'phantom-canyon'
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
       <Button btnType="primary" size="lg" onClick={() => setShow(!show)}>Toggle</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/hello">To Hello Page</Link>
        <Link to="/context">To Context</Link>
        <Link to="/ref">To Ref</Link>
        
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
