
const path = require('path');


function resolve(dir){
  return path.join(__dirname,'..',dir)
}

module.exports = {
  entry:{
    app:'./src/main.ts'
  },
  resolve:{
    extensions:['.js','.vue','.json','.ts'],
    alias:{
      '@':resolve('src')
    }
  },
  rules:[
    {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src'), resolve('test')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      enforce: 'pre',
      loader: 'tslint-loader'
    },
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    },
  ]
}
