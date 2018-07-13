<template>
  <div>
    {{msg}}
      <table width="100%">
            <tr>
                <td colspan="2" style="background-color:darkgoldenrod">
                    <router-view name="v" class="left"></router-view>
                </td>
            </tr>
            <tr>
                <td width="20%" style="background-color:thistle">
                    <router-view name="w" class="left"></router-view>
                </td>
            </tr>
        </table>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Head',
  data () {
    return {
      msg: 'woshiheader'
    }
  }
}
</script>
<style>
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

