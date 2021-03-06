var express=require('express');
var cors=require('cors');
var mysql=require('mysql');
var app=express();

app.use(cors());

var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'satya',
        password:'satya',
        database:'empDB'
    }
);

connection.connect(function(error)
{
    if(error)
    {
        console.log("Error occured");
    }
    else{
        console.log("Successfully database connected....");
    }
});

app.get("/api/data",function(req,res)
{
    connection.query("select * from emp",function(error,rows,fields)
    {
        if(error)
        {
            res.send("ERROR OCCURED in query");
        }
        else{
            res.send(JSON.stringify(rows));
            res.end(JSON.stringify(rows));

            // var id=logs[0].id;
            // var name=logs[0].name;
            // var address=logs[0].address;
            // var phno=logs[0].phno; 

            // res.end(" "+id+" "+name+" "+address+" "+phno);
        }
    });
});

app.get("/api/data/:id",function(req,res)
{
    var ids=req.params.id;
    connection.query("select * from emp where id=?",[req.params.id],function(error,rows,fields)
    {
        if(error)
        {
            res.send("ERROR OCCURED in query");
        }
        else{
            res.send(JSON.stringify(rows));
            res.end(JSON.stringify(rows));
           
        }
    });
});

app.listen("1818",function(error)
{
    if(error)
    {
        console.log("Error occured");
    }
    else{
        console.log("Connected with port 1818....");
    }
});