var request = require('request');
var mysql = require('mysql');

var mysql_connection = mysql.createConnection
({
    host: "localhost",
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

var count=11
request('https://random-data-api.com/api/restaurant/random_restaurant', function (error, response, body)
{
    if (!error && response.statusCode === 200)
    {
        body=JSON.parse(body)
        console.log(body)

        var sql="insert into restaurant (restaurant_id, type, description, time_monday_open, time_monday_close, time_tuesday_open, time_tuesday_close, time_wednesday_open, time_wednesday_close, time_thursday_open, time_thursday_close, time_friday_open, time_friday_close, time_saturday_open, time_saturday_close, time_sunday_open, time_sunday_close) values (?)";
        var values=[
            count, body["type"], body["description"], body["hours"]["monday"]["opens_at"], body["hours"]["monday"]["closes_at"], body["hours"]["tuesday"]["opens_at"], body["hours"]["tuesday"]["closes_at"], body["hours"]["wednesday"]["opens_at"], body["hours"]["wednesday"]["closes_at"], body["hours"]["thursday"]["opens_at"], body["hours"]["thursday"]["closes_at"], body["hours"]["friday"]["opens_at"], body["hours"]["friday"]["closes_at"], body["hours"]["saturday"]["opens_at"], body["hours"]["saturday"]["closes_at"], body["hours"]["sunday"]["opens_at"], body["hours"]["sunday"]["closes_at"]
        ]

        mysql_connection.query(sql, [values], function(err, result)
        {
            if (err)
            {
                throw err;
            }
            else
            {
                console.log(result.inserxtId)
            }
        });
    }
    else
    {
        console.log("The API returned error.")
        console.log(error);
    }
})
