<template>
  <div>
    <h1>球员页面</h1>
    <p>球员编号:{{detail.uid}}</p>
    <p>球员名字:{{detail.name}}</p>
    <p>球员得分:{{detail.point}}</p> 
    <router-link :to="state">简介</router-link>
    <router-link :to="profile">详情</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Player',
  data () {
    return {
      detail: {},
      state: '',
      profile: ''
    }
  },
  mounted () {
    this.detail = this.getPlayer(this.$route.params.uid)
    this.state = '/hi1/player/' + this.$route.params.uid + '/state'
    this.profile = '/hi1/player/' + this.$route.params.uid + '/profile'
  },
  beforeRouteUpdate (to, from, next) {
    this.detail = this.getPlayer(to.params.uid)
    this.profile = '/hi1/player/' + to.params.uid + '/profile'
    this.state = '/hi1/player/' + to.params.uid + '/state'
    next();
  },
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next (false)
    }
  },
  methods: {
    getPlayer (uid) {
      if (uid == 1) {
        return { uid: 1, name: '库里', point: 26 }
      }
      if (uid == 2) {
        return { uid: 2, name: '哈登', point: 30 }
      } else {
        return {uid: -1}
      }
    }
  }
}
</script>
