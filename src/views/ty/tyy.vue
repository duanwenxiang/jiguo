<template>
    <div id="tyy">
        <ul>
            <li @click="handleClick(1)" :class="kz==1?'active':''">
                <span>全部</span>
            </li>
            <li @click="handleClick(2)" :class="kz==2?'active':''">
                <span>体验</span>
            </li>
            <li @click="handleClick(3)" :class="kz==3?'active':''">
                <span>轻体验</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"tyy",
        data(){
            return{
                kz:1
            }
        },
        methods:{
            handleClick(n){
                this.kz=n,
                    this.$emit("toggle",n)
            }
        }
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    #tyy{
        position: fixed;
        top:1.04rem;
        left: 0;
        width: 100%;
        padding: 0 2rem;
        border-bottom: 7px solid #ececec;
        background: white;
    }
    #tyy>ul{
        width: 100%;
        height: .68rem;
        display: flex;
        justify-content: space-between;
    }
    ul>li>span{
        font-size: .28rem;
        line-height: .68rem;
        color: #999;
        display: block;
    }
    #tyy>ul>.active>span{
        color: #333;
        font-weight: bold;
        border-bottom: 1px solid #f66039;
    }
</style>
