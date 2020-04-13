<template>
  <div id="app">
    <y-input placeholder='请输入内容'></y-input>
    <y-input placeholder='请输入密码' type='password'></y-input>
    <y-input  v-model="modelValue" :maxlength='4' name='username' disabled></y-input>
    <y-input  v-model="modelValue" :maxlength='4'></y-input>
    {{modelValue}}
    <y-input  v-model="modelValue" clearable></y-input>
    <y-input  v-model="modelValue" show-password></y-input>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      dialogVisible: false,
      modelValue: '双向数据'
    }
  },
  methods: {
    deleteClick(e) {
      console.log('deleteClick', e);
    },
    beforeClose() {
      console.log('father before close')
    },
    close() {
      console.log('father close')
    },
    open() {
      console.log('open')
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  margin: 200px 200px;
  button {
    margin-left: 10px;
    margin-bottom: 10px;
  }
}
</style>
