<template>
  <div>
    <h1>{{$store.state.count}}</h1>
    <h2>{{$store.getters.powerCount}}</h2>
    <h2>{{$store.getters.moreAge(8)}}</h2>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>

</style>
