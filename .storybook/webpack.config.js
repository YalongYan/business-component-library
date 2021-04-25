// 配置stroyBook 支持 ts
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      }, 
      { // 自动生成参数表格
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          // 把枚举和联合类型转成字符串类型
          shouldExtractLiteralValuesFromEnum: true,
          // 把 node_modules 里的 prop 过滤掉
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules')
            }
            return true            
          }
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
