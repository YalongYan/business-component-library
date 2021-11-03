
### 公共业务组件库 
  `yd-business-library`
### 安装方法
  `npm i yd-business-library -S`
### 使用方法
  `import { Expression } from 'yd-business-library'`
### 技术栈
  - react hook
  - typescript
  - storybook
  - gulp
  - scss

### 发布 npm 流程
  - `npm run build`
  - `npm publish` (没登录的先 `npm login`)

### 机器上启动静态 storyBook 站点
  - git pull 拉取代码
  - npm run build
  - npm run server

### 服务端口号
    5750

### 主要文件目录如下
    |_ _ _  .storybook // storybook 相关配置
    |       |
    |       |_ _ _ _  addons.ts // 插件注册文件
    |       |
    |       |_ _ _ _  config.tsx // 配置文件
    |       |
    |       |_ _ _ _  webpack.config.js // 让stroybook 支持ts,自动生成参数
    |
    |_ _ _  dist // 打包后的文件
    |
    |_ _ _  server // 服务相关
    |       |
    |       |_ _ _ pm2.json
    |       |
    |       |_ _ _ server.js
    |       |
    |       |
    |_ _ _  src
    |       |_ _ _ components
    |       |
    |       |_ _ _ styles
    |       |
    |       |_ _ _ index.tsx
    |       |
    |       |_ _ _ welcome.stories.tsx
    |       |
    |       |
    |_ _ _ storybool-static // storybook打包的静态文件
    |
    |_ _ _ gulpfile.js // gulp配置，用来编译scss
    |
    |_ _ _ tsconfig.build.json // ts 配置， 用来编译src下的ts文件

### package.json scripts说明
1. start -- 启动storybook
2. clean -- 删除 dist 文件
3. build -- 整体构建
4. build-ts -- 编译ts
5. build-css -- 编译scss
6. story-book -- 启动storybook
7. server -- 启动storybook的静态服务站点
8. build-storybook -- 打包storybook为静态资源
9. story-server -- 启动storybook的pm2进程

### 组件库分析（以SpSelect组件为例说明）
1. 组件源码存放在stc/components/SpSelect目录下
2. 该目录下利用index.tsx统一导出
3. 该目录下spSelect.stories.tsx,是storybook的源代码
4. 样式统一放在src/styles下
5. src/styles 下新建专属的spSelect.scss 样式文件
6. src/styles 先新建index.scss 使用 @import 统一样式文件入口
7. storybook启动的站点，引入的是全部样式，使用组件库的时候,可以选择使用专属的样式文件
8. gulp.file.js 是编译src/styles 下的scss文件
9. tsconfig.build 是编译src下ts文件

### 注意事项
1. 想要展示注释，storiesOf 的名称 必须跟组件 名称是一样的

### 组件库亮点
1. 技术栈统一，使用react hook + typescript 跟日常开发技术栈是一样的，最快可以把项目中封装好的代码移植过来用
2. 通过 storybook 自动生成文档，包括
属性文档，组件展示，代码展示，在线调试
3. 最小依赖， 每个组件都是独立的， 通过treeshaking， 不会导致主体项目代码体积庞大， 只会导入使用到的组件代码


### 相关链接
[storybook官网](https://storybook.js.org/)         
[gulp官网](https://www.gulpjs.com.cn/)                
[npm官网](https://www.npmjs.com/)           
[package.json 中的module, main等字段的区别](https://www.cnblogs.com/qianxiaox/p/14041717.html)      
