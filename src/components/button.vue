<template>
  <button
    class="y-button"
    :class="buttonClasses"
    @click="$emit('click', $event)"
    :disabled='disabled'
  >
    <y-icon :name="icon" v-if="icon"></y-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'yButton',
  data () {
    return {
      // hasContent: true
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses () {
      return [
        `y-button-${this.type}`,
        this.plain ? 'is-plain' : '',
        { 'is-round': this.round },
        { 'is-circle': this.circle },
        { 'is-disabled': this.disabled }
      ]
    }
  },
  mounted () {
    // const content = this.$el.querySelector('span').innerHTML
    // if (!content) {
    //   this.hasContent = false
    // }
    // // console.log(this.hasContent)
    // console.log(this.$slots)
  }
}
</script>

<style lang="scss">
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  [class*="icon-"] + span {
    margin-left: 5px;
  }
}
.y-button-default {
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
.y-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    cursor: not-allowed;
    background-image: none;
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
}
.y-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    cursor: not-allowed;
    background-image: none;
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
}
.y-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  &.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    cursor: not-allowed;
    background-image: none;
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
}
.y-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  &.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    cursor: not-allowed;
    background-image: none;
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
}
.y-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    cursor: not-allowed;
    background-image: none;
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
}
</style>
