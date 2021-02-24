import React from 'react';
import LikeButton from '../components/LikeButton'

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

const Context: React.FC = () => {

  return (
    <ThemeContext.Provider value={themes.light}>
    <div className="App">
      <h2>Context</h2>
      <LikeButton />
    </div>
    </ThemeContext.Provider>
  );
}

export default Context;
