const API_KEY = "37dd525a870b9686d9296dd3a5483226"



function onGeoOk(position){
	const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const name = data.name
        const weather = data.weather[0].description
    const name_span = document.querySelector("div#weather span:first-child")
    const weather_span = document.querySelector("div#weather span:last-child")
    name_span.innerText = name
    weather_span.innerText = `${weather} / ${data.main.temp}`
    })
}

function onGeoError(){
	alert("Can't find you. no weather or you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)