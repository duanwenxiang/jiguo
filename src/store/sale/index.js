import {
    getSale
} from "@/api/api"

import axios from "axios";
export default {
    namespaced: true,
    state: {
        limit:"",
        Sale: []
    },
    mutations: {
        getSaleMutations(state, params) {
            state.Sale.push(params.getSaleMsMutations2)
            state.limit = params.getLimit;
        },
        getLoadBottomMutations(state,params){
            state.limit = params.getLoadBottomLimit
            var Sale = params.getLoadBottomMs.splice(0,10);
            for(var i = 0;i < Sale.length; i++){
                state.Sale[0].push(Sale[i])
            }
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
        getLoadBottomActions({commit}){
            axios({
                method:"get",
                dataType: 'jsonp',
                url:'http://localhost:8080/api/article/GetArticleList?type=2&limit='+this.state.Sale.limit+'&size=10',
            }).then((data)=>{
                commit("getLoadBottomMutations",{getLoadBottomMs:data.data.result,getLoadBottomLimit:data.data.limit})
            })
        }
    }
}