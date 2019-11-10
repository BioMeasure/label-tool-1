import { IConfig } from 'umi-types'

// ref: https://umijs.org/config/
const config: IConfig = {
  outputPath: `../../dist/renderer`,
  publicPath: './',
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }]
    }
  ],
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
