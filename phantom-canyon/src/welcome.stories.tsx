import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module).add('welcome', () => {
  return (
    <>
      <h1>欢迎来到 phantom-canyon 组件库</h1>
      <p>phantom-canyon 就是骷髅峡谷的意思</p>
      <h3>安装试试</h3>
      <code>
        npm install phantom-canyon --save
      </code>
    </>
  )
}, { info: {disable: true}})