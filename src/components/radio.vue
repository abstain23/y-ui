<template>
  <label class="y-radio" :class="{'is-checked': modelValue == label}">
    <span class="y-radio-input">
      <span class="y-radio-inner"></span>
      <input
      type="radio"
      class="y-radio-original"
      :name="name"
      :value="label"
      v-model="modelValue"
      >
    </span>
    <span class="y-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
      </span>
  </label>
</template>

<script>
export default {
  name: 'yRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value:{
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    modelValue:{
      get() {
        // console.log(this.inGroup)
        return this.inGroup ? this.radioGroup.value : this.value
      },
      set(value) {
        this.inGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    inGroup() {
      return !!this.radioGroup
    }
  },
  inject: {
    radioGroup: {
      default: null
    }
  }
}
</script>

<style lang='scss'>
  .y-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .y-radio-input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .y-radio-inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .y-radio-original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .y-radio-label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  .y-radio.is-checked{
    .y-radio-input{
      .y-radio-inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .y-radio-label{
      color:#409eff;
    }
  }
</style>
