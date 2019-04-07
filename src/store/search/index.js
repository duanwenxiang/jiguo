import {
    getsearch
} from "@/api/api"

export default {
    namespaced: true,
    state: {
        searchGoodsTryout: [],
        searchGoodsBook: []
    },
    mutations: {
        getSearchMutations(state, params) {
            state.searchGoodsTryout.push(params.getSearchMutationsTryout),
            state.searchGoodsBook.push(params.getSearchMutationsBook)
        }
    },
    actions: {
        async getSearchActions({commit}) {
            let getSearchMs = await getsearch();
            commit("getSearchMutations", {
                getSearchMutationsTryout: getSearchMs.result.event,
                getSearchMutationsBook: getSearchMs.result.blog,
            })
        },
    },
}