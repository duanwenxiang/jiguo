import http from "../utils/http"



export const getSwiperImg = ()=>  http("get","/api/event/GetMbBannerList")
export const getInfo = ()=> http("get","/api/event/getBulletins")
export const getSale = ()=> http("get","/api/article/GetArticleList?type=2&limit=&size=10")
export const getBill = ()=> http("get","/api/article/GetArticleList?type=3&limit=&size=10")
export const getTyall= ()=> http("get","/api/article/GetBlogLists?blog_type=&limit=&size=10")
export const getTyty= ()=> http("get","/api/article/GetBlogLists?blog_type=4&limit=&size=10")
export const getTyqty= ()=> http("get","/api/article/GetBlogLists?blog_type=9&limit=&size=10")



