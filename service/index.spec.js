const app = require("./index");
const supertest = require("supertest");

function request(){
    return supertest( app.listen())
}

describe("node 服务 Service自动化测试脚本" , function(){
    it("获取首页服务数据",function( done ){
        request()
        .get("/")
        // .set("Accept","application/json")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err , res ){
            if(err){
                done(err);
            }
            if(res.body.data ==="京程一灯"){
                done();
            }else{
                done( new Error("接口数据格式不正确"))
            }
        })
    })
})