import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 前端公共业务 组件库</h1>
        <h3>安装方法</h3>
        <code>
          npm install yd-business-library --save
        </code>
      </>
    )
  }, { info : { disable: true }})