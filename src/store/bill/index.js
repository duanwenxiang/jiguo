import {
    getBill
} from "@/api/api"

import axios from "axios";
export default {
    namespaced: true,
    state: {
        limit:"",
        Bill: []
    },
    mutations: {
        getBillMutations(state, params) {
            state.Bill.push(params.getBillMsMutations2)
            state.limit = params.getLimit;
        },
        getLoadBottomMutations(state,params){
            state.limit = params.getLoadBottomLimit
            var Bill = params.getLoadBottomMs.splice(0,10);
            for(var i = 0;i < Bill.length; i++){
                state.Bill[0].push(Bill[i])
            }
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
        getLoadBottomActions({commit}){
            axios({
                method:"get",
                dataType: 'jsonp',
                url:'http://localhost:8080/api/article/GetArticleList?type=2&limit='+this.state.Bill.limit+'&size=10',
            }).then((data)=>{
                commit("getLoadBottomMutations",{getLoadBottomMs:data.data.result,getLoadBottomLimit:data.data.limit})
            })
        }
    }
}