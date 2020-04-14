<template>
  <div class="y-input y-input-suffix">
    <input
      :type="showType"
      class="y-input-inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      @input="handleInput($event)"
      :value="value"
      :name="name"
      :disabled="disabled"
      :maxlength="maxlength"
      :minlength="minlength"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      ref="input"
    />
    <span class="y-input-suffix" v-if="clearable || showPassword">
      <y-icon name="clear" v-if="clearable && value" @click.native="clear" class="icon"></y-icon>
      <y-icon name="show_password" v-if="showPassword && value" class="icon" @click.native="togglePassword"></y-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: "yInput",
  data() {
    return {
      //  inputValue: ''
      passwordVisible: false
    };
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    },
    maxlength: {
      type: Number
    },
    minlength: {
      type: Number
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showType() {
      return this.showPassword
        ? this.passwordVisible
          ? "text"
          : "password"
        : this.type;
    }
  },
  watch: {
    //  value:{
    //    immediate: true,
    //    handler(newVal) {
    //      this.inputValue = newVal
    //    }
    //  }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$refs.input&&this.$refs.input.focus()
      this.$emit("input", "");
      this.$emit('clear')
    },
    togglePassword() {
      this.passwordVisible = !this.passwordVisible;
      this.$nextTick(() => {
        if(this.$refs.input) {
          this.$refs.input.focus()
          this.$refs.input.selectionStart = this.value.length
          this.$refs.input.selectionEnd = this.value.length
        }
      })
    }
  }
};
</script>

<style lang="scss">
.y-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .y-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.y-input-suffix {
  .y-input_inner {
    padding-right: 30px;
  }
  .y-input-suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    .icon {
      color: #c0c4cc;
      font-size: 16px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>