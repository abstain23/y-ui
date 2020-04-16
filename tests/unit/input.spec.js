import { mount } from '@vue/test-utils';
import Vue from 'vue/dist/vue';
import { expect } from 'chai';
import Icon from '@/components/icon.vue';
import Input from '@/components/input.vue';

Vue.component(Icon.name, Icon);
Vue.component(Input.name, Input)

Vue.config.productionTip = false;

describe('Input', () => {
  const Constructor = Vue.extend(Input);
  const vm = new Constructor({
    propsData: {
      type: 'password',
      placeholder: '请输入',
      name: 'password',
      disabled: true,
      value: '这是value',
      clearable: true,
      showPassword: true
    }
  }).$mount();
  const input = vm.$el.querySelector('input')
  it('存在', () => {
    expect(Input).to.exist
  })

  describe('测试属性', () => {
    it('测试type placeholder name disabled value clearable', () => {
      expect(input.type).to.eq('password')
      expect(input.placeholder).to.eq('请输入')
      expect(input.name).to.eq('password')
      expect(input.classList.contains('is-disabled')).to.be.true
      expect(input.value).to.eq('这是value')
      expect(vm.$el.querySelector('.y-input-suffix')).to.exist
      expect(vm.$el.querySelector('.icon')).to.exist
    })
  })

  describe('测试事件',  () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <y-input v-model="model" type='text' ref='input'></y-input>
      `
      const vm = new Vue({
        el: div,
        data: {
         model:'你好'
        },
        methods: {
          
        }
      })
      it('input事件', () => {
        vm.$refs.input.handleInput({target:{value:'hello'}})
        expect(vm.model).to.eq('hello')
      })
      it('clear事件', () => {
        vm.$refs.input.clear()
        expect(vm.model).to.eq('')
      })
  })
});
