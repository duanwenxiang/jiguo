import {
    getTyty
} from "@/api/api"

export default {
    namespaced: true,
    state: {
        Tyty: []
    },
    mutations: {
        getTytyMutations(state, params) {
            state.Tyty.push(params.getTytyMsMutations2)
        }
    },
    actions: {
        async getTytyActions({commit}) {
            let getTytyMs = await getTyty();
            commit("getTytyMutations", {
                getTytyMsMutations1: getTytyMs.limit,
                getTytyMsMutations2: getTytyMs.result
            })
        },
    },
}