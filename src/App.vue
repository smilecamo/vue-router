<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <p>路由传参与子路由</p>
    <router-link to="/hi1">hi</router-link>|
    <router-link to="/name/1">1</router-link>
    <router-link to="/name/2">2</router-link>
    <hr>
    <p>$router.push方法</p>
    <button @click='btnClick(1)'>库里</button>
    <button @click='btnClick(2)'>哈登</button>
    <hr>
    <p>前进后退</p>
    <button @click='btnBlank'>前进</button>
    <button @click='btnRun'>后退</button>
    <hr>
    <p>一个页面多个路由</p>
    <router-link to="/head">多路由</router-link>
    <router-view name="a" class="left"></router-view>
    <router-view name="b" class="left"></router-view>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    btnClick (uid) {
      // 直接通过$router.push(),跳转到指定页面
      // this.$router.push({path: `/hi1/player/${uid}`});
      this.$router.push({path: `/hi1/player/${uid}/state`})
    },
    btnBlank () {
      // 历史记录
      this.$router.go(-1)
    },
    btnRun () {
      this.$router.go(1)
    }
  }
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
  height: 0;
  padding-bottom: 20%;
  margin-left: 20px;
  background: #ccc;
  text-align: center;
}
</style>
