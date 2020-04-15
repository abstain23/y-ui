<template>
  <transition name="dialog">
    <div class="y-dialog-wrapper" v-if="visible" @click.self="handleClick">
      <div class="y-dialog" :style="{ width, marginTop:top}">
        <div class="y-dialog-header">
          <slot name="title">
            <span class="y-dialog-title">{{ title }}</span>
          </slot>
          <y-icon class="icon-close y-dialog-close-btn" @click.native="handleClick"></y-icon>
        </div>
        <div class="y-dialog-body">
          <slot></slot>
        </div>
        <div class="y-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "yDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: [String, Number],
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    visible: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function,
      default() {
        return ()=>{}
      }
    }
  },
  watch: {
    'visible': function(newVal) {
      if(newVal) this.$emit('open')
    }
  },
  methods: {
    handleClick() {
      this.beforeClose()
      this.$emit("update:visible", false)
      this.$emit('close')
    }
  }
};
</script>

<style lang="scss">
.dialog-enter-active {
  animation: show-dialog 0.4s;
}
.dialog-leave-active {
  animation: show-dialog 0.4s reverse;
}
@keyframes show-dialog {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}
.y-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.3);
  > .y-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    .y-dialog-header {
      padding: 15px 15px 10px;
      .y-dialog-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .y-dialog-close-btn {
        font-size: 20px;
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: #909399;
        &:hover {
          color: skyblue;
        }
      }
    }
    .y-dialog-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .y-dialog-footer {
      padding: 10px 20px 10px;
      text-align: right;
      box-sizing: border-box;
      .y-button:first-of-type {
        margin-right: 15px;
      }
    }
  }
}
</style>
