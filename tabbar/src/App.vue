<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbarItem path="/home" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/category" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="/shopcart" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="/profile" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from "./components/tabbar/tabbar"
  import tabbarItem from './components/tabbar/tabbarItem'
export default {
  name: 'App',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";


</style>
