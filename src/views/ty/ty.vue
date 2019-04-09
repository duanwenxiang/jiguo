<template>
    <div id="app">
        <Tyy @toggle="togglepage"></Tyy>

        <component :is="comName"></component>
    </div>
</template>

<script>
    import Tyy from './tyy.vue'
    import Tyall from './tyall.vue'
    import Tyty from './tyty.vue'
    import Tyqty from './tyqty.vue'
    export default {
        name: 'app',
        data(){
            return{
                comName:"tyall"
            }
        },
        components: {
            Tyy,Tyall,Tyty,Tyqty
        },
        methods:{
            togglepage(n){
                switch(n){
                    case 1:
                        this.comName="tyall";
                        break;
                    case 2:
                        this.comName="tyty";
                        break;
                    case 3:
                        this.comName="tyqty";
                        break;
                }
            }
        }
    }
</script>


<style scoped lang="scss">

</style>
