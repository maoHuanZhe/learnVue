<template>
  <div>
    <h1>我是用户</h1>
    <span>{{userID}}</span>
  </div>
</template>

<script>
    export default {
        name: "User",
        data() {
          return {
            userID: this.$route.params.userID
          }
        }
    }
</script>

<style scoped>

</style>
