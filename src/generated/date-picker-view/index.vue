<template>
  <div>
    <div id="basic">
      <markdown :source="title"/>
    </div>
    <div class="markdown-body m-b" id="demo">
      <span></span>
      <h2>示例代码</h2>
    </div>

    
 </div>
</template>

<script lang="ts">

  
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import DatePickerView from '@/packages/date-picker-view';
  import title from '../../packages/date-picker-view/demo/README.md';

  Vue.use(DatePickerView);
  @Component({
    name: 'ComponentDemo'
  })
  export default class ComponentDemo extends Vue {
    public title = title;

    public getContainer() {
      return document.getElementById('app-content');
    }
  }
</script>
<style lang="less" scoped>
  .toc-affix {
    width: 150px;
    position: fixed;
    top: 100px;
    right: 10px;
    bottom: 250px;
    z-index: 500;
  }
</style>
