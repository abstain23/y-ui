<template>
  <div>
    <h4>基础用法</h4>
    <y-button>默认按钮</y-button>
    <y-button type="success">成功按钮</y-button>
    <y-button type="primary">主要按钮</y-button>
    <y-button type="info">主要按钮</y-button>
    <y-button type="warning">警告按钮</y-button>
    <y-button type="danger">危险按钮</y-button>
    <pre><code>{{defaultUsing}}</code></pre>
    <hr />
    <h4>禁用状态</h4>
    <y-button plain disabled>默认按钮</y-button>
    <y-button type="success" plain disabled>成功按钮</y-button>
    <y-button type="primary" plain disabled>主要按钮</y-button>
    <y-button type="info" plain disabled>主要按钮</y-button>
    <y-button type="warning" plain disabled>警告按钮</y-button>
    <y-button type="danger" plain disabled>危险按钮</y-button>
    <pre><code>{{disabledUsing}}</code></pre>
    <hr />
    <h4>圆角</h4>
    <y-button round>默认按钮</y-button>
    <y-button type="success" round>成功按钮</y-button>
    <y-button type="primary" round>主要按钮</y-button>
    <y-button type="info" round>主要按钮</y-button>
    <y-button type="warning" round>警告按钮</y-button>
    <y-button type="danger" round >危险按钮</y-button>
    <pre><code>{{roundUsing}}</code></pre>
    <hr />
  </div>
</template>

<script>
import Button from '../../../src/components/button';

export default {
  components: {
    'y-button': Button
  },
  data() {
    return {
      defaultUsing: `
        <y-button>默认按钮</y-button>
        <y-button type="success">成功按钮</y-button>
        <y-button type="primary">主要按钮</y-button>
        <y-button type="info">主要按钮</y-button>
        <y-button type="warning">警告按钮</y-button>
        <y-button type="danger">危险按钮</y-button>
      `
        .replace(/\t+| +/g, '')
        .trim(),
      disabledUsing: `
        <y-button plain disabled>默认按钮</y-button>
        <y-button type="success" plain disabled>成功按钮</y-button>
        <y-button type="primary" plain disabled>主要按钮</y-button>
        <y-button type="info" plain disabled>主要按钮</y-button>
        <y-button type="warning" plain disabled>警告按钮</y-button>
        <y-button type="danger" plain disabled>危险按钮</y-button>
      `
        .replace(/\t+| +/g, '')
        .trim(),
      roundUsing: `
         <y-button round>默认按钮</y-button>
        <y-button type="success" round>成功按钮</y-button>
        <y-button type="primary" round>主要按钮</y-button>
       <y-button type="info" round>主要按钮</y-button>
       <y-button type="warning" round>警告按钮</y-button>
        <y-button type="danger" round >危险按钮</y-button>
      `
        .replace(/\t+| +/g, '')
        .trim(),
    };
  },
};
</script>

<style  scoped>
  .y-button {
    margin-bottom: 5px;
  }
</style>