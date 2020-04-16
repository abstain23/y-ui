module.exports = {
  // base: '/frank-test-1/',
  title: 'Y_UI',
  description: '一款简单好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/quickly-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/icon'
        ]
      }
    ]
  }
}