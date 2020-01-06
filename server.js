
let express = require('express');
let request=require('request');
let app = express();

app.set('view engine', 'ejs');

//let city = "Bangalore";

//let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`;

app.get('/weather', function(req, res) {
    let city = req.query.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`;

        request(url,function(error,response,body){
            let weather_json;
            weather_json = JSON.parse(body);
           console.log(weather_json);
           let weather={
               city : city,
               temperature : Math.round(weather_json.main.temp),
               description : weather_json.weather[0].description,
               //icon : weather_json.weather[0].icon
           };
           let weather_data={weather : weather};
            //res.render('weather', weather_data);
            res.json({ weather: weather_data });

        });

    });

app.listen(8080);
