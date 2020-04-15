import Vue from 'vue'
import App from './App.vue'
// import Button from './components/button.vue'
// import Icon from './components/icon.vue'
// import Dialog from './components/dialog.vue';
// import Input from './components/input.vue';
// import Switch from './components/switch.vue'
// import Radio from './components/radio.vue'
// import RadioGroup from './components/radio-group.vue'
// import Checkbox from './components/checkbox.vue'
// import CheckboxGroup from './components/checkbox-group.vue'
// import Form from './components/form.vue'
// import FromItem from './components/form-item.vue'

import '@/assets/css/normalize.css'
// import '@/assets/css/font.css'
import 'y_web_ui/dist/y_ui.css'
import yUi from 'y_web_ui'
Vue.use(yUi)

Vue.config.productionTip = false
// Vue.component(Button.name, Button)
// Vue.component(Icon.name, Icon)
// Vue.component(Dialog.name, Dialog)
// Vue.component(Input.name, Input)
// Vue.component(Switch.name, Switch)
// Vue.component(Radio.name, Radio)
// Vue.component(RadioGroup.name, RadioGroup)
// Vue.component(Checkbox.name, Checkbox)
// Vue.component(CheckboxGroup.name, CheckboxGroup)
// Vue.component(Form.name, Form)
// Vue.component(FromItem.name, FromItem)

new Vue({
  render: h => h(App)
}).$mount('#app')
