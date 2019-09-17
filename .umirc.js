
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'CNode',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  routes: [
    {
      path: '/',
      component: '../layouts/index.js',
      routes: [
        {
          path: '/',
          redirect:'/home'
        },
        {
          path: '/home',
          component: './home/homeView.jsx',
          title: '首页',
        },
        {
          path: '/newerGuide',
          component: './newerGuide/newerGuideView.jsx',
          title: '新手入门',
        },
        {
          path: '/api',
          component: './api/apiView.jsx',
          title: 'API',
        },
        {
          path: '/about',
          component: './about/aboutView.jsx',
          title: '关于',
        },
        {
          path: '/register',
          component: './register/registerView.jsx',
          title: '注册',
        },
        {
          path: '/login',
          component: './login/loginView.jsx',
          title: '登录',
        },
        {
          path: '/detail',
          component: './detail/detailView.jsx',
          title: '详情',
        },
      ]
    },
  ],
  proxy: {
    "/api/v1": {
      "target": "https://cnodejs.org",
      "changeOrigin": true,
    }
  }
}
