<template>
  <div id="app">
    <div class="button">
      <div class="row">
        <y-button>默认按钮</y-button>
        <y-button type="success">成功按钮</y-button>
        <y-button type="primary">主要按钮</y-button>
        <y-button type="info">主要按钮</y-button>
        <y-button type="warning">警告按钮</y-button>
        <y-button type="danger">危险按钮</y-button>
      </div>
      <div class="row">
        <y-button plain disabled>默认按钮</y-button>
        <y-button type="success" plain disabled>成功按钮</y-button>
        <y-button type="primary" plain disabled>主要按钮</y-button>
        <y-button type="info" plain disabled>主要按钮</y-button>
        <y-button type="warning" plain disabled>警告按钮</y-button>
        <y-button type="danger" plain disabled>危险按钮</y-button>
      </div>
      <div class="row">
        <y-button round>默认按钮</y-button>
        <y-button type="success" round>成功按钮</y-button>
        <y-button type="primary" round>主要按钮</y-button>
        <y-button type="info" round>主要按钮</y-button>
        <y-button type="warning" round>警告按钮</y-button>
        <y-button type="danger" round icon="delete">危险按钮</y-button>
      </div>
      <div class="row">
        <y-button circle icon="delete" @click="deleteClick"></y-button>
        <y-button type="success" circle icon="success"></y-button>
        <y-button type="success" circle icon="success"></y-button>
        <y-button type="primary" circle icon="email"></y-button>
        <y-button type="info" circle icon="add"></y-button>
        <y-button type="warning" circle icon="star"></y-button>
        <y-button type="danger" circle icon="search"></y-button>
      </div>
    </div>
    <div class="dialog">
      <!-- <y-dialog title="提示信息">
        <div>
          <strong style="color:red">hh</strong>
        </div>
      </y-dialog> -->
      <y-dialog width='50%' top='15vh' :visible.sync="dialogVisible" :before-close='beforeClose' @close='close' @open='open'>
        <template v-slot:title>
          <h1>提示信息</h1>
        </template>
        hddd
        <span slot='footer'>
          <y-button @click="dialogVisible = false">取消</y-button>
        <y-button type="primary" @click="dialogVisible = false">确定</y-button>
        </span>
      </y-dialog>
      <y-button @click="dialogVisible = true">showDialog</y-button>
    </div>
    <div class="input">
      <y-input></y-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      dialogVisible: false,
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
