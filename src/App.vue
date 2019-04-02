<template>
  <div id="app">
    <Header/>
    <Side/>
    <Shade/>
    <router-view/>
  </div>
</template>

<script>
  
  import Header from './common/header'
  import Side from './common/side'
  import Shade from './common/shade'

  export default{
    name:"app",
    components:{
      Header,
      Side,
      Shade
    },
  }

</script>

<style lang="scss" scoped>

</style>
