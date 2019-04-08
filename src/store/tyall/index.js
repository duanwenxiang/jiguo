import {
    getTyall
} from "@/api/api"

export default {
    namespaced: true,
    state: {
        Tyall: []
    },
    mutations: {
        getTyallMutations(state, params) {
            state.Tyall.push(params.getTyallMsMutations2)
        }
    },
    actions: {
        async getTyallActions({commit}) {
            let getTyallMs = await getTyall();
            commit("getTyallMutations", {
                getTyallMsMutations1: getTyallMs.limit,
                getTyallMsMutations2: getTyallMs.result
            })
        },
    },
}