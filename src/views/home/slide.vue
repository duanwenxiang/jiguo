<template>
  <div class="slide">
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in SwiperImg">
          <img :src=" '//s2.jiguo.com/' + item.fileid + '/640?imageView2/1/w/640/h/320/q/100'">
          <div class="swiperBg" v-show="item.name">
            <p>{{item.name}}</p>
            <p><span>{{item.follownum}}</span>人申请&nbsp;免费试用&nbsp;<span>{{item.deadline_time}}</span>截止</p>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination swp1"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Vuex from "vuex";


export default {
  updated() {
    if(!this.Swiper){
       new Swiper('.swiper1', {
        autoplay: {
          disableOnInteraction: false,
          delay: 1500
        },
        loop: true,
        pagination: {
          el: ".swp1"
        }
      })
    }
  },
  computed: {
    ...Vuex.mapState({
      SwiperImg: state => state.Home.SwiperImg[0],
    })
  }
};
</script>


<style scoped lang="scss">
  img {
    width: 100%;
  }
  .swiperBg{
    width: 100%;
    position: absolute;
    left: 0;
    height: 45%;
    bottom: 0;
    background: linear-gradient(180deg,hsla(0,0%,100%,.02),rgba(35,35,35,.69));
    padding: 0 0.5rem;
    p:nth-of-type(1){
      padding: 0.1rem 0;
      font-size: .35rem;
      color: #fff;
      border-bottom: .01333rem solid hsla(0,0%,100%,.3);
      margin-bottom:0.1rem; 
    }
    p:nth-of-type(2){
      color:#a3a3a3;
      span{
        color: #fff;
        font-size: 0.3rem;
      }
    }
  }
</style>

<style>
/* 轮播图的样式 */
.swiper1 .swiper-pagination-bullet {
  background: #fff;
  opacity: 1;
}
.swiper1 .swiper-pagination-bullet-active {
  background: orange;
}
</style>