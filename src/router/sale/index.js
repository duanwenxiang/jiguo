// import sale from '../../views/sale'

export default {
    path:"/sale",
    name:"sale",
    component:()=>import("../../views/sale"),
    meta:{
        title:"折扣-极果"
    }
}