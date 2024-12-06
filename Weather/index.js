(async function fetchCityWeather(cityName) {
    const searchUrl = `https://foreca-weather.p.rapidapi.com/location/search/${cityName}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e090d9a01emshc965f379124497cp1aba9ejsnad7aa966465e',
            'x-rapidapi-host': 'foreca-weather.p.rapidapi.com'
        }
    };

    try {
        // Step 1: Search for city and get its ID
        const searchResponse = await fetch(searchUrl, options);
        const searchResult = await searchResponse.json();
        const cityId = searchResult.locations[0].id; // Assume first result is correct

        // Step 2: Fetch daily forecast using the city ID
        const forecastUrl = `https://foreca-weather.p.rapidapi.com/forecast/daily/${cityId}?alt=0&tempunit=C&windunit=MS&dataset=full`;
        const forecastResponse = await fetch(forecastUrl, options);
        const forecastResult = await forecastResponse.json();

        // Extract the first day's forecast
        const forecast = forecastResult.forecast[0];
        
       

        // Log the 12 metrics
        console.log({
            maxTemp: forecast.maxTemp,
            minTemp: forecast.minTemp,
            cloudiness: forecast.cloudiness,
            precipProb: forecast.precipProb,
            precipAccum: forecast.precipAccum,
            maxWindSpeed: forecast.maxWindSpeed,
            maxWindGust: forecast.maxWindGust,
            pressure: forecast.pressure,
            sunrise: forecast.sunrise,
            sunset: forecast.sunset,
            uvIndex: forecast.uvIndex,
            symbolPhrase: forecast.symbolPhrase
        });

    } catch (error) {
        console.error('Error:', error);
    }
})('London');


