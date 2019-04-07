import http from "../utils/http"



export const getSwiperImg = ()=>  http("get","/api/event/GetMbBannerList")
export const getInfo = ()=> http("get","/api/event/getBulletins")
export const getGoods = ()=> http("get","/api/article/GetArticleList?sys=mb&limit=&size=10")
export const getTryoytGoods = ()=> http("get","/api/event/mbevent?sys=mb&limit=&size=10")
export const getNewGoods = ()=> http("get","/api/article/GetArticleList?type=4&limit=&size=10")
export const getsearch = ()=> http("get","/api/search/index?keyword=")