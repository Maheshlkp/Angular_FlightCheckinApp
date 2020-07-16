var dbcon = require("../config/db_connection");

var connection =dbcon.getConnection();

connection.connect();

var express = require("express");

var router = express.Router();

router.get("/",(req,res)=>{
    connection.query("select * from product",(err,records,fields)=>{
        if(err){
            console.error("error while fetching data");
        }else{
            res.send(records);
        }
    })
})

router.get("/:id",(req,res)=>{
    connection.query("select * from product where id="+req.params.id,(err,records,fields)=>{
        if(err){
            console.error("error while fetching data");
        }else{
            res.send(records);
        }
    })
})

router.post("/",(req,res)=>{
    var id = req.params.id;
    var name = req.params.name;
    var description = req.params.description;
    var price = req.params.price;

    connection.query("insert into product values("+id+",'"+name+"','"+description+"',"+price+")",(err,result)=>{
        if(err){
            console.error("error while inserting data"+err);
        }else{
            res.send({insert:"success"});
        }
    })
})

router.put("/",(req,res)=>{
    var id = req.params.id;
    var name = req.params.name;
    var description = req.params.description;
    var price = req.params.price;

    connection.query("update product set name='"+name+"',"+price+" where id="+id,(err,result)=>{
        if(err){
            console.error("error while updating data"+err);
        }else{
            res.send({update:"success"});
        }
    })
})

router.delete("/:id",(req,res)=>{
    connection.query("delete from product where id="+req.params.id,(err,records,fields)=>{
        if(err){
            console.error("error while deleting data");
        }else{
            res.send({delete:"deleted successfully"});
        }
    })
})

module.exports = router;