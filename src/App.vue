<template>
  <div id="app">
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
      <y-button type="danger" round icon='delete'>危险按钮</y-button>
    </div>
     <div class="row">
      <y-button circle icon='delete' @click="deleteClick"></y-button>
      <y-button type="success" circle icon='success'></y-button>
      <y-button type="success" circle icon='success'></y-button>
      <y-button type="primary" circle icon='email'></y-button>
      <y-button type="info" circle icon='add'></y-button>
      <y-button type="warning" circle icon='star'></y-button>
      <y-button type="danger" circle icon='search'></y-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    deleteClick (e) {
      console.log('deleteClick', e)
    }
  }
}
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
