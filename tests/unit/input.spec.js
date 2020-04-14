import { mount } from '@vue/test-utils';
import Vue from 'vue';
import { expect } from 'chai';
import Icon from '@/components/icon.vue';
import Input from '@/components/input.vue';

Vue.component(Icon.name, Icon);

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
    })
  })

  describe('测试事件', () => {
  //   const wrapper = mount(Input, {
  //     propsData: {
  //       value:'ccc'
  //     }
  //   })
  //   const input = wrapper.find('input')
  //   it('input', () => {
  //     input.element.value = 100
  //     input.trigger('input')
  //     // console.log()
  //     expect(wrapper.props().value).to.eq('1oo')
  //   })
  })
    
});
