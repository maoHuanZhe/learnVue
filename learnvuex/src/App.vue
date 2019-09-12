<template>
  <div id="app">
    <h1>我是App组件</h1>
    <h2>{{$store.state.count}}</h2>
    <h2>{{$store.getters.powerCount}}</h2>
    <h2>{{$store.getters.more10Info}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addFive">+5</button>
    <button @click="update">修改信息</button>
    <hello-world></hello-world>

    <h3>{{$store.state.moudelA.name}}</h3>
    <button @click="updateName">修改名称</button>
    <h4>{{$store.getters.fullName}}</h4>
    <h5>{{$store.getters.fullName1}}</h5>
    <h5>{{$store.getters.fullName2}}</h5>
    <button @click="aUpdateName">异步修改名称</button>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    add() {
      this.$store.commit("increment")
    },
    sub() {
      this.$store.commit("decrement")
    },
    addFive(){
      this.$store.commit('incrementCount',5);
    },
    update(){
      // this.$store.dispatch('updateInfo',"我是传递的信息");
      this.$store
        .dispatch('updateInfo',"我是传递的信息")
        .then((res) => {
          console.log(res);
        })
    },
    updateName() {
      this.$store.commit('updateName')
    },
    aUpdateName() {
      this.$store.dispatch("aUpdateName",'webpack')
    }
  }
}
</script>

<style>
</style>
