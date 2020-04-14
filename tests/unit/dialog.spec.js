import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Dialog from '@/components/dialog.vue';
import { expect } from 'chai';

describe('dialog', () => {
  // const wrapper = mount(Dialog, {
  //   propsData: {
  //     title:'你好这是提示'
  //   },
  //   attachToDocument: true
  // });
  // const vm = wrapper.vm;
  it('存在', () => {
    expect(Dialog).to.exist;
  });

  describe('测试props', () => {
    const Constructor = Vue.extend(Dialog)
    const vm = new Constructor({
      propsData: {
        title: '这是提示',
        visible: true,
        width: '30%',
        top: '200px'
      }
    }).$mount();

    it('测试visible', () => {
      // console.log(vm.$el.outerHTML)
      expect(vm.$el.outerHTML).to.exist
    })

    it('测试title', () => {
      expect(vm.$el.querySelector('.y-dialog-title').innerHTML).to.eq('这是提示')
    });

    it('测试width, top', () => {
      const styles = vm.$el.querySelector('.y-dialog').style
      expect(styles.width).to.eq('30%')
      expect(styles.marginTop).to.eq('200px')
    });
  });
});
