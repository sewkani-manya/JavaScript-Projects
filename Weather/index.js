const url = 'https://weather-api-algobook.p.rapidapi.com/forecast/london';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e090d9a01emshc965f379124497cp1aba9ejsnad7aa966465e',
		'x-rapidapi-host': 'weather-api-algobook.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}