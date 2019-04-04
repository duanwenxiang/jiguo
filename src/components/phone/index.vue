<template>
  <div class="phone">
      <ul>
          <li v-for="item in phone">{{item}}</li>
      </ul>
  </div>
</template>

<script>


export default {
    data(){
        return {
            phone:["意见反馈","关于极果","商务合作","线下合作","免费试用","联系我们"]
        }
    }
}
</script>

<style scoped lang="scss">
    .phone{
        position: fixed;
        width: 100%;
        height: 100%;
        background: #f2f2f2;
        ul{
            margin-top: 0.2rem;
            li{
                background: #fff;
                color: #595959;
                padding: 0.3rem 0;
            }
        }
    }
</style>