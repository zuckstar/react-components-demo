import React, { useState } from 'react';
import LikeButton from '../components/LikeButton'
import ThemedBar from '../components/ThemedBar'

interface IThemeProps {
  [key: string]: {color: string; background: string; className: string}
}

const themes: IThemeProps = {
  'light' : {
    className: 'btn btn-light',
    color: '#000',
    background: '#eee'
  },
  'dark' : {
    className: 'btn btn-dark',
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light)

const Context: React.FC = () => {

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={themes[theme]}>
    <div className="App">
      <h2>Context</h2>
      {/* 使用 useContext 的主题样式转换 */}
      <LikeButton />
      {/* 使用默认的 Context 的主题样式转换 */}
      <ThemedBar />
      <header className="App-header">
        <a href="#theme-switcher" className="btn btn-light" onClick={() => {setTheme('light')}}>
          浅色主题
        </a>
        <a href="#theme-switcher" className="btn btn-dark" onClick={() => {setTheme('dark')}}>
          深色主题
        </a>
      </header>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default Context;
