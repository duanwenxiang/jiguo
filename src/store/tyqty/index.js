import {
    getTyqty
} from "@/api/api"

import axios from "axios";
export default {
    namespaced: true,
    state: {
        limit:"",
        Tyqty: []
    },
    mutations: {
        getTyqtyMutations(state, params) {
            state.Tyqty.push(params.getTyqtyMsMutations2)
            state.limit = params.getLimit;
        },
        getLoadBottomMutations(state,params){
            state.limit = params.getLoadBottomLimit
            var Tyqty = params.getLoadBottomMs.splice(0,10);
            for(var i = 0;i < Tyqty.length; i++){
                state.Tyqty[0].push(Tyqty[i])
            }
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
        getLoadBottomActions({commit}){
            axios({
                method:"get",
                dataType: 'jsonp',
                url:'http://localhost:8080/api/article/GetBlogLists?blog_type=9&limit='+this.state.Tyqty.limit+'&size=10',
            }).then((data)=>{
                commit("getLoadBottomMutations",{getLoadBottomMs:data.data.result,getLoadBottomLimit:data.data.limit})
            })
        }
    }
}