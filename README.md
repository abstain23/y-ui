# Y-UI 一个简易的UI框架 持续造轮子ing

[![Build Status](https://www.travis-ci.org/YangJ0605/y-ui.svg?branch=master)](https://www.travis-ci.org/YangJ0605/y-ui)


## 一款简单好用的UI框架，

## 安装

```js
npm i y_web_ui -S

```

## 快速开始

```js
import Vue from 'vue';
import 'y_web_ui/dist/y_ui.css'
import yUi from 'y_web_ui'

Vue.use(yUi)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 详情请见 [文档](http://blog.yjxyjyl.cn/y-ui/)