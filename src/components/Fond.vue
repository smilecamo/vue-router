<template>
  <div>
    {{msg}} <br>
    <router-link to="/">主页</router-link>|
    <router-link to="/Fond/Load">去我的小弟那里</router-link>
    <!-- <router-link :to="{name: 'Load' ,params:{username: 'yang',id: 888}}">找三级小弟</router-link> -->
    <router-view></router-view>  <!-- 这里的标签就是用来显示的 -->
  </div>
</template>
<script>
export default {
  name: 'Fond',
  data () {
    return {
      msg: '我是Fond'
    }
  }
}
</script>
