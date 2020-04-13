import Vue from 'vue'
import App from './App.vue'
import Button from './components/button.vue'
import Icon from './components/icon.vue'

import '@/assets/css/normalize.css'
import '@/assets/css/font.css'

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)

new Vue({
  render: h => h(App)
}).$mount('#app')
