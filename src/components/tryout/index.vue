<template>
<div>
  <ul class="content" v-for="(item,index) in tryoutGoods">
      <img :src="'https://s2.jiguo.com/'+ item.cover +'/640?imageView2/1/w/640/h/320/q/100'">
      <b>{{item.title}}</b>
      <li><span>{{item.meta[0].event_list_title}}</span><span>{{item.meta[0].event_list_unit}}</span></li>
      <li>
          <div>
              <p v-for="(Img,index) in item.event_list_bottom_left">
                  <img :src=Img.avatar>
              </p>
              <p>
                  <img src="http://cdn.jiguo.com/static/WeiXin/images/diandiandian.png">
              </p>
          </div>
          <p>{{item.event_list_bottom_right}}</p>
      </li>
  </ul>
</div>

</template>

<script>
    import Vuex from 'vuex'

    export default {
        created(){
            this.getTryoytGoodsActions()
        },
        computed: {
            ...Vuex.mapState({
                tryoutGoods:state=>state.Tryout.tryoutGoods[0]
            })
        },
        methods: {
            ...Vuex.mapActions({
                getTryoytGoodsActions:"Tryout/getTryoytGoodsActions"
            })
        },
    }
</script>


<style scoped lang="scss">
    .content{
        padding: 0.1rem 0.2rem;
        img{
            width: 100%;
            border-radius: 0.1rem 0.1rem 0 0;
        }
        b{
            display: block;
            padding-top:0.4rem;
            padding-left:0.2re;
            padding-bottom: 0.08rem; 
            font-size: 0.3rem;
            padding-left: 0.3rem;
            border-left:1px solid #e3e3e3; 
            border-right:1px solid #e3e3e3; 
        }
        li:nth-of-type(1){
            padding-left: 0.3rem;
            border-left:1px solid #e3e3e3;
            border-right:1px solid #e3e3e3;
        }
        li:nth-of-type(2){
            padding: 0.4rem  0.3rem ;
            justify-content: space-between;
            display: flex;
            border-left:1px solid #e3e3e3;
            border-right:1px solid #e3e3e3;
            border-bottom:1px solid #e3e3e3; 
            div{
                display: flex;
                p{
                    float: left;
                    margin-left:-0.06rem; 
                    img{
                        width: 0.4rem;
                        height: 0.4rem;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
</style>