<template>
  <label class="y-checkbox" :class="{'is-checked':isChecked}">
    <span class="y-checkbox-input">
      <span class="y-checkbox-inner" :class="{'is-checked':isChecked}"></span>
      <input type="checkbox" class="y-checkbox-original" :name="name" 
        v-model="modelValue"
        :value="label"
       />
    </span>
    <span class="y-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "yCheckbox",
  computed:{
    modelValue: {
      get() {
        return this.inGroup ? this.checkboxGroup.value : this.value
      },
      set(value) {
        this.inGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    inGroup() {
      return !!this.checkboxGroup
    },
    isChecked() {
      return this.inGroup ? this.modelValue.includes(this.label) : this.modelValue
    }
  },
  inject: {
    checkboxGroup: {
      default: null
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: {
      type: [String, Number, Boolean],
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang='scss'>
.y-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .y-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .y-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &::after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
      &.is-checked::after {
        transform: rotate(45deg) scaleY(1);
      }
    }
    .y-checkbox-original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .y-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
  &.is-checked {
    .y-checkbox-input {
      .y-checkbox-inner {
        background-color: #409eff;
        border-color: #409eff;
      }
    }
    .y-checkbox-label {
      color: #409eff;
    }
  }
}
</style>
