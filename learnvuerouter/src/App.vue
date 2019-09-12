<template>
  <div id="app">
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!--<router-link to="/home" tag="button" replace >首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace>关于</router-link>-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <!--<router-link :to="'/user/'+userID">用户</router-link>-->
    <!--<router-link :to="{path:'/profile',query:{name:'Vue',age:18}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userID: 'Vue'
    }
  },
  methods: {
    homeClick() {
      this.$router.push("/home")
    },
    aboutClick() {
      this.$router.replace("/about")
    },
    userClick() {
      this.$router.push("/user/"+this.userID)
    },
    profileClick() {
      this.$router.replace({
        path:'/profile',
        query: {
          name: 'Vue',
          age: 18
        }
      })
    }
  }
}
</script>

<style>
</style>
