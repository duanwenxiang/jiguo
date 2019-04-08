<template>
    <div class="top">
        <div class="left" @touchstart="handleSide">
            <div></div>
        </div>
        <img src="../../assets/logo1.png">
        <div class="icon">
            <router-link class="icon_c" to="/search" tag="p"></router-link>
            <p class="icon_c"></p>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return {
            toggleVal:false,
        }
    },
    created(){
        this.Observer.$on("handleToggleShade",(val)=>{
            this.toggleVal = val;
        })
    },        
    methods: {
        handleSide(){
            this.toggleVal = this.toggleVal ? false : true;
            this.Observer.$emit("handleToggle",this.toggleVal);
        }
    },
}
</script>


<style scoped lang="scss">
    .top{
        display: flex;
        position: sticky;
        top: 0;
        z-index:100;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: #fff;
        border-bottom:1px solid #ececec;
        z-index: 2;
        img{
            width: 1.8rem;
            height: 0.7rem;
            margin: 0.15rem 0;
        }
        .icon{
            position: absolute;
            display: flex;
            right: 0.3rem;
            .icon_c{
                width: 0.5rem;
                height: 0.5rem;
                background-image: url(../../assets/icon.png);
                background-size: 5rem auto;
                background-repeat: no-repeat;
            }
            .icon_c:nth-of-type(1){
                margin-right: 0.4rem;
                background-position:-0.5rem 0.08rem;
            }
            .icon_c:nth-of-type(2){
                background-position:-1.1rem 0.07rem;
            }
        }
        .left{
            position: absolute;
            left: 0;
            width: 1rem;
            margin-left: 0.5rem;

            div{
                width: 0.5rem;
                height: 0.5rem;
                background-image: url(../../assets/icon.png);
                background-size: 5rem auto;
                background-repeat: no-repeat;
                background-position:0 0.08rem;
            }
        }
        .iconfont{
            font-size: 0.5rem;
            color: #c34;
            font-weight: 900;
        }
    }
</style>