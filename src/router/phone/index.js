import phone from '../../views/phone'

export default{
    path:"/phone",
    name:"phone",
    component:()=>import("../../views/phone"),
    meta:{
        title:"联系我们-极果"
    }
}