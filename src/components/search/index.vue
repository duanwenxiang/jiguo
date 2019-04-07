<template>
  <div class="search">
    <div class="top">
      <input type="text" placeholder="搜索">
      <p @touchstart="handleBack">取消</p>
    </div>
    <ul class="tryout">
      <div class="tryout_title">试用</div>
      <li v-for="(item,index) in searchTytout">
        <img :src=" 'https://s2.jiguo.com/' + item.fileid +'/230x230' ">
        <div class="trtout_right">
          <b>{{item.name}}</b>
          <p><span>{{item.follownum}}人</span>申请</p>
          <p v-html="item.status.title"></p>
        </div>
      </li>
    </ul>
    <ul class="book">
      <div class="book_title">文章</div>
      <li v-for="(item,index) in searchBook">
        <img :src="'//s2.jiguo.com/'+item.cover+'/230x230'">
        <div class="book_right">
          <b>{{item.title}}</b>
          <span class="book_f1">{{item.feature}}</span>
          <p><span>{{item.format.bottom_left}}</span><span>{{item.addtime}}</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  created(){
    this.getSearchActions()
  },
  methods: {
    ...Vuex.mapActions({
      getSearchActions:"Search/getSearchActions"
    }),
    handleBack(){
      this.$router.back();
    }
  },
  computed: {
    ...Vuex.mapState({
      searchTytout:state=>state.Search.searchGoodsTryout[0],
      searchBook:state=>state.Search.searchGoodsBook[0]
    })
  },
}
</script>

<style scoped lang="scss">
  .top{
    display: flex;
    height: 1rem;
    background: #fff;
    padding-left: 0.4rem;
    padding-right: 0.2rem;
    align-items: center;
    input{
      display: block;
      flex: 1;
      height: 0.68rem;
      border: 1px solid #e8e8e8;
      border-radius: 0.5rem;
      padding-left: 0.3rem;
      outline:none;
      background: #f2f2f2;
    }
    p{
      margin-left: 0.4rem;
      font-size: 0.32rem;
      color: #595959;
    }
  }
  .tryout{
    .tryout_title{
      height: 0.86rem;
      padding: 0 0.24rem;
      line-height: 0.86rem;
      color: #595959;
      background: #f2f2f2;
      font-size: 0.32rem;
    }
    li{
      display: flex;
      padding: 0.24rem;
      border-bottom: solid 1px #ebebeb;
      img{
        width: 2rem;
        height: 2rem;
      }
      .trtout_right{
        flex: 1;
        padding-left: 0.2rem;
        b{
          line-height: 0.28rem;
          display: block;
          font-size: 0.28rem;
          color: #333333;
        }
        p{
          span{
            color: #fb3f3d;
            font-size: 0.32rem;
          }
          font-size: 0.28rem;
          color: #a3a3a3;
          margin-top: 0.5rem;
        }
      }
    }
  }
  .book{
    .book_title{
      height: 0.86rem;
      padding: 0 0.24rem;
      line-height: 0.86rem;
      color: #595959;
      background: #f2f2f2;
      font-size: 0.32rem;
    }
    li{
      display: flex;
      padding: 0.24rem;
      border-bottom: solid 1px #ebebeb;
      img{
        width: 2rem;
        height: 2rem;
      }
      .book_right{
        flex: 1;
        padding-left: 0.2rem;
        position: relative;
        b{
          line-height: 0.28rem;
          display: block;
          font-size: 0.28rem;
          color: #333333;
          margin-bottom: 1rem;
        }
        .book_f1{
          position: absolute;
          bottom: 30%;

        }
        span{
          display: block;
          color: #fb3f3d;   
          font-size: 0.32rem;
        }
        p{
          display: flex;
          justify-content: space-between;
          span{
            font-size: 0.28rem;
            color: #a3a3a3;
          }
        }
      }
    }
  }
</style>