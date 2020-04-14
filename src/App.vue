<template>
  <div id="app">
    <y-switch v-model="active"></y-switch>
    <y-switch v-model="active" active-color='green' inactive-color='red'></y-switch>
    <y-switch v-model="active" name='gender' ref='xx'></y-switch>
    <hr>
    <y-radio label='0' v-model="gender" name='gender'>男</y-radio>
    <y-radio label='1' v-model="gender" name='gender'>女</y-radio>
    <y-radio label='0' v-model="gender"></y-radio>
    <y-radio label='1' v-model="gender"></y-radio>
    <hr>
    <y-radio-group v-model="gender">
      <y-radio label='0'></y-radio>
      <y-radio label='1'></y-radio>
    </y-radio-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      active: false,
      gender:'1'
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
