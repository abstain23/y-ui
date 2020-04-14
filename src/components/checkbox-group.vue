<template>
  <div class="y-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'yCheckboxGroup',
  props: {
    value:{
      type:Array,
      default: ''
    }
  },
  provide() {
    return {
      checkboxGroup: this
    }
  }
}
</script>

