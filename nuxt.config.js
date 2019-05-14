module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '春和景明',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'renderer',
      content: 'webkit'
    },
    {
      name: 'force-rendering',
      content: 'webkit'
    },
    {
      name: 'referrer',
      content: 'never'
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=Edge,chrome=1'
    },
    {
      name: 'baidu-site-verification',
      content: 'mREHhDF8nW'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: '软装，软装设计，软装设计公司，济南软装设计,济南软装设计公司,软装公司,软装搭配,春和景明软装,别墅软装,软装配套'
    },
    {
      hid: 'description',
      name: 'description',
      content: '春和景明软装设计机构是万泰装饰集团旗下一支致力于室内软装设计的专业团队，也是集家具组合规划、个性色调设计、布艺窗帘及饰品搭配、现场陈设服务的系统软装饰服务机构。'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    },
    {
      name: 'msapplication-tap-highlight',
      content: 'no'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [{
      src: 'http://libs.baidu.com/jquery/2.1.1/jquery.min.js'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  css: [
  ],
  plugins: [
  ],
  //设置缓存
  cache: true,
  //禁止预加载效果
  performance: {
    prefetch: false
  },
  render: {
    resourceHints: false
  }, //禁止预加载 源代码文件不输出在页面
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    vendor: ['babel-polyfill', 'axios', 'element-ui', 'js-cookie'],
    extractCSS: {
      allChunks: true
    },
    extend (config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
