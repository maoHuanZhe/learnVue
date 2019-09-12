<template>
    <div>
      <h1>我是主页</h1>
      <router-link to="/home/news">消息</router-link>
      <router-link to="/home/message">新闻</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
