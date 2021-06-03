 // 配置跨域
module.exports = {
    devServer:{
        open:true,
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://student.carrots.admin.xiuzhenyuan.cn',
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                  '^/api': ''  // rewrite path
                }
            },
           
        }
        


    }
}