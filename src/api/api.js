import http from "../utils/http"



export const getSwiperImg = ()=>  http("get","/api/event/GetMbBannerList")
export const getInfo = ()=> http("get","/api/event/getBulletins")