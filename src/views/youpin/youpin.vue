<template>
  <div class="container">
    <div class="back_img">
      <div class="imga">
        <img src="http://cdn.jiguo.com/static@2.0/v1.0.0/img/header-logo.4d86ffe.png">
      </div>
      <div class="_text">
        <p>专业「内容电商」服务平台</p>
        <p>为用户甄选每一件商品</p>
        <p>用心服务千万优质商家、内容创业者</p>
      </div>
      <div class="search">
        <img src="../../assets/zan.png">
        <span>有赞官方推荐优质分销商</span>
      </div>
    </div>
    <div class="double">
      <div class="top">
        <div class="top_cen">
          <img src="../../assets/top_cen.png">
          <h1>招募供货商</h1>
          <h2>R e c r u i t&nbsp;&nbsp; S u p p l i e r s</h2>
          <h3>好产品轻松找到目标消费者</h3>
          <div class="btn">点击申请</div>
        </div>
        <div class="top_four">
          <div class="top_one">
            <img
              src="data:image/png;base64,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"
            >
            <h4>1亿+精准消费流量</h4>
            <p>
              覆盖主流自媒体渠道
              <br>轻松找到目标消费者
              <br>全程无忧完成销售%
            </p>
          </div>
          <div class="top_one">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABECAYAAAAiL3M8AAAAAXNSR0IArs4c6QAAC79JREFUeAHlW3tsFMcZ/2b3zuf3A/zANoYEcHnYEKemIRBAlEBoEmgRYJq0KmlRiJQ0apWkUR8SbZKqrySK+CNppKpBUaM2hlBZLQktidogIHHUpLVDascFhzc2Boyx8flxd7vb37fHnu+xd9477vaMMtJ6Zme++eab337fNzPfnAUlIe3tWpc9cnGgXtG8XyJNnUWSuIlUKiGJckjVMkmIIQzDTw+ROCFJ4ijJ0r+IprRurnnDkwQRUsZCJMr5zSNLi9yKukkT2ibSaKVGmiNeXoLEMAnaT5q2J6espGldxV4GcUKluAHa07682uvxPi40bYtGlJ2s2QghLkO7fu/MkHdsnHeoO1l8r5ePZYB2H1tWog56n8IkHkpEW6wKCoGGNEEvTBL5v15zy9tuq/1SRWcJoMaWxQ0Q4CUAU5IqQcL5CkEnNM2x9f5bDx8Ib7PzPSZAu9saMhTfmRfhcLfZKZQxFkDS8Dy9eUHzMzBBWLT9KSpATS0rCkfEyF444KX2ixU6IkD6s+Ss+kY6VjxTgHiFGlR972ga1YeKmr43CLovP7dowz3Vfxu1UwopfLB9x+52DSrKmxMJHJYR9nXPwOCV1zQNLtzGFAEQhPgdnPESG2WwPBTkamhsveNnljskgTDka+z6ePH9qqr9KQl8U8dCYMmQxbL75ze/n7pBxjgHANL3OW5fB1R40ljzxCxhB96Zn1tYa4c/CpiY6la23wjg8CeDqc2CK3jYjs+na9DrnyyvIp/nMwzotGPQJI1xSS4W0zZXNQ8niZ8pG78GKZ6H0HojgcOTKVZ7xX2ms0pipaQvm5rYej08R91Ocl92kaoEXNq47JjW3ZdJitd6nwimmvZgRF2SK8TuI0vrFcX3USJ8h664qOPdKuo/7z/UO1w+uvm2Hppa2xuVnapIdPyDMjr732KEjgAOThDls6/QrDvOkSNDjdrPtAErWpGzoOQrNfsRCUhNkhTNtyYR1j6PTK1/nREAh3n4Rh107FAldX8afSE8driczhwp8YPDnbDv6+4ook//OY3f4ksaSQO+wZQehSShirr4pPJTd7UXEZuWWTr571KzatA7qKt9smnbpRP5dPVSlmlbrEpVU+fFar/eNjhprSYRJu7L0SczcjUDvkWOYBurDxMPXsqM6DNuhaBZ49JcB4GEM4755x6HaUa2NyqF7FSIn/Dkyo0dfs7Kj90ezk9/14S5SpoSx18pIZSQH383hNtn95Ekm4doKmrMfWZO0SgVTDEPEmajLb8s/pA0No0JyW91zjCxxAJRPNm5K0+T5AhdecrnXKaZt0cPKc9bdZryikP3dlkFo1R716mogMeaDGLjoQLEIk6gzYF90FX0cyXQl0pn9VNhpZvYwSpeifJKh6iwPLYWZOZ5qX5jJ/Wdy8U+yEXZBR4qqhyMANqqPC5RoRw/fnzZ8PBwb0ZGxmfV1dVJjReJxpbbW2Eot1gVKF10WXIFTZZWUo42j4Sah2s1mTKcWSTLDnI4/I8sy/x1evDReyRJ+hDl/QjVHpgyJYpdW5iMeL118S7cS222QGs7iUsqoamOLZThu4l82HEzEJmZmZSVlaWXLQrEnv8wwPtjWVnZawAs+upiwlDsal3yBPYSz5u0pa0qW66kCukBkj1TSVVVHYz8/HxyuRLyBIF5AJzTeH4DjXoFuSVTFLtbltQppLYEuKSxIAkHzXA+TtLIdCi1BvORKS8vT9eYJIvVBYAeraioaBqPr35SxL1XJ5bLmeMRp7I9R7qZpkmP4bjiDzCwthQWFhJ8ScqGBe8XoU0/iKVN/tEF/SFlUlhgXJ6xgarUJwPg5OTk0KRJk1IKDosF8320q6uruaenJ6py6ABJOY6XoUqx12cLE02EpNy5gfJG7iRF8W9nWGvY39iYbvX5fAcAlOlpWQdoc/Whi4jz/tZGofShSh13Ud7onbq/4QoGhleoNKSp8HlvA6Ti8LH9JobavNzCn2NX3RVOkKr3IsciKvJ+LQAOmxU/aUyzMfbfz58/HyJEACDcEAwIWTxih4CycFGZ8i34AP9ZDjtgu83KdJrQonr4paeDGwMAceV9C97/i5DEjmCCVJSnyQ+T4hvjbLPPGRvYvPR9aFGt0RQCEFeWLXA9CYe9zyBIdp4jzSSnpzrAln2O02keeAsQ2ViAFjmgRQF/HAHQl8UBH34O14CfxvWkQq5K6TsBv4P9x4QwrfB5AqRl0KK1XB8BEFe6e3vLcTtXxuVkJofIJuEtCrDkc1UqN4KBgRIoKIryTe5mCpBQtAcS4Dlul1LH2oBjZmIGyGrq7++n7u5u7JciI5WxeCAMQli+yeOJL1oJ7V7HK1rEL1OhXqKxdcmWWIMm2panLsQvD/yJzcvK4fPixYvU1NSkg8M9+US/atUqWrRo0TVO5tnQ0BC99dZb1N7erhPweAsXLqTVq1db8nnAgZf7dRGR9ZoN76xE4/fMh72+2mJ1PfyPnweDk50d+0eyIyMjtHPnTurtHbtn49N9Z2cnFRQUUHl5eVSBGhsb6ejRoyHtrEmDg4M0ezZveSylixEmpmrat6N05TvQl51CrsUPwX8CJ342Cp1ptUuUhZgXn9THS62trTQwMGBKdvDgQdN6rjx79iwhymja3tLSQm63eVw8vAMUpSrExHa3rchVPSMbgwmhmfzNd0lOsX1zTXPntba2d7UVz104MnI3TGYdqeJeXB9VBPcLL2eJ6SFVVpzzhQsXQvoEv1y5coW8Xq+pucTqxzxwOKUZM2YEs4tWDgVI9XnWAo2A3sNu3waCP9pU1xwRL+LtALjuvfbQniOL5yiqtgDHlVqETr6AvBDmhFMnbFnQcI48YzJ5x+6wrGhQUdHYihc+Az6WRNs/xerHfDhSYDGFAuTQxCeYdT9ugzskkn/89br33rXIiDYtaO4ALT+7zfp0dLz6zCANbjfarGjQ/Pnz6fDhw6YrUH19vcEqIq+qqqKSkhJiBx+eWHM4YmAx5Yb4oE1177Vd6NZq5b7MVfGAY2UwLM8ng+kQYgh+NS3zRDZu3Bhxwq+rq6Ply5eb9uFKXukaGhp0kIKJGLj169cHV8Usw4IG4HftSW1tbYuwJ/nAGI1NxOoZjPcyp0+fJl66KysrqbS01GATM+ePwP36+vp0sBggXu6tJtC2Wae2yjUKHVYEB1YQD5ZpfUzeJI7nK6KwsrN6V4iJpXJkfA0f/A5fUuop3p2t0c/OHPJ+ZBtAPDGsOvuNCfKG7wYAaZ+tACEw9hQ0ifdVeuKd8gRO/8NOvd1WgHBv3g6QAueGCQ7QS/zxbAWIB4Rz/gXnnPhkzivTREvQ8gv4kK+yXLYDBC3agcFPGKBcvXqV76eM1wmRA6BHsdHUFxTbAWIEEGZdhxVC90UMDoM0URLAaYLvecOQJy0AQYvaEOp4xRCCzWyC+KM+7MIfMeTiPC0A8cBz5szZBpDe4TInPp2nedkfhvbch136eb9E/r+27aSDBw0uI+L3ITRoIddBQCouLo7ntz/BrBIuY9whmPxX8UOGf4QzSZsGGYLMnTt3EXySHk7BcUSPHtqpSQDHjedeM3BYxrQDBOHUmpqaL+bm5j6LGBF8tqqDZDXqZwCdaI7xn4NTPhCtf9oBMgSDT/ohQFqKWLUeY+VQK/uleG8xDH5Wc3yQebFo0+6DwoWDmckdHR3Pjo6OPoxwRRa+sB7cB3ipukM7gxDKtHA5jPcJB5AhGICScHvxU8SCHoNPyocT1YHiMEm0UKvRN94cWjsVi8M5s34TFqBgYU+dOlUDoL4LjVqDQP10aJXMQPHVEUcPGbzgxH4N73whxv/4+x88WwH4bchNE/o3wA/tMWu8IQAKFhwTFSdPnpwNrZqD+pnwITehLgtgHcNq+DEAO4/nBALz/UY/7oNb2QeR/wp1k416IwegL+AHnU8Y78H5DQdQsPDxlnF9PQmr4y/RbxvACla7ZvihJWb8PlcAGQDghpU3pi8BJMPshgFQ4LrLoPtc56xBAGrbuXPnziA39T8M0P8B3wL2uMi9tq0AAAAASUVORK5CYII="
            >
            <h4>8%微信爆文转化</h4>
            <p>
              免费提供产品文案
              <br>专业内容包装高于业界转化率
              <br>最高达8%
            </p>
          </div>
          <div class="top_one">
            <img
              src="data:image/png;base64,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"
            >
            <h4>有赞优质分销商</h4>
            <p>
              完善的一站式分销服务解
              <br>决方案，轻松找到目标消费者购买
              <br>转化率、流量高于业界水平
            </p>
          </div>
          <div class="top_one">
            <img
              src="data:image/png;base64,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"
            >
            <h4>品牌曝光</h4>
            <p>全媒体平台资源提升品牌曝光度</p>
          </div>
        </div>
      </div>
      <!-- ---------------------------------------- -->
      <div class="bottom">
        <div class="top_cen">
          <img src="../../assets/top_cen.png">
          <h1>招募供货商</h1>
          <h2>R e c r u i t&nbsp;&nbsp; S u p p l i e r s</h2>
          <h3>好产品轻松找到目标消费者</h3>
          <div class="btn">点击申请</div>
        </div>
        <div class="top_four">
          <div class="top_one">
            <img
              src="data:image/png;base64,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"
            >
            <h4>1亿+精准消费流量</h4>
            <p>
              覆盖主流自媒体渠道
              <br>轻松找到目标消费者
              <br>全程无忧完成销售%
            </p>
          </div>
          <div class="top_one">
            <img
              src="data:image/png;base64,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"
            >
            <h4>8%微信爆文转化</h4>
            <p>
              免费提供产品文案
              <br>专业内容包装高于业界转化率
              <br>最高达8%
            </p>
          </div>
          <div class="top_one">
            <img
              src="data:image/png;base64,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"
            >
            <h4>有赞优质分销商</h4>
            <p>
              完善的一站式分销服务解
              <br>决方案，轻松找到目标消费者购买
              <br>转化率、流量高于业界水平
            </p>
          </div>
          <div class="top_one">
            <img
              src="data:image/png;base64,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"
            >
            <h4>品牌曝光</h4>
            <p>全媒体平台资源提升品牌曝光度</p>
          </div>
        </div>
      </div>
    </div>
    <!-- --------最后----------------- -->
    <div class="classics">
      <div class="case_top">
        <img src="../../assets/queen.png">
        <h1>经典案例</h1>
        <p>C l a s s i c&nbsp; &nbsp;C a s e</p>
      </div>
      <div class="banner">
        <div class="banner_img">
          <img src="http://cdn.jiguo.com/static@2.0/v1.0.0/img/凯驰.8c2390b.jpg">
          <p>与德国凯驰达成独家战略合作</p>
        </div>
        <div class="banner_img">
          <img src="http://cdn.jiguo.com/static@2.0/v1.0.0/img/凯驰.8c2390b.jpg">
          <p>与德国凯驰达成独家战略合作</p>
        </div>
        <div class="banner_img">
          <img src="http://cdn.jiguo.com/static@2.0/v1.0.0/img/凯驰.8c2390b.jpg">
          <p>与德国凯驰达成独家战略合作</p>
        </div>
        <div class="banner_img">
          <img src="http://cdn.jiguo.com/static@2.0/v1.0.0/img/凯驰.8c2390b.jpg">
          <p>与德国凯驰达成独家战略合作</p>
        </div>
      </div>
    </div>
    <!-- ----------------------- -->
    <div class="code">
      <div code_jiguo>
        <img src="http://cdn.jiguo.com/static@2.0/v1.0.0/img/icon-12.80203fc.jpg">
        <p>极果优品服务号：jgypgw</p>
      </div>
      <div code_jiguo>
        <img src="http://cdn.jiguo.com/static@2.0/v1.0.0/img/erweima2.471466f.jpeg">
        <p>合作勾搭微信：jgypfx7</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped lang="scss">
.back_img {
  background-image: url(http://cdn.jiguo.com/static@2.0/v1.0.0/img/header-bg.875d84f.jpg);
  background-size: auto 6.1rem;
  background-repeat: no-repeat;
  width: 100%;
  height: 6.1rem;

  background-position: 0px 0px;
}
.imga {
  width: 3.22rem;
  height: 0.86rem;
  padding-top: 2.2rem;
  margin: auto;
}
.imga img {
  width: 100%;
  z-index: 900;
  text-align: center;
}
._text {
  margin-top: 80px;
  height: 48px;
  width: 192px;
  font-size: 11px;
  color: #fff;
  text-align: center;
  margin-left: 86px;
}
.search {
  width: 177px;
  height: 31.5px;
  background: #fff;
  border-radius: 15.75px;
  margin-left: 107px;
  margin-top: 15px;
  display: flex;
  text-align: center;
  line-height: 31.5px;
  transform: scale(0.7);
  font-size: 5px;
}
.search img {
  width: 14px;
  height: 14px;
  margin-top: 9px;
  margin-left: 20px;
  margin-right: 2px;
}
.top {
  background: #fff;
  width: 100%;
  height: 535.5px;
}
.bottom {
  background: #f0f0f0;
  width: 100%;
  height: 535.5px;
}

.top_cen {
  text-align: center;
  width: 100%;
  height: 131.5px;
  text-align: center;
  padding-top: 37.5px;
}
.top_cen img {
  width: 20px;
  height: 21px;
  margin-left: 186px;
  margin-bottom: 5px;
}
.top_cen h2 {
  width: 165px;
  height: 14px;
  background: #bebebe;
  border-radius: 14px;
  font-size: 12px;
  transform: scale(0.7);
  color: #fff;
  margin-left: 112px;
}
.top_cen h3 {
  font-size: 14px;
  font-weight: normal;
  transform: scale(0.7);
}
.btn {
  background: #f86036;
  height: 25px;
  width: 95px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 25px;
  border-radius: 2px;
  margin-top: 15px;
  box-shadow: 0 2px 4px 0 #f66039;
  margin-left: 146px;
}
.top_four {
  width: 100%;
  height: 329px;
  margin-bottom: 37.5px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 37.5px;
}
.top_one {
  width: 50%;
  height: 134.5px;
  text-align: center;
  margin-top: 30px;
}
.top_one img {
  height: 35px;
  margin-left: 75px;
}
.top_one h4 {
  margin-top: 15px;
  font-size: 14px;
  color: #000;
  font-weight: normal;
}
.top_one p {
  font-size: 14px;
  color: gray;
  transform: scale(0.7);
  font-style: normal;
  margin-top: 7.5px;
  width: 210px;
  margin-left: -7px;
}
// ------------------------------------------------
.classics {
  width: 100%;
  position: relative;
}
.case_top {
  width: 300px;
  height: 72.5px;
  margin: auto;
  margin-top: 37.5px;
  text-align: center;
  margin-bottom: 20px;
}
.case_top img {
  width: 16px;
  height: 21px;
  margin-left: 143px;
}
.case_top p {
  width: 140px;
  height: 14px;
  background: #bebebe;
  border-radius: 14px;
  font-size: 12px;
  transform: scale(0.7);
  color: #fff;
  margin-left: 80px;
}
.banner {
  width: 100%;
}
.banner_img {
  width: 300px;
  height: 150px;
  position: relative;
  margin: auto;
  background: rgba(0, 0, 0, 0.6);
  margin-top: 5px;
}
.banner_img img {
  width: 100%;
  height: 100%;
  z-index: -10;
  position: absolute;
}
.banner_img p {
  padding-top: 130px;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
.code{
  width:375px;
  height:221px;
  background: #f0f0f0;
  padding-top:37.5px;
  padding-bottom:37.5px;
  margin-top: 37.5px;
  display: flex;
  
}
.code img{
  width:120px;
  height: 120px;
  margin-left:42px;
}
.code p{
  margin-top:5px;
  padding-left:37px;
}
</style>
