<template>
  <div>
    <Slide/>
    <Bottom/>
    <Content/>
  </div>
</template>

<script>

import Vuex from 'vuex'
import Slide from './slide'
import Content from './content'
import Bottom from './bottom'

export default {
  name:"home",
  components:{
    Slide,
    Content,
    Bottom
  },
  created(){
   this.getSwiperImgActions();
  },
  methods: {
    ...Vuex.mapActions({
      getSwiperImgActions:"Home/getSwiperImgActions"
    })
  },
}
</script>


<style scoped lang="scss">

</style>
