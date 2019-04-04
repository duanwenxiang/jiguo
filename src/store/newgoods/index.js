import {
    getNewGoods
} from "@/api/api"

export default {
    namespaced: true,
    state: {
        newGoods: []
    },
    mutations: {
        getNewGoodsMutations(state, params) {
            state.newGoods.push(params.getNewGoodsMsMutations2)
        }
    },
    actions: {
        async getNewGoodsActions({commit}) {
            let getNewGoodsMs = await getNewGoods();
            commit("getNewGoodsMutations", {
                getNewGoodsMsMutations1: getNewGoodsMs.limit,
                getNewGoodsMsMutations2: getNewGoodsMs.result
            })
        },
    },
}