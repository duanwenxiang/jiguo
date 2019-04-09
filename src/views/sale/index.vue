<template>
    <div id="sales">
        <Header/>
        <mt-loadmore
            :bottom-method="loadBottom"
            :auto-fill="false"
            ref="loadmore"
        >
            <Sale></Sale>
        </mt-loadmore>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    import Sale from './sale.vue'
    export default {
        name:"sale",
        components:{
            Sale
        },
        data() {
            return {
                limit:"",
            }
        },
        methods: {
            ...Vuex.mapActions({
                getLoadBottomActions: "Sale/getLoadBottomActions",
            }),
            loadBottom(){
                this.$refs.loadmore.onBottomLoaded();
                this.getLoadBottomActions();
            },
        },
    }
</script>

<style lang="scss">

</style>

