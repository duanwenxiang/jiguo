<template>
  <div id="app">
    <Side/>
    <Shade/>
    <router-view/>
  </div>
</template>

<script>
  
  import Side from './common/side'
  import Shade from './common/shade'

  export default{
    name:"app",
    components:{
      Side,
      Shade
    },
  }

</script>

<style lang="scss" scoped>

</style>
