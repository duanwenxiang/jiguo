import http from "../utils/http"



export const getSwiperImg = ()=>  http("get","/api/event/GetMbBannerList")
export const getInfo = ()=> http("get","/api/event/getBulletins")
export const getSale = ()=> http("get","/api/article/GetArticleList?type=2&limit=&size=10")
export const getBill = ()=> http("get","/api/article/GetArticleList?type=3&limit=&size=10")




