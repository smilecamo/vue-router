<template>
  <div>
    {{msg}}---{{$route.params.uid}}
    <hr>
  </div>
</template>
<script>
export default {
  name: 'Namer',
  data () {
    return {
      msg: '我是name下age组件'
    }
  }
}
</script>