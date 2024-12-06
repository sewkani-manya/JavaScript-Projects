(async function fetchWeather() {
	const url = 'https://foreca-weather.p.rapidapi.com/forecast/15minutely/102643743?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&periods=8&dataset=full';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'e090d9a01emshc965f379124497cp1aba9ejsnad7aa966465e',
			'x-rapidapi-host': 'foreca-weather.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
})();
