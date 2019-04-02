<template>
  <div class="content">
    <h1>homedadadada</h1>
  </div>
</template>

<script>

import {getSwiperImg,getInfo} from "@/api/api"

export default {
  async created(){
    let data = await getSwiperImg();
    let da = await getInfo();
    console.log(data,da)
  }
}
</script>


<style scoped lang="scss">

</style>
