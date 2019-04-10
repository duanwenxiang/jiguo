// import bill from '../../views/bill'

export default {
    path:"/bill",
    name:"bill",
    component:()=>import("../../views/bill"),
    meta:{
        title:"清单-极果"
    }
}