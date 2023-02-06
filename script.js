const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fb066d0demsh50854442854e81dp1da911jsn248bf3bc526e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			cloud_pct1.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp1.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp


			wind_speed1.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

			let timestamp = new Date(response.sunset * 1000);
			let hours = timestamp.getUTCHours().toString().padStart(2, 0)
			let min = timestamp.getUTCMinutes().toString().padStart(2, 0)
			let sec = timestamp.getUTCSeconds().toString().padStart(2, 0)
			response.sunset.InnerText = '${hours}:${min}:${sec}';
		})
		.catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctB.innerHTML = response.cloud_pct
		tempB.innerHTML = response.temp

		feels_likeB.innerHTML = response.feels_like
		humidityB.innerHTML = response.humidity
		min_tempB.innerHTML = response.min_temp
		max_tempB.innerHTML = response.max_temp


		wind_speedB.innerHTML = response.wind_speed
		wind_degreesB.innerHTML = response.wind_degrees
		sunriseB.innerHTML = response.sunrise
		sunsetB.innerHTML = response.sunset
	})
	.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Australia', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctA.innerHTML = response.cloud_pct
		tempA.innerHTML = response.temp

		feels_likeA.innerHTML = response.feels_like
		humidityA.innerHTML = response.humidity
		min_tempA.innerHTML = response.min_temp
		max_tempA.innerHTML = response.max_temp


		wind_speedA.innerHTML = response.wind_speed
		wind_degreesA.innerHTML = response.wind_degrees
		sunriseA.innerHTML = response.sunrise
		sunsetA.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lahore', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctL.innerHTML = response.cloud_pct
		tempL.innerHTML = response.temp

		feels_likeL.innerHTML = response.feels_like
		humidityL.innerHTML = response.humidity
		min_tempL.innerHTML = response.min_temp
		max_tempL.innerHTML = response.max_temp


		wind_speedL.innerHTML = response.wind_speed
		wind_degreesL.innerHTML = response.wind_degrees
		sunriseL.innerHTML = response.sunrise
		sunsetL.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		cloud_pctK.innerHTML = response.cloud_pct
		tempK.innerHTML = response.temp

		feels_likeK.innerHTML = response.feels_like
		humidityK.innerHTML = response.humidity
		min_tempK.innerHTML = response.min_temp
		max_tempK.innerHTML = response.max_temp


		wind_speedK.innerHTML = response.wind_speed
		wind_degreesK.innerHTML = response.wind_degrees
		sunriseK.innerHTML = response.sunrise
		sunsetK.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

