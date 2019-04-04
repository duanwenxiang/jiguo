import {
    getBill
} from "@/api/api"

export default {
    namespaced: true,
    state: {
        Bill: []
    },
    mutations: {
        getBillMutations(state, params) {
            state.Bill.push(params.getBillMsMutations2)
        }
    },
    actions: {
        async getBillActions({commit}) {
            let getBillMs = await getBill();
            commit("getBillMutations", {
                getBillMsMutations1: getBillMs.limit,
                getBillMsMutations2: getBillMs.result
            })
        },
    },
}