module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:"http://m.jiguo.com",
                changeOrigin:true,
                // pathRewrite:{
                //     "^/api":""
                // }
            }
        }
    }
}