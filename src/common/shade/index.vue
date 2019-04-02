<template>
    <div class="shade" v-show="flag" @touchstart="handleSide"></div>
</template>

<script>

export default{
    data(){
        return {
            flag:"",

        }
    },
    created(){
        this.Observer.$on("handleToggle",(val)=>{
            this.flag = val
        })
    },
    methods: {
        handleSide(){
            this.flag = this.flag? false : true;
            this.Observer.$emit("handleToggleShade",this.flag);
        }
    },
}
</script>


<style scoped lang="scss">
    .shade{

            width: 100%;
            height: 100%;
            background: black;
            opacity: .5;
            position: absolute;
            top: 0;
            left: 0;
    }
</style>