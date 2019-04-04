<template>
  <div class="bottom">
    <p class="icon"></p>
    <div class="swiper-container swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in SwiperInfo">
          <p><span>{{item.play_name}}</span>&nbsp;{{item.username}}&nbsp;{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Vuex from "vuex";

export default {
  updated(){
    new Swiper(".swiper2", {
    direction: 'vertical',
    autoHeight:true,
      autoplay: {
        disableOnInteraction: false,
        delay: 1500
      },
      loop: true
    });
  },
  computed: {
    ...Vuex.mapState({
      SwiperInfo: state => state.Home.SwiperInfo[0]
    })
  }
};
</script>


<style scoped lang="scss">
.bottom {
  display: flex;
  height: 0.9rem;
  background: #f7f7f7;
  color: #999999;
  padding: 0 0.2rem;
  align-items: center;
  font-size: 0.24rem;
  .icon {
    width: 0.5rem;
    height: 0.5rem;
    padding-right: 0.5rem;
    border-right: 1px solid #ccc;
    display: inline-block;
    margin-right: 0.3rem;
    background-image: url(../../assets/gb.png);
    background-size: 0.25rem auto;
    background-repeat: no-repeat;
    background-position: 0.1rem 0.1rem;
  }
}
</style>

<style>
  .swiper2{
    height: 0.9rem;
    line-height: 1rem;
    margin: 0
  }
  .swiper2>.swiper-wrapper>.swiper-slide>p>span{
    width: 0.3rem;
    color: #666;
  }
  .swiper2>.swiper-wrapper>.swiper-slide>p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>