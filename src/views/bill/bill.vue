<template>
    <div class="content">
        <ul v-for="(item,index) in Bill">
            <p class="title_p">{{item.title}}</p>
            <li>
                <img :src=" 'https://s2.jiguo.com/'+item.cover">
                <div class="bottom">
                    <div>{{item.addtime}} · {{item.format.bottom_left}}</div>
                    <div>
                        <p>
                            <span class="icon"></span>
                            <span>{{item.praise}}</span>
                        </p>
                        <p>
                            <span class="icon"></span>
                            <span>{{item.reply}}</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    export default {
        created() {
            this.getBillActions()
        },
        methods: {
            ...Vuex.mapActions({
                getBillActions:"Bill/getBillActions"
            })
        },
        computed: {
            ...Vuex.mapState({
                Bill: state => state.Bill.Bill[0],
            })
        }
    }
</script>

<style scoped lang="scss">
    .content{
        z-index: 1;
        ul{
            border-bottom: solid 1px #e3e3e3;
        }
        .title_p{
            display: block;
            padding: 0 0.2rem;
            margin-top: 0.2rem;
            font-size: 0.28rem;
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        li{
            position: relative;
            padding: 0 0.2rem;
            margin: 0.2rem 0;
            img{
                width: 100%;
                border-radius: 0.2rem;
            }
            .bottom{
                position: absolute;
                display: flex;
                width:94.5%;
                bottom: 0;
                justify-content: space-between;
                align-items: flex-end;
                color: #cccccc;
                padding: 0 0.3rem;
                border-radius: 0 0 0.2rem 0.2rem;
                padding-bottom: 0.25rem;
                height: 40%;
                background: linear-gradient(180deg,hsla(0,0%,100%,.02),rgba(35,35,35,.69));
                div:nth-of-type(2){
                    display: flex;
                    .icon{
                        width: 0.4rem;
                        height: 0.32rem;
                        margin-right:0.1rem;
                        background-image: url(../../assets/icon.png);
                        background-size: 3rem auto;
                        background-repeat: no-repeat;
                        background-position: -1.7rem -2.12rem;
                    }
                    p:nth-of-type(1){
                        margin-right: 0.3rem;
                        .icon{
                            background-position: -0.95rem -1.75rem;
                        }
                    }
                    p{
                        display: flex;
                        align-items: center;
                        span{
                            display: block;
                        }
                    }
                }
            }
        }
    }
</style>

