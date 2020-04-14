import { expect } from 'chai'
import Vue from 'vue'
import Icon from '@/components/icon.vue'

Vue.config.productionTip = false

const Constructor = Vue.extend(Icon)

describe('Icon', () => {
  it('存在', () => {
    expect(Icon).to.exist
  })

  it('测试name属性', () => {
    const vm = new Constructor({
      propsData: {
        name: 'add'
      }
    }).$mount()
    expect(vm.$el.classList.contains('icon-add')).to.be.false
  })
  
})