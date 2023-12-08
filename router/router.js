const express=require("express")
const router=express.Router();
const connection=require('../db/dbconnect')
const path = require("path")
const { exec } = require('child_process');

router.get("/hello",(req,resp)=>{
    connection.query("select * from student",(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err))
        }
        else{
            resp.send(data)
        }
    })
});

router.get("/form", (req, res) => {
    const formPath = path.join(__dirname, "..", "views", "form.html");
    res.sendFile(formPath);
});

router.post("/submit", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const operator = req.body.operator;

    // Run R script to perform calculation
    const rScript = `"C:/Program Files/R/R-4.1.2/bin/Rscript.exe" ./calculate.R ${num1} ${num2} ${operator}`;
    exec(rScript, (error, stdout, stderr) => {
        if (error) {
            console.error('Error executing R script:', error);
            res.status(500).send('Error executing R script');
            return;
        }

        const result = stdout.trim();
        res.send(`Result: ${result}`);
    });
});
module.exports=router;