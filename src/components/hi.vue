<template>
  <div>
    {{msg}} <br>
    <router-view></router-view>
    <router-view name='left'></router-view>
    <router-view name='right'></router-view>
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
