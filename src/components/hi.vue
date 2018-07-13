<template>
  <div>
    {{msg}} <br>
    <router-link to="/hi1/player/1">库里</router-link>|
    <router-link to="/hi1/player/2">哈登</router-link>|
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: '我是Hi'
    }
  }
}
</script>
