import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import "../src/styles/index.scss"

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

// 设置全局样式
const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)
// 添加全局样式
addDecorator(storyWrapper)
// 全局打开 Info
addDecorator(withInfo)
// 对 Info 设置
addParameters({info: { inline: true, header: false}})

// 把 welcome 添加到首页
const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};


// automatically import all files ending in *.stories.js
configure(loaderFn, module);
