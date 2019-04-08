import http from "../utils/http"



export const getSwiperImg = ()=>  http("get","/api/event/GetMbBannerList")
export const getInfo = ()=> http("get","/api/event/getBulletins")
export const getTys  = ()=> http("get","/api/article/GetBestArticle?limit=0&size=5&sys=mb")