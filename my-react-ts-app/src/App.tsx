import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
import './index.css';
import {Link} from 'react-router'

interface IShowResult {
  message: string;
  status: string;
}
interface IThemeProps {
  [key: string]: {color: string; background: string;}
}

const themes: IThemeProps = {
  'light' : {
    color: '#000',
    background: '#eee'
  },
  'dark' : {
    color: '#fff',
    background: '#222'
  }
}


export const ThemeContext = React.createContext(themes.light)


const App: React.FC = () => {
  const [ show, setShow ] = useState(true)
  const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])

  const dogResult = data as IShowResult

  const positions = useMousePosition()
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/hello">To Hello Page</Link>
        <p>
          <button onClick={() => setShow(!show)}>Toggle Tracker</button>
        </p>
        { 
        loading ? <p>🐶 读取中</p> : <img src={dogResult && dogResult.message} alt="图片"/>
        }
        
        <p>X: {positions.x}, Y: {positions.y}</p>
        <LikeButton />
        {/* { show && <MouseTracker />} */}
      </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
