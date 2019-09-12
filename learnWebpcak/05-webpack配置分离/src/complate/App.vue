<template>
    <h2 class="title">{{name}}</h2>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                name: '我是.vue的App组件'
            };
        }
    }
</script>

<style scoped>
    .title {
        color: blue;
    }
</style>
