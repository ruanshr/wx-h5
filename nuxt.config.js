
const path = require("path");
const vuxLoader = require("@vux/loader");
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~/plugins/vux-component",
      ssr: true
    },
    {
      src: "~/plugins/vux-plugins",
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  
 axios: {
  proxy: true, // 表示开启代理
  prefix: "/api", // 表示给请求url加个前缀 /api
  credentials: true // 表示跨域请求时是否需要使用凭证
},
proxy: {
    "/api/proxy": {
      target: process.env.remote_address || 'http://127.0.0.1:8080/api', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        "^/api/proxy": "" //将 /api 替换掉
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      Object.assign(config.resolve.alias, {
        "@vuxc": path.resolve(__dirname, "./node_modules/vux/src/components"),
        "@vuxp": path.resolve(__dirname, "./node_modules/vux/src/plugins"),
        "@vuxd": path.resolve(__dirname, "./node_modules/vux/src/directives"),
        "@vuxm": path.resolve(__dirname, "./node_modules/vux/src/mixins"),
        "@vuxf": path.resolve(__dirname, "./node_modules/vux/src/filters"),
        "@vuxt": path.resolve(__dirname, "./node_modules/vux/src/tools"),
        "@vuxdata": path.resolve(__dirname, "./node_modules/vux/src/datas")
      });

      const configs = vuxLoader.merge(config, {
        options: {
          ssr: true
        },
        plugins: [
          "vux-ui",
          {
            name: "less-theme",
            path: path.join(__dirname, "./styles/theme.less")
          }
        ]
      });
      return configs;
    }
  }
}
