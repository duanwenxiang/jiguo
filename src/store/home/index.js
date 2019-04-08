<<<<<<< HEAD
import {getSwiperImg,
        getInfo,
        getGoods
} from "@/api/api"
import axios from "axios";

export default {
    namespaced:true,
    state: {
        SwiperImg:[],
        SwiperInfo:[],
        goodsInfo:[],
        limit:"",
        
    },
    mutations: {
        getSwiperImgMutations(state,params){
            state.SwiperImg.push(params.SwiperImgMs);
            state.SwiperInfo.push(params.SwiperInfoMs)
            state.goodsInfo.push(params.getGoodsActionsMs)
            state.limit = params.getLimit;
        },
        getLoadBottomMutations(state,params){
            state.limit = params.getLoadBottomLimit
            var goodsInfo = params.getLoadBottomMs.splice(0,10);
            for(var i = 0;i < goodsInfo.length; i++){
                state.goodsInfo[0].push(goodsInfo[i])
            }
        }
    },
    actions: {
        async getSwiperImgActions({commit}){
            console.log()
            let SwiperImg = await getSwiperImg();
            let SwiperInfo = await getInfo();
            let getGoodsActions = await getGoods()
            commit("getSwiperImgMutations",{SwiperImgMs:SwiperImg.result,SwiperInfoMs:SwiperInfo.result,getGoodsActionsMs:getGoodsActions.result,getLimit:getGoodsActions.limit});
        },
        getLoadBottomActions({commit}){
            axios({
                method:"get",
                dataType: 'jsonp',
                url:'http://localhost:8080/api/article/GetArticleList?sys=mb&limit='+this.state.Home.limit+'&size=10',
            }).then((data)=>{
                commit("getLoadBottomMutations",{getLoadBottomMs:data.data.result,getLoadBottomLimit:data.data.limit})
            })
        }
    },
}
=======
export default({
    state: {

    },
    mutations: {

    },
    actions: {

    }
})
>>>>>>> 0c64688e0c70cb500641021174b40326cffa1ca2
