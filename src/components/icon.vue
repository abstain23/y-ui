<template>
  <i class="iconfont" :class="nameClass"></i>
</template>

<script>
export default {
  name: 'yIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    nameClass () {
      return this.name ? `icon-${this.name}` : ''
    }
  }
}
</script>

<style lang="scss">
</style>
