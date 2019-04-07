<template>
  <div class="phone">
      <ul>
          <li v-for="item in phone">{{item}}<span></span></li>
          <li>联系我们</li>
      </ul>
  </div>
</template>

<script>


export default {
    data(){
        return {
            phone:["意见反馈","关于极果","商务合作","线下合作","免费试用"]
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
                padding: 0.3rem 0.4rem;
                font-size: 0.3rem;
                border-bottom: 1px solid #cfcfcf;
                span{
                    display: block;
                    float: right;
                    width: 0.5rem;
                    height: 0.5rem;
                    background-image: url(../../assets/icon.png);
                    background-size: 5rem auto;
                    background-repeat: no-repeat;
                    background-position: -3.5rem 0.1rem;
                }
            }
            li:nth-of-type(6){
                margin: 0.4rem auto;
                width: 7rem;
                height: 0.8rem;
                border: solid 1px #fe584d;
                color: #fe584d;
                padding: 0;
                line-height: 0.8rem;
                text-align: center;
                border-radius: 0.5rem;
            }
        }
    }
</style>