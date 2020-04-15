<template>
  <div class="y-switch" @click="handleClick" :class="{ 'is-active': value }">
    <span class="y-switch-core" ref="core" :style="styleColor">
      <span class="y-switch-button"></span>
    </span>
    <input type="checkbox" class="y-switch-input" ref="input" :name="name" :checked= "value"/>
  </div>
</template>

<script>
export default {
  name: 'ySwitch',
  data() {
    return {};
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    inactiveColor: {
      type: String,
      default: '#C0CCDA'
    },
    activeColor: {
      type: String,
      default: '#409EFF'
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    styleColor() {
      const color = this.value ? this.activeColor : this.inactiveColor
      return {
        borderColor:color,
        backgroundColor:color
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('input', !this.value);
    }
  }
};
</script>

<style lang="scss">
.y-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .y-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .y-switch-button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-active {
    .y-switch-core {
      border-color: #409eff;
      background-color: #409eff;
      .y-switch-button {
        transform: translateX(20px);
      }
    }
  }
  .y-switch-input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
</style>
