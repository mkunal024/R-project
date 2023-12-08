const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const router=require('./router/router')
const path = require("path")

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(express.static(path.join(__dirname, "public")));

app.use("/",router)

app.listen(3003,function(){
    console.log("server is runnig at port 3003")
})
