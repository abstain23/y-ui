import { mount } from '@vue/test-utils';
import Vue from 'vue/dist/vue';
import { expect } from 'chai';
import Switch from '@/components/switch.vue';


Vue.config.productionTip = false;

Vue.component(Switch.name, Switch)

describe('Switch', () => {
  const wrapper = mount(Switch, {
    propsData: {
      
    }
  })
  it('存在', () => {
    expect(wrapper.html()).to.exist
  })

  it('value inactiveColor activeColor name', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        active: true
      <y-switch v-model="active" ref='xx' active-color='red' inactive-color='green' name='hhh'></y-switch>
    `
    const vm = new Vue({
      el: div,
      data: {
        active: true
      },
      methods: {
        xx() {
          this.active = false
        }
      }
    })
      // console.log(vm.$el.querySelector('div').classList)
      expect(vm.$el.querySelector('div').classList.contains('is-active')).to.be.true

      expect(vm.$el.querySelector('.y-switch-core').style.borderColor).to.eq('red')

      vm.xx()
      vm.$nextTick(() => {
      expect(vm.$el.querySelector('.y-switch-core').style.borderColor).to.eq('green')
      })

      expect(vm.$el.querySelector('input').name).to.eq('hhh')
  })
})