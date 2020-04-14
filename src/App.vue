<template>
  <div id="app">
    <y-switch v-model="active"></y-switch>
    <y-switch v-model="active" active-color='green' inactive-color='red'></y-switch>
    <y-switch v-model="active" name='gender' ref='xx'></y-switch>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      active: false
    }
  },
  methods: {
    xx() {
      
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
