<template>
  <div class="y-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'yRadioGroup',
  props: {
    value:{
      type:[String, Number, Boolean],
      default: ''
    }
  },
  provide() {
    return {
      radioGroup: this
    }
  }
}
</script>

