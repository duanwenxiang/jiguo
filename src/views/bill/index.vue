<template>
    <div>
        <Header/>
        <mt-loadmore
                :bottom-method="loadBottom"
                :auto-fill="false"
                ref="loadmore"
        >
            <Bill></Bill>
        </mt-loadmore>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    import Bill from "./bill.vue"
    export default {
        name:"bill",
        components:{
            Bill
        },
        data() {
            return {
                limit:"",
            }
        },
        methods: {
            ...Vuex.mapActions({
                getLoadBottomActions: "Bill/getLoadBottomActions",
            }),
            loadBottom(){
                this.$refs.loadmore.onBottomLoaded();
                this.getLoadBottomActions();
            },
        }
    }
</script>


<style scoped lang="scss">

</style>
