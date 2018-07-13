<template>
  <div>
    {{msg}}
    <br>
    <p>编号:{{detail.uid}}</p>
    <p>姓名:{{detail.name}}</p>
    <p>年龄:{{detail.age}}</p>
    <router-link :to="name">姓名</router-link>
    <router-link :to="age">年龄</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Name',
  data () {
    return {
      msg: '我是name总页面',
      detail: {},
      name: '',
      age: ''
    }
  },
  mounted () {
    this.detail = this.getDefault(this.$route.params.uid)
    this.name = '/name/' + this.$route.params.uid + '/namer'
    this.age = '/name/' + this.$route.params.uid + '/age'
  },
  beforeRouteUpdate (to, from, next) {
    this.detail = this.getDefault(to.params.uid)
    this.name = '/name/' + to.params.uid + '/namer'
    this.age = '/name/' + to.params.uid + '/age'
    next ()
  },
  methods: {
    getDefault (uid) {
      if (uid==1) {
        return {uid: 1, name: '哈登', age: 12}
      } else if (uid==2) {
        return {uid: 2, name: '库里', age: 23}
      } else {
        return {uid: 3}
      }
    }
  }
}
</script>
