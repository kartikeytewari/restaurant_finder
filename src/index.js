const express=require("express");
const app=express();
const body_parser=require("body-parser");
const moment=require("moment")
var mysql = require('mysql');

// configure app
app.use(body_parser.urlencoded({ extended: true }));

app.get("/",function(req,res)
{
    console.log("Home Page")
});

var mysql_connection = mysql.createConnection
({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "restaurant_finder"
});

mysql_connection.connect(function(err)
{
    if (err)
    {
        throw err;
    }
    else
    {
        console.log("Connected to mysql server.");
    }
});

app.get("/type/:type_id", function(req,res)
{
    var day_now = new Date().getDay();;
    var now = new moment();
    var present_time=now.format("HH:mm:ss");
    if (day_now == 0)
    {
        // sunday
        console.log("Sunday")
    }
    else if (day_now == 1)
    {
        // monday
        console.log("Monday")
    }
    else if (day_now == 2)
    {
        // tuesday
        console.log("Tuesday")
    }
    else if (day_now == 3)
    {
        // wednesday
        console.log("Wednesday")
    }
    else if (day_now == 4)
    {
        // thursday
        console.log("Thursday")
        let local=[];
        mysql_connection.query(`select name, type from restaurant where time_thursday_open<=\"${present_time}\" and \"${present_time}\"<=time_thursday_close and type=\"${req.params.type_id}\"`, function(err, result, fields)
        {
            if (err)
            {
                throw err;
            }
            for (let key in result)
            {
                local.push(result[key]["name"]);
            }
            console.log(local);
        })
    }
    else if (day_now == 5)
    {
        // friday
        console.log("Friday")
    }
    else
    {
        // Saturday
        console.log("Saturday")
    }
})

// port coniguration
const port=process.env.PORT || 8000;
app.listen(port, process.env.IP, function()
{
    console.log("The blog_restful_api server have started at port " +  port);
})
