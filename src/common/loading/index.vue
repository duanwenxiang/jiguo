<template>
    <div class="loading">
        <img src="https://cdn.jiguo.com/static@2.0/v1.0.0/img/page_loading.80b14bd.svg">
    </div>
</template>

<script>

export default{

}
</script>


<style scoped lang="scss">
    .loading{
        background: #fcfcfc;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 6;
        width: 100%;
        height: 100%;
        img{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            z-index: 7;
        }
    }
</style>