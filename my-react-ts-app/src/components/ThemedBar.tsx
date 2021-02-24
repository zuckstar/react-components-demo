import React from 'react'
import { ThemeContext } from '../views/Context'

const ThemeedBar = () => {
  return (
    <ThemeContext.Consumer>
      {
        theme => {
          return (
            <div
              style={ {background: theme.background,color: theme.color}}
            >
              样式区域
              <br />
              <button className={theme.className}>样式按钮</button>
            </div>
          )
        }
      }
    </ThemeContext.Consumer>
  )
}

export default ThemeedBar
