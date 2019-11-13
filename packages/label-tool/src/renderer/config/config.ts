import { IConfig } from 'umi-types'

// ref: https://umijs.org/config/
const config: IConfig = {
  history: 'hash',
  outputPath: `../../dist/renderer`,
  publicPath: './',
  treeShaking: true,
  cssLoaderOptions: {
    camelCase: true
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'label-tool',
        dll: true,
        routes: {
          exclude: [/components\//]
        }
      }
    ]
  ],
  chainWebpack(cfg) {
    cfg.target('electron-renderer')
  }
}

export default config
