const apiKey= "e4070d99b5b11056c64822b6d0cb1817&";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch (apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console. log(data);

}

checkWeather();