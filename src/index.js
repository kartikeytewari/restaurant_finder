var request = require('request');
request('https://random-data-api.com/api/restaurant/random_restaurant', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body) // Print the google web page.
     }
})