<template>
  <div>
    <h1>我是Profile组件</h1>
    <span>{{$route.query.name + '-' + $route.query.age}}</span>
  </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
