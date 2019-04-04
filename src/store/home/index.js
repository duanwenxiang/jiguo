import {getSwiperImg,
        getInfo,
        getGoods
} from "@/api/api"

export default {
    namespaced:true,
    state: {
        SwiperImg:[],
        SwiperInfo:[],
        goodsInfo:[],
    },
    mutations: {
        getSwiperImgMutations(state,params){
            state.SwiperImg.push(params.SwiperImgMs);
            state.SwiperInfo.push(params.SwiperInfoMs)
            state.goodsInfo.push(params.getGoodsActionsMs)
        }
    },
    actions: {
        async getSwiperImgActions({commit}){
            let SwiperImg = await getSwiperImg();
            let SwiperInfo = await getInfo();
            let getGoodsActions = await getGoods()
            commit("getSwiperImgMutations",{SwiperImgMs:SwiperImg.result,SwiperInfoMs:SwiperInfo.result,getGoodsActionsMs:getGoodsActions.result});
        },
    },
}