import {
    getTys
} from "@/api/api"

export default {
    namespaced: true,
    state: {
        Tys: []
    },
    mutations: {
        getTysMutations(state, params) {
            state.Tys.push(params.getTysMsMutations2)
        }
    },
    actions: {
        async getTysActions({commit}) {
            let getTysMs = await getTys();
            commit("getTysMutations", {
                getTysMsMutations1: getTysMs.limit,
                getTysMsMutations2: getTysMs.result
            })
        },
    },
}