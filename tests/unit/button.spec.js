import { expect } from 'chai'
import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button.vue'
import Icon from '@/components/icon.vue'

Vue.component(Icon.name, Icon)

Vue.config.productionTip = false

describe('Button', () => {
  const wrapper = shallowMount(Button, {
    propsData:{
      type: 'primary',
      plain: false,
      round: true,
      circle: true,
      disabled: true
    }
  })
  it('存在', () => {
    expect(wrapper.contains('button')).to.be.true
  })

  it('测试type属性', () => {
    expect(wrapper.vm.$el.classList.contains('y-button-primary')).to.be.true
  })

  it('测试plain属性', () => {
    expect(wrapper.vm.$el.classList.contains('is-plain')).to.not.true
  })

  it('测试round circle disabled属性', () => {
    expect(wrapper.vm.$el.classList.contains('is-round')).to.true
    expect(wrapper.vm.$el.classList.contains('is-circle')).to.true
    expect(wrapper.vm.$el.classList.contains('is-disabled')).to.true
  })

  it('测试icon', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'delete'
      }
    }).$mount()
    const i = vm.$el.querySelector('i')
    expect(i.classList.contains('icon-delete')).to.be.true
  })
})
