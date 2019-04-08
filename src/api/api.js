import http from "../utils/http"



export const getSwiperImg = ()=>  http("get","/api/event/GetMbBannerList")
<<<<<<< HEAD

export const getInfo = ()=> http("get","/api/event/getBulletins")

export const getGoods = ()=> http("get","/api/article/GetArticleList?sys=mb&limit=&size=10")

export const getTryoytGoods = ()=> http("get","/api/event/mbevent?sys=mb&limit=&size=10")

export const getNewGoods = ()=> http("get","/api/article/GetArticleList?type=4&limit=&size=10")

export const getsearch = ()=> http("get","/api/search/index?keyword=")
=======
export const getInfo = ()=> http("get","/api/event/getBulletins")
export const getSale = ()=> http("get","/api/article/GetArticleList?type=2&limit=&size=10")
export const getBill = ()=> http("get","/api/article/GetArticleList?type=3&limit=&size=10")
export const getTyall= ()=> http("get","/api/article/GetBlogLists?blog_type=&limit=&size=10")
export const getTyty= ()=> http("get","/api/article/GetBlogLists?blog_type=4&limit=&size=10")
export const getTyqty= ()=> http("get","/api/article/GetBlogLists?blog_type=9&limit=&size=10")



>>>>>>> 0c64688e0c70cb500641021174b40326cffa1ca2
