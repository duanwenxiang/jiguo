<template>
  <div>
    <Header/>
    <mt-loadmore
      :bottom-method="loadBottom"
      :auto-fill="false"
      ref="loadmore"
    >
      <Slide/>
      <Bottom/>
      <Content/>
    </mt-loadmore>
  </div>
</template>

<script>
import Vuex from "vuex";
import Slide from "./slide";
import Content from "./content";
import Bottom from "./bottom";

export default {
  name: "home",
  components: {
    Slide,
    Content,
    Bottom
  },
  data() {
    return {
      limit:"",
    }
  },
  created(){
    this.getSwiperImgActions();
  },
  methods: {
    ...Vuex.mapActions({
      getSwiperImgActions: "Home/getSwiperImgActions",
      getLoadBottomActions: "Home/getLoadBottomActions",
    }),
    loadBottom(){
      this.$refs.loadmore.onBottomLoaded();
      this.getLoadBottomActions();
    },
  },
};
</script>


<style scoped lang="scss">

</style>
