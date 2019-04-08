import {
    getTyqty
} from "@/api/api"

export default {
    namespaced: true,
    state: {
        Tyqty: []
    },
    mutations: {
        getTyqtyMutations(state, params) {
            state.Tyqty.push(params.getTyqtyMsMutations2)
        }
    },
    actions: {
        async getTyqtyActions({commit}) {
            let getTyqtyMs = await getTyqty();
            commit("getTyqtyMutations", {
                getTyqtyMsMutations1: getTyqtyMs.limit,
                getTyqtyMsMutations2: getTyqtyMs.result
            })
        },
    },
}