<template>
  <div class="box_container">
    
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/1.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/2.jpg">
          </div> 
          <div class="swiper-slide">
            <img src="../../assets/3.jpg">
          </div> 
          <div class="swiper-slide">
            <img src="../../assets/4.jpg">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <div class="vip_title">
        <p>专属试用</p>
        <div class="main_content">
            <img src="../../assets/7.jpg">
            <div class="_title">
                <h1>都市之森&nbsp;&nbsp;甲虫包收纳套装</h1>
                <h2><span>11人</span>申请</h2>
                <h3>0天21小时结束</h3>
            </div>
        </div>
        <div class="main_content">
            <img src="../../assets/7.jpg">
            <div class="_title">
                <h1>都市之森&nbsp;&nbsp;甲虫包收纳套装</h1>
                <h2><span>11人</span>申请</h2>
                <h3>0天21小时结束</h3>
            </div>
        </div>
        <div class="look_more">查看更多</div>
      </div>
    <div class="box"></div>
    <!-- ---------------------------------------------------- -->
    <div class="vip_title1">
        <p>视频体验师</p>
        <div class="nav_content_cilcle" v-for="item in goods">
            <img :src="item.img">
            <h4>{{item.h4}}</h4>
            <div>
              <span><i></i>{{item.a}}</span>
              <span><i></i>{{item.b}}</span>
            </div>
        </div>
        <div class="be_try">成为视频体验师</div>
      </div>
      <div class="box"></div>
       <!------------------------------------------------------->
        
        <div class="vip_title1">
        <p>体验师</p>
        <div class="nav_content_cilcle" v-for="item in goods">
            <img :src="item.img">
            <h4>{{item.h4}}</h4>
            <div>
              <span><i></i>{{item.a}}</span>
              <span><i></i>{{item.b}}</span>
            </div>
        </div>
        <div class="be_try">成为体验师</div>
      </div>
      <div class="box"></div>
      <!-- ----------------------------------------- -->
      <div class="tys">
        <ul v-for="(item,index) in Tys">
            <p class="title_p">{{item.title}}</p>
            <li>
                <img :src=" 'https://s2.jiguo.com/'+item.cover">
                <div class="bottom">
                    <div>{{item.author}} · {{item.addtime}}</div>
                    <div>
                        <p>
                            <span class="icon"></span>
                            <span>{{item.praise}}</span>
                        </p>
                        <p>
                            <span class="icon"></span>
                            <span>{{item.reply}}</span>
                        </p>
                    </div>
                </div>
            </li>
            <div class="bottomword">
                {{item.product}}
            </div>
        </ul>
    </div>




  </div>
</template>

<script>
import Vuex from 'vuex'
import Swiper from 'swiper'
import "../../../node_modules/swiper/dist/css/swiper.min.css"
export default {
  data(){
    return{
      goods:[
        {
             img:"https://s2.jiguo.com/e5eb9144-ad61-4a6d-abe6-7081f4cc8160/230x230",
             h4:"米奇",
             a:"12",
             b:"4"
        },
          {
             img:"https://s2.jiguo.com/avatar1349529/230x230",
             h4:"米奇",
             a:"12",
             b:"4"
        },
          {
             img:"https://s2.jiguo.com/e5eb9144-ad61-4a6d-abe6-7081f4cc8160/230x230",
             h4:"米奇",
             a:"12",
             b:"4"
        },
          {
             img:"https://s2.jiguo.com/avatar1349529/230x230",
             h4:"米奇",
             a:"12",
             b:"4"
        },
          {
             img:"https://s2.jiguo.com/e5eb9144-ad61-4a6d-abe6-7081f4cc8160/230x230",
             h4:"米奇",
             a:"12",
             b:"4"
        },
          {
             img:"https://s2.jiguo.com/avatar1349529/230x230",
             h4:"米奇",
             a:"12",
             b:"4"
        }
      
      ]
    }
  },
  created() {
            this.getTysActions()
        },
        methods: {
            ...Vuex.mapActions({
                getTysActions:"Tys/getTysActions"
            })
        },
        computed: {
            ...Vuex.mapState({
                Tys: state => state.Tys.Tys[0],
            })
        },
  mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay:{
            disableOnInteraction: false,
            delay: 2000,
        },
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },  
}
</script>

</script>

<style scoped lang="scss">
  .swiper-slide img{
    width: 100%;
  }
</style>

<style scoped lang="scss">
  .box_container{
      overflow: auto;
  }
  .swiper-pagination-bullet{
    background: #fff;
    opacity: 1;
    width:5px;
    height:5px;
     
  }
  .swiper-pagination-bullet-active{
    background: orange;
  }
 .vip_title1{
   position: relative;
   width:100%;
   height:400px;
 }
 .vip_title p{
     width:100%;
     height:40px;
     padding:16px 0 0 12px;
     font-size: 18px;
     color:#b3b3b3;
 }
 .vip_title1 p{
     width:100%;
     height:40px;
     padding:16px 0 0 12px;
     font-size: 18px;
     color:#b3b3b3;
     margin-bottom: 12px;
 }
 .vip_title1 p{
     width:100%;
     height:40px;
     padding:16px 0 0 12px;
     font-size: 18px;
     color:#b3b3b3;
     
 }
 .main_content{
     width:351px;
     height:114px;
     background:#fff;
     position: relative;
     margin: auto;
 }
 .main_content img{
     float: left;
     width:90px;
     height:90px;
     border:none;
     border-radius: 5px;
     margin:12px 0;
     
 }
.main_content ._title{
     float: left;
}
._title{
    padding-left: 12px;
}
._title h1{
    height: 40px;
    line-height: 40px;
    color: #333333;
    
    font-size: 14px;   
}
._title h2{
    color:#808080;
    font-size: 12px;
    margin-top:20px;
    margin-bottom:5px;

}
._title h2 span{
     font-size: 16px;
     color: #e93838;
     font-weight:normal;
    
}
._title h3{
     font-size: 12px;
     color: #b3b3b3;
     font-weight:normal;
}
.look_more{
    width:100%;
    height:43px;
    text-align: center;
    line-height: 43px;
    font-size: 14px;
    color: #595959;
    position: relative;
}
.box{
    background: #f2f2f2;
    width:100%;
    height:12px;
}
/* ------------------------------------------------- */
.nav_content_cilcle{
  width:117px;
  height:139px;
  text-align: center;
  margin: auto;
  float: left;
  margin-bottom:13px;
}
.nav_content_cilcle img{
  width:93px;
  height:93px;
  border-radius: 50%;
  margin-left: 12px
}
.be_try{
    width:94%;
    height:43px;
    text-align: center;
    line-height: 43px;
    font-size: 14px;
    color: #dd3932;
    position: relative;
    float: left;
    border-top:1px solid #ebebeb;
    margin:auto;
    margin-left:10px;
}
.nav_content_cilcle h4{
  color: #006d94;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  font-weight: 100;

}
.vip-main{
  background-color: #fff;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: block;
  font-size: 14px;
}
/* ------------------------------------------------------- */
 *{
        padding: 0;
        margin: 0;
    }
    .tys>ul:nth-of-type(1){
        margin-top: .8rem;
    }
    .bottomword{
        margin-left: .2rem;
        width: 100%;
        height: .4rem;
        overflow: hidden;
        font-size: .2rem;
        color: #a3a3a3;
    }
    .tys{
        /*z-index: 1;*/
        ul{
            border-bottom: solid 1px #e3e3e3;
        }
        .title_p{
            display: block;
            padding: 0 0.2rem;
            margin-top: 0.2rem;
            font-size: 0.28rem;
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        li{
            position: relative;
            padding: 0 0.2rem;
            margin: 0.2rem 0;
            img{
                width: 100%;
                border-radius: 0.2rem;
            }
            .bottom{
                position: absolute;
                display: flex;
                width:94.5%;
                bottom: 0;
                justify-content: space-between;
                align-items: flex-end;
                color: #cccccc;
                padding: 0 0.3rem;
                border-radius: 0 0 0.2rem 0.2rem;
                padding-bottom: 0.25rem;
                height: 40%;
                background: linear-gradient(180deg,hsla(0,0%,100%,.02),rgba(35,35,35,.69));
                div:nth-of-type(2){
                    display: flex;
                    .icon{
                        width: 0.4rem;
                        height: 0.32rem;
                        margin-right:0.1rem;
                        background-image: url(../../assets/icon.png);
                        background-size: 3rem auto;
                        background-repeat: no-repeat;
                        background-position: -1.7rem -2.12rem;
                    }
                    p:nth-of-type(1){
                        margin-right: 0.3rem;
                        .icon{
                            background-position: -0.95rem -1.75rem;
                        }
                    }
                    p{
                        display: flex;
                        align-items: center;
                        span{
                            display: block;
                        }
                    }
                }
            }
        }
    }
</style>
