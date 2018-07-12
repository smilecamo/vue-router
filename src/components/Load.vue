<template>
  <div>
    {{msg}}---{{$route.params.username}}----{{$route.params.id}}
  </div>
</template>
<script>
export default {
  name: 'Load',
  data () {
    return {
      msg: '我是Fond页面下的三级页面'
    }
  }
}
</script>
