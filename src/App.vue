<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <router-link to="/hi1">hi</router-link>
    <router-view></router-view>
    <router-view name="a" class="left"></router-view>
    <router-view name="b" class="left"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left{
  float: left;
  width: 40%;
  margin-left: 20px;
  background: #ccc;
  height: 300px;
  text-align: center;
  line-height: 300px;
}
</style>
