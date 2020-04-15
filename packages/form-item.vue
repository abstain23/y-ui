<template>
  <div class="y-form-item">
    <label :style="labelStyle" class="y-form-item-label">{{ label }}</label>
    <div class="y-form-item-content">
      <div :class="{'is-error': errStatus}">
        <slot></slot>
      </div>
      <div class="err-message" v-if="errStatus">{{errMessage}}</div>
    </div>
  </div>
</template>
<script>
import Validator from 'async-validator';
import Vue from 'vue'
export default {
  name: 'yFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      errMessage: '',
      errStatus: false,
      eventsBus: new Vue()
    };
  },
  inject: ['Form'],
  provide() {
    return {
      eventsBus: this.eventsBus
    }
  },
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      };
    }
  },
  mounted() {
    this.eventsBus.$on('validate',this.validator)
    // this.validator()
  },
  methods: {
    validator() {
      // console.log('校验开始');
      const rules = this.Form.rules[this.prop];
      const value = this.Form.model[this.prop];
      const desc = { [this.prop]: rules };
      const validateObj = new Validator(desc);
      validateObj.validate({ [this.prop]: value }, err => {
        if (err) {
          this.errMessage = err[0].message;
          this.errStatus = true;
        } else {
          this.errMessage = '';
          this.errStatus = false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.y-form-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  .y-form-item-label {
    text-align: right;
  }
  .y-form-item-content {
    flex: 1;
    position: relative;
    .err-message {
      color: #f56c6c;
      font-size: 12px;
      line-height: 1;
      padding-top: 4px;
      position: absolute;
      top: 100%;
      left: 0;
    }
  .is-error {
    .y-input-inner {
      border-color: #f56c6c;
    }
  }
  }
}
</style>
