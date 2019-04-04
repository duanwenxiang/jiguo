import {
    getTryoytGoods
} from "@/api/api"

export default {
    namespaced: true,
    state: {
        tryoutGoods: []
    },
    mutations: {
        getTryoytGoodsMutations(state, params) {
            state.tryoutGoods.push(params.getTryoytGoodsMutations2)
        }
    },
    actions: {
        async getTryoytGoodsActions({commit}) {
            let getTryoytGoodsMs = await getTryoytGoods();
            commit("getTryoytGoodsMutations", {
                getTryoytGoodsMutations1: getTryoytGoodsMs.limit,
                getTryoytGoodsMutations2: getTryoytGoodsMs.result
            })
        },
    },
}