import {
    getTyall
} from "@/api/api"

import axios from "axios";
export default {
    namespaced: true,
    state: {
        limit:"",
        Tyall: []
    },
    mutations: {
        getTyallMutations(state, params) {
            state.Tyall.push(params.getTyallMsMutations2)
            state.limit = params.getLimit;
        },
        getLoadBottomMutations(state,params){
            state.limit = params.getLoadBottomLimit
            var Tyall = params.getLoadBottomMs.splice(0,10);
            for(var i = 0;i < Tyall.length; i++){
                state.Tyall[0].push(Tyall[i])
            }
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
        getLoadBottomActions({commit}){
            axios({
                method:"get",
                dataType: 'jsonp',
                url:'http://localhost:8080/api/article/GetBlogLists?blog_type=&limit='+this.state.Tyall.limit+'&size=10',
            }).then((data)=>{
                commit("getLoadBottomMutations",{getLoadBottomMs:data.data.result,getLoadBottomLimit:data.data.limit})
            })
        }
    }
}