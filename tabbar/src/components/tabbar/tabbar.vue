<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
  #tab-bar {
    /*水平分布*/
    display:flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }

  .tab-bar-item {
    flex: 1px;
    height: 49px;
    text-align: center;
  }
</style>
