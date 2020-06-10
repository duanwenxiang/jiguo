<template>
  <div class="search">
    <Loading v-if="isLoading"/>
    <div class="top">
      <input type="text" placeholder="搜索" v-model="searchVal">
      <img
        src="https://cdn.jiguo.com/static@2.0/v1.0.0/img/searh-close.c6b4cf2.svg"
        v-show="imgRe"
        @click="btnRe"
      >
      <p @touchstart="handleBack">取消</p>
    </div>
    <!-- 原本显示的 -->
    <ul class="tryout" v-show="tryout">
      <div class="tryout_title">试用</div>
      <li v-for="(item,index) in searchTytout">
        <img :src=" 'https://s2.jiguo.com/' + item.fileid +'/230x230' ">
        <div class="trtout_right">
          <b>{{item.name}}</b>
          <p>
            <span>{{item.follownum}}人</span>申请
          </p>
          <p v-html="item.status.title"></p>
        </div>
      </li>
    </ul>
    <ul class="book" v-show="tryout">
      <div class="book_title">文章</div>
      <li v-for="(item,index) in searchBook">
        <img :src="'//s2.jiguo.com/'+item.cover+'/230x230'">
        <div class="book_right">
          <b>{{item.title}}</b>
          <span class="book_f1">{{item.feature}}</span>
          <p>
            <span>{{item.format.bottom_left}}</span>
            <span>{{item.addtime}}</span>
          </p>
        </div>
      </li>
    </ul>
    <!-- 搜索后显示的 -->
    <ul class="tryout" v-show="tryoutShow">
      <div class="tryout_title">试用</div>
      <li v-for="(item,index) in SearchEvent">
        <img :src=" 'http://s2.jiguo.com/' + item.fileid +'/230x230' ">
        <div class="trtout_right">
          <b>{{item.name}}</b>
          <p>
            <span>{{item.follownum}}人</span>申请111
          </p>
          <p>{{item.status.title}}</p>
        </div>
      </li>
    </ul>
    <ul class="book" v-show="tryoutShow">
      <div class="book_title">文章</div>
      <li v-for="(item,index) in SearchBook">
        <img :src="'//s2.jiguo.com/'+item.cover+'/230x230'">
        <div class="book_right">
          <b>{{item.title}}</b>
          <span class="book_f1">{{item.feature}}</span>
          <p>
            <span>{{item.format.bottom_left}}</span>
            <span>{{item.addtime}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  data() {
    return {
      isLoading: true,
      searchVal: "",
      tryout: true,
      imgRe: false,
      tryoutShow: false
    };
  },
  watch: {
    searchVal(newVal, oldVal) {
      if (newVal == this.searchVal) {
        this.tryout = false;
        this.imgRe = true;
        this.searchValActions(newVal);
        this.tryoutShow = true;
      }
      if (newVal == "") {
        this.tryout = true;
        this.imgRe = false;
        this.tryoutShow = false;
      }
    },
    searchTytout() {
      this.isLoading = false;
    },
    searchBook() {
      this.isLoading = false;
    },
    SearchBook() {
      this.isLoading = false;
    },
    SearchEvent() {
      this.isLoading = false;
    }
  },
  created() {
    this.getSearchActions();
  },
  methods: {
    ...Vuex.mapActions({
      getSearchActions: "Search/getSearchActions",
      searchValActions: "Search/searchValActions"
    }),
    handleBack() {
      this.$router.back();
    },
    btnRe() {
      this.searchVal = "";
    }
  },
  computed: {
    ...Vuex.mapState({
      searchTytout: state => state.Search.searchGoodsTryout[0],
      searchBook: state => state.Search.searchGoodsBook[0],
      SearchBook: state => state.Search.searchBlog,
      SearchEvent: state => state.Search.searchTryout
    })
  }
};
</script>

<style scoped lang="scss">
.top {
  display: flex;
  height: 1rem;
  background: #fff;
  padding-left: 0.4rem;
  padding-right: 0.2rem;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  input {
    display: block;
    flex: 1;
    height: 0.68rem;
    border: 1px solid #e8e8e8;
    border-radius: 0.5rem;
    padding-left: 0.3rem;
    outline: none;
    background: #f2f2f2;
  }
  img {
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    right: 1.5rem;
  }
  p {
    margin-left: 0.4rem;
    font-size: 0.32rem;
    color: #595959;
  }
}
.tryout {
  margin-top: 1rem;
  .tryout_title {
    height: 0.86rem;
    padding: 0 0.24rem;
    line-height: 0.86rem;
    color: #595959;
    background: #f2f2f2;
    font-size: 0.32rem;
  }
  li {
    display: flex;
    padding: 0.24rem;
    border-bottom: solid 1px #ebebeb;
    img {
      width: 2rem;
      height: 2rem;
    }
    .trtout_right {
      flex: 1;
      padding-left: 0.2rem;
      b {
        line-height: 0.28rem;
        display: block;
        font-size: 0.28rem;
        color: #333333;
      }
      p {
        span {
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
.book {
  .book_title {
    height: 0.86rem;
    padding: 0 0.24rem;
    line-height: 0.86rem;
    color: #595959;
    background: #f2f2f2;
    font-size: 0.32rem;
  }
  li {
    display: flex;
    padding: 0.24rem;
    border-bottom: solid 1px #ebebeb;
    img {
      width: 2rem;
      height: 2rem;
    }
    .book_right {
      flex: 1;
      padding-left: 0.2rem;
      position: relative;
      b {
        line-height: 0.28rem;
        display: block;
        font-size: 0.28rem;
        color: #333333;
        margin-bottom: 1rem;
      }
      .book_f1 {
        position: absolute;
        bottom: 30%;
      }
      span {
        display: block;
        color: #fb3f3d;
        font-size: 0.32rem;
      }
      p {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 0.28rem;
          color: #a3a3a3;
        }
      }
    }
  }
}
</style>