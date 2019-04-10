<template>
    <div id="app">
        <Header/>
        <mt-loadmore
                :bottom-method="loadBottom"
                :auto-fill="false"
                ref="loadmore"
        >
            <Ty></Ty>
        </mt-loadmore>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    import Ty from './ty.vue'
    export default {
        components:{
            Ty
        },
        data() {
            return {
                limit:"",
            }
        },
        methods: {
            ...Vuex.mapActions({
                getLoadBottomActions: "Tyall/getLoadBottomActions"
//                getLoadBottomActions: "Tyqty/getLoadBottomActions",
            }),
            loadBottom(){
                this.$refs.loadmore.onBottomLoaded();
                this.getLoadBottomActions();
            },
        }
    }
</script>

<style scoped lang="scss"></style>