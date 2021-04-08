## 公共业务组件库

<!-- [![Build Status](https://travis-ci.com/vikingmute/vikingship.svg?token=mHoDqxyxXWX5BSpu8L9y&branch=master)](https://travis-ci.com/vikingmute/vikingship) -->

### 安装已经发布的组件库来试试

```javascript
npm install yd-business-component-library --save
```

### 使用

```javascript
// 加载样式
import 'yd-business-component-library/dist/index.css'
// 引入组件
import { Button } from 'yd-business-component-library'
```

### 项目亮点

* 🔥typescript with React Hooks
* ⛑️使用 react-testing-library 完成单元测试
* 📚使用 storybook 本地调试和生成文档页面
* 📚使用 react-doc-gen 自动生成文档
* 🌹采用Sass
* 🎉涉及全部流程，包括最后的 npm publish，husky提交发布前验证，travis CI/CD 集成，发布文档站点等

### 一些本地开发命令

```bash
//启动本地环境
npm run stroybook

//跑单元测试
npm test

//build可发布静态文件
npm run build

//发布到 npm
npm run publish
```