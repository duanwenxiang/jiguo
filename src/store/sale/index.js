import {
    getSale
} from "@/api/api"

export default {
    namespaced: true,
    state: {
        Sale: []
    },
    mutations: {
        getSaleMutations(state, params) {
            state.Sale.push(params.getSaleMsMutations2)
        }
    },
    actions: {
        async getSaleActions({commit}) {
            let getSaleMs = await getSale();
            commit("getSaleMutations", {
                getSaleMsMutations1: getSaleMs.limit,
                getSaleMsMutations2: getSaleMs.result
            })
        },
    },
}