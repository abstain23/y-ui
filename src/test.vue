<template>
  <div>
    child组件
  </div>
</template>

<script>
export default {
  name:'xx',
  data() {
    return {
      child: 'child'
    }
  },
  beforeCreate() {
    console.log(this.child)
    console.log('child beforeCreated')
  },
  created() {
    console.log(this.child)
    console.log('child created')
  },
  beforeMount() {
    console.log(this.child)
    console.log('child beforeMount')
  },
  mounted() {
    console.log(this.child)
    console.log('child mounted')
  },
}
</script>