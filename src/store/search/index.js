import {
    getsearch
} from "@/api/api"
import axios from "axios";

export default {
    namespaced: true,
    state: {
        searchGoodsTryout: [],
        searchGoodsBook: [],
        searchTryout: [],
        searchBlog: [],
    },
    mutations: {
        getSearchMutations(state, params) {
            state.searchGoodsTryout.push(params.getSearchMutationsTryout),
            state.searchGoodsBook.push(params.getSearchMutationsBook)
        },
        searchValMutations(state,params){
            let a  = params.searchValActionsEvent;
            state.searchTryout = a;
            state.searchBlog = params.searchValActionsBlog;
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
        searchValActions({commit},val){
            axios({
                method:"get",
                url:"http://localhost:8080/api/search/index?keyword=" + val,
            }).then((data)=>{
                commit("searchValMutations",{searchValActionsEvent:data.data.result.event,searchValActionsBlog:data.data.result.blog})
            })
        }
    },
}