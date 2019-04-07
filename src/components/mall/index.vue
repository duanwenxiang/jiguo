<template>
  <div class="mall">
    <div class="top">
      <img src="http://cdn.jiguo.com/v2.0.3/images/076.jpg">
      <img src="../../assets/round_bg.png">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554540876097&di=1292b624f6939efb1dfe1e828b6d355b&imgtype=0&src=http%3A%2F%2Fimage.whhost.net%2Fuploads%2F20180413%2F19%2F1523617485-xOHySTXsvE.jpg">
      <p>果币<span>0</span></p>
    </div>
    <p class="name">
      段月
    </p>
    <ul class="bottom">
      <li v-for="(item,index) in goods" 
        @touchstart="handleGoods(index)"
        :class="goodsIndex == index ? 'active':''"
      >
        <p>{{item}}</p>
      </li>
    </ul>
    <keep-alive>
      <component :is="conName"></component>
    </keep-alive>
  </div>
</template>

<script>
import mallHome from './mallHome'
import mallList from './mallList'
import mallMine from './mallMine'

export default {
  components:{
    mallHome,
    mallList,
    mallMine
  },
  data() {
    return {
      goods:["商城首页","我的订单","我的果币"],
      conName:mallHome,
      goodsIndex:0,
    }
  },
  methods: {
    handleGoods(index){
      this.goodsIndex = index;
      if(index == 0){
        this.conName = "mallHome"
      }else if(index == 1){
        this.conName = "mallList"
      }else if(index == 2){
        this.conName = "mallMine"
      }
    }
  },
}
</script>

<style scoped lang="scss">
  .mall{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    .top{
      position: relative;
      padding-bottom: 0.3rem;
      background: #fff;
      img{
        width: 100%;
      }
      img:nth-of-type(2){
        bottom: 0.2rem;
        position: absolute;
      }
      img:nth-of-type(3){
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        border: solid 3px #fff;
        position: absolute;
        bottom: 0.4rem;
        left: 50%;
        margin-left: -0.9rem;
      }
      p{
        position: absolute;
        color: #fff;
        top: 25%;
        font-size: 0.45rem;
        font-weight: 900;
        left: 50%;
        margin-left: -0.7rem;
        span{
          margin-left: 0.1rem;
        }
      }
    }
    .name{
      height: 0.46rem;
      text-align: center;
      font-size: 0.28rem;
      background: #fff;
      line-height: 0.46rem;
    }
    .bottom{
      padding-top: 0.2rem;
      display: flex;
      justify-content: space-between;
      background: #fff;
      li{
        flex: 1;
        text-align: center;
        p{
          display: block;
          padding: 0 0.16rem;
          margin-bottom:0.24rem;
          color: #aeaeae;
          font-size: 0.24rem;
        }
      }
      li:nth-of-type(2){
        p{
          border-left:solid 1px  #aeaeae;
          border-right:solid 1px  #aeaeae;
        }
      }
    }
    .active{
      border-bottom:2px solid #fe5341  
    }
  }
</style>