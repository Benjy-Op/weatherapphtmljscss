const apiKey = 'afa251c0c85eaf1588fe5ee2238ead24'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?APPID=afa251c0c85eaf1588fe5ee2238ead24&q='

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch (apiUrl + city);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none";
    }
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + ' %';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
    console.log(data)

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "imgs/images/clouds.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "imgs/images/clear.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "imgs/images/rain.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "imgs/images/drizzle.png";
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "imgs/images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";

}
searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value)
})
