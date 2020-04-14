import Vue from 'vue'
import App from './App.vue'
import Button from './components/button.vue'
import Icon from './components/icon.vue'
import Dialog from './components/dialog.vue';
import Input from './components/input.vue';
import Switch from './components/switch.vue'

import '@/assets/css/normalize.css'
import '@/assets/css/font.css'

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
Vue.component(Switch.name, Switch)


new Vue({
  render: h => h(App)
}).$mount('#app')
