<template>
    <div id="sales">
        <!--<Saledetail></Saledetail>-->
        <router-link tag="ul" to="/sale/saledetail">
            <router-view></router-view>
                <li id="shangpin" v-for="(item,index) in Sale" >
                <div class="image">
                    <img :src="'https://s2.jiguo.com/'+item.cover+'/640?imageView2/1/w/230/h/230/q/100'">
                </div>
                <div id="xinxi">
                    <div id="spname" >{{item.title}}</div>
                    <div id="spprice">
                        <span>{{item.format.middle_left}}</span>
                        <!--<span>{{item.pricee}}</span>-->
                    </div>
                    <div id="spwhere">
                        <span>{{item.format.bottom_left}}</span>
                        <span>{{item.addtime}}</span>
                    </div>
                </div>
            </li>
        </router-link>
    </div>
</template>

<script>
    import Saledetail from "./saledetail.vue"
    import Vuex from 'vuex'
    export default {
        created() {
            this.getSaleActions()
        },
        methods: {
            ...Vuex.mapActions({
                getSaleActions:"Sale/getSaleActions"
            })
        },
        computed: {
            ...Vuex.mapState({
                Sale: state => state.Sale.Sale[0],
            })
        }
    }
</script>

<style lang="scss" scoped>
    *{
        padding: 0;
        margin: 0;
    }
    #sales{
        overflow: auto;
    }
    #shangpin{
        width: 100%;
        height: 2.28rem;
        padding: .3rem;
    }
    .image{
        width: 1.8rem;
        height: 1.8rem;
        float: left;
    }
    .image>img{
        width: 1.8rem;
        height: 1.8rem;
    }
    #xinxi{
        width: 4.9rem;
        height: 1.8rem;
        float: left;
        display: flex;
        flex-direction: column;
        margin-left: .2rem;
        justify-content: space-around;
    }
    #spname{
        width: 100%;
        height: .8rem;
        font-size: .28rem;
        color: #595959;
        line-height: .4rem;
        overflow: hidden;
    }
    #spprice{
        width: 100%;
        height: .36rem;
        color: #fb3f3d;
        font-size: .36rem;
    }
    #spprice>span{
        float: left;
    }
    #spwhere{
        width: 100%;
        height: .27rem;
        font-size: .27rem;
        display: flex;
        justify-content: space-between;
    }
    #spwhere>span{
        float: left;
        color: #a3a3a3;
    }
</style>

