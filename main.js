'use strict'

window.addEventListener('load', () => {
    var searchInput = this.document.querySelector('.search_city input');
    var searchBtn = this.document.querySelector('.search_btn');
    var temperature = this.document.querySelector('.weather-temperature');
    var cityName = this.document.querySelector('.weather-city');
    var weatherImg = this.document.querySelector('.weather-icon');
    var wind = this.document.querySelector('.wind');
    var humidity = this.document.querySelector('.humidity');
    
    searchBtn.addEventListener('click', ()=>{
        
        var city = searchInput.value.trim()

        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00531e7618e11f4ace5cb983d3036fee&units=metric`)
        .then(response => response.json())
        .then(data => {
            temperature.innerHTML = Math.ceil(data.main.temp)+'°';
            cityName.innerHTML = data.name;
            wind.innerHTML = parseInt(data.wind.speed * 3.6) + ' km/h';
            humidity.innerHTML = data.main.humidity + '%';

            var iconWeather = data.weather[0].main;
            
            if(iconWeather == 'Clouds'){
                weatherImg.setAttribute('src','./images/clouds.png')
            }else if(iconWeather == 'Thunderstorm'){
                weatherImg.setAttribute('src','./images/thunderstorm.png')
            }else if(iconWeather == 'Clear'){
                weatherImg.setAttribute('src','./images/clear.png')
            }else if(iconWeather == 'Drizzle'){
                weatherImg.setAttribute('src','./images/drizzle.png')
            }else if(iconWeather == 'Rain'){
                weatherImg.setAttribute('src','./images/rain.png')
            }else if(iconWeather == 'Snow'){
                weatherImg.setAttribute('src','./images/snow.png')
            }else if(iconWeather == 'Atmosphere'){
                weatherImg.setAttribute('src','./images/atmosphere.png')
            };
        })
        .catch(() => {
            temperature.innerHTML = 'The city not exists';
            cityName.innerHTML = '';
        });

    });
});
