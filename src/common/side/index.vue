<template>
    <transition enter-active-class="fadeInLeft animated" leave-active-class="fadeOutLeft animated">
        <ul class="side" v-show="toggle">
            <router-link v-for="(item,index) in side"  tag="li" :to=item.to>
                <p class="icon" :style="item.bg"></p>
                <p>{{item.sideName}}</p>
            </router-link>
        </ul>
    </transition>
</template>

<script>
export default{
    
    data() {
        return {
            side:[
                {   
                    sideName:"首页",
                    to:'/home',
                    bg:"background-position: 0.1rem -0.5rem",
                },
                {   
                    sideName:"试用",
                    to:'/tryout',
                    bg:"background-position: -0.5rem -0.5rem",
                },
                {   
                    sideName:"新品",
                    to:'/newgoods',
                    bg:"background-position: -1.15rem -0.5rem",
                },                
                {   
                    sideName:"折扣",
                    to:'/sale',
                    bg:"background-position: -1.75rem -0.5rem",
                },
                {   
                    sideName:"清单",
                    to:'/home',
                    bg:"background-position: -2.35rem -0.5rem",
                },                
                {   
                    sideName:"体验",
                    to:'/home',
                    bg:"background-position: -2.9rem -0.5rem",
                },
                {   
                    sideName:"体验师",
                    to:'/tys',
                    bg:"background-position: -0.55rem -5.43rem",
                },
                {   
                    sideName:"优品",
                    to:'/youpin',
                    bg:"background-position:0 0.1rem",
                },                
                {   
                    sideName:"商城",
                    to:'/shop',
                    bg:"background-position:-3.5rem -0.5rem",
                },
                {
                    sideName:"联系",
                    to:'/connect',
                    bg:"background-position: -4.15rem -0.5rem",
                },
            ],
            toggle:"",
        }
    },
    created(){
        this.Observer.$on("handleToggle",(val)=>{
            this.toggle = val;
        }),        
        this.Observer.$on("handleToggleShade",(val)=>{
            this.toggle = val;
        })
    },
}
</script>


<style scoped lang="scss">
    .side{
        position: fixed;
        width:3.7rem;
        background: #fff;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 5;
        li{
            display: flex;
            height: 1rem;
            font-size: 0.3rem;
            color: #cfcfcf;
            align-items: center;
            padding-left: 1rem;
            border-bottom: solid #cfcfcf 1px;
            .icon{
                width: 0.5rem;
                height: 0.5rem;
                background-image: url(../../assets/icon.png);
                background-size: 5rem auto;
                background-repeat: no-repeat;
            }
        }
        li:nth-of-type(8){
            .icon{
                background-image: url(../../assets/yp.png);
                background-size:0.35rem auto;
            }
        }
        .router-link-active{
            color: #cc4433;
            background-position: 0.1rem -1rem!important;
        }
    }
    .animated{
        animation-duration: 0.5s;
    }
</style>