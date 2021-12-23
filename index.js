const express=require("express");
const app=express();
const moment=require("moment")
var mysql = require('mysql');

// configure app
app.use(body_parser.urlencoded({ extended: true }));

// Home Page
app.get("/",function(req,res)
{
    console.log("Home Page")
});

// create mysql connection
var mysql_connection = mysql.createConnection
({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "restaurant_finder"
});

// connect to mysql server
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

// the API to return open restaurants
app.get("/type/:type_id", function(req,res)
{
    var day_now = new Date().getDay();;
    var now = new moment();
    var present_time=now.format("HH:mm:ss");
    if (day_now == 0)
    {
        // sunday
        console.log("Sunday")
        let open_rest=[];
        mysql_connection.query(`select name, type from restaurant where time_sunday_open<=\"${present_time}\" and \"${present_time}\"<=time_sunday_close and type=\"${req.params.type_id}\"`, function(err, result, fields)
        {
            if (err)
            {
                throw err;
            }
            for (let key in result)
            {
                open_rest.push(result[key]["name"]);
            }
            console.log(open_rest);
            res.json({
                open_restaurants: open_rest
            })
        })
    }
    else if (day_now == 1)
    {
        // monday
        console.log("Monday")
        let open_rest=[];
        mysql_connection.query(`select name, type from restaurant where time_monday_open<=\"${present_time}\" and \"${present_time}\"<=time_monday_close and type=\"${req.params.type_id}\"`, function(err, result, fields)
        {
            if (err)
            {
                throw err;
            }
            for (let key in result)
            {
                open_rest.push(result[key]["name"]);
            }
            console.log(open_rest);
            res.json({
                open_restaurants: open_rest
            })
        })
    }
    else if (day_now == 2)
    {
        // tuesday
        console.log("Tuesday")
        let open_rest=[];
        mysql_connection.query(`select name, type from restaurant where time_tuesday_open<=\"${present_time}\" and \"${present_time}\"<=time_tuesday_close and type=\"${req.params.type_id}\"`, function(err, result, fields)
        {
            if (err)
            {
                throw err;
            }
            for (let key in result)
            {
                open_rest.push(result[key]["name"]);
            }
            console.log(open_rest);
            res.json({
                open_restaurants: open_rest
            })
        })
    }
    else if (day_now == 3)
    {
        // wednesday
        console.log("Wednesday")
        let open_rest=[];
        mysql_connection.query(`select name, type from restaurant where time_wednesday_open<=\"${present_time}\" and \"${present_time}\"<=time_wednesday_close and type=\"${req.params.type_id}\"`, function(err, result, fields)
        {
            if (err)
            {
                throw err;
            }
            for (let key in result)
            {
                open_rest.push(result[key]["name"]);
            }
            console.log(open_rest);
            res.json({
                open_restaurants: open_rest
            })
        })
    }
    else if (day_now == 4)
    {
        // thursday
        console.log("Thursday")
        let open_rest=[];
        mysql_connection.query(`select name, type from restaurant where time_thursday_open<=\"${present_time}\" and \"${present_time}\"<=time_thursday_close and type=\"${req.params.type_id}\"`, function(err, result, fields)
        {
            if (err)
            {
                throw err;
            }
            for (let key in result)
            {
                open_rest.push(result[key]["name"]);
            }
            console.log(open_rest);
            res.json({
                open_restaurants: open_rest
            })
        })
    }
    else if (day_now == 5)
    {
        // friday
        console.log("Friday")
        let open_rest=[];
        mysql_connection.query(`select name, type from restaurant where time_friday_open<=\"${present_time}\" and \"${present_time}\"<=time_friday_close and type=\"${req.params.type_id}\"`, function(err, result, fields)
        {
            if (err)
            {
                throw err;
            }
            for (let key in result)
            {
                open_rest.push(result[key]["name"]);
            }
            console.log(open_rest);
            res.json({
                open_restaurants: open_rest
            })
        })
    }
    else
    {
        // Saturday
        console.log("Saturday")
        let open_rest=[];
        mysql_connection.query(`select name, type from restaurant where time_saturday_open<=\"${present_time}\" and \"${present_time}\"<=time_saturday_close and type=\"${req.params.type_id}\"`, function(err, result, fields)
        {
            if (err)
            {
                throw err;
            }
            for (let key in result)
            {
                open_rest.push(result[key]["name"]);
            }
            console.log(open_rest);
            res.json({
                open_restaurants: open_rest
            })
        })
    }
})

// port configuration
const port=process.env.PORT || 8000;
app.listen(port, process.env.IP, function()
{
    console.log("The blog_restful_api server have started at port " +  port);
})
