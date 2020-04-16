import { mount } from '@vue/test-utils';
import Vue from 'vue/dist/vue';
import { expect } from 'chai';
import Checkbox from '@/components/checkbox.vue'
import CheckboxGroup from '@/components/checkbox-group.vue'
Vue.config.productionTip = false;

Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)


describe('checkbox', () => {
  describe('单checkbox测试', () => {
    let wrapper = mount(Checkbox, {
      propsData:{
        label: '水果'
      }
    })
  
    it('存在', () => {
      expect(wrapper).to.exist
    })

    it('测试label属性，没有slots的情况', () => {
      expect(wrapper.find('.y-checkbox-label').text()).to.eq('水果')
    })
    
    it('测试label属性，有slots的情况', () => {
      wrapper = mount(Checkbox, {
       propsData:{
         label: '水果'
       },
       slots: {
         default: `蔬菜`
       }
     })
     expect(wrapper.find('.y-checkbox-label').text()).to.eq('蔬菜')
   })
  })
  // describe('增加radioGroup的radio测试', () => {
  //   // let wrapper = mount(Radio, {
  //   //   parentComponent: RadioGroup
  //   // })
  
  //   // it('测试父亲是RadioGroup', () => {
  //   //   expect(wrapper.vm.$parent.$options.name).to.eq('yRadioGroup')
  //   // })
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //   <y-radio-group v-model="gender" ref='group'>
  //     <y-radio label='0'></y-radio>
  //     <y-radio label='1'></y-radio>
  //   </y-radio-group> 
  //     `
  //     const vm = new Vue({
  //       el: div,
  //       data: {
  //        gender: '1'
  //       },
  //       methods: {
          
  //       }
  //     })
  //    it('在group中',() => {
  //     vm.$refs.group.$children.forEach(child => {
  //       expect(child.inGroup).to.be.true
  //     })
  //    })
  //    it('测试modelValue', () => {
  //     vm.$refs.group.$children.forEach(child => {
  //       expect(child.modelValue).to.eq('1')
  //     })
  //    })

  //    it('class是否包含is-checked', () => {
  //     vm.$refs.group.$children.forEach((child, index) => {
  //       if(index === 0) {
  //         expect(child.$el.classList.contains('is-checked')).to.not.true
  //       }
  //       if(index === 1) {
  //         expect(child.$el.classList.contains('is-checked')).to.be.true
  //       }
  //     })
  //    })
  //    it('触发input事件', () => {
  //     vm.$refs.group.$children.forEach((child, index) => {
  //       if(index === 0) {
  //         child.modelValue = 0
  //         child.$nextTick(() => {
  //           expect(child.$el.classList.contains('is-checked')).to.be.true
  //         })
  //       }
  //       if(index === 1) {
  //         child.$nextTick(() => {
  //           expect(child.$el.classList.contains('is-checked')).to.be.false
  //         })
  //       }
  //     })
  //    })
  // })
})