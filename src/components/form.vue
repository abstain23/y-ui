  
<template>
  <form class="y-form">
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'yForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      default() {
        return {}
      }
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  }
}
</script>