document.getElementById('get-weather-btn').addEventListener('click', getWeather);

function getWeather() {
    const selectedLocation = document.getElementById('location-select').value;
    const [lat, lon] = selectedLocation.split(',');
    const apiKey = '136ae8614b143116705368411853a432';
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem fetching the weather:', error);
        });
}

function displayWeather(data) {
    const { lat, lon, current: { temp, humidity, weather }, wind_speed } = data;

    console.log("Weather array:", weather);

    const weatherDescriptions = [
        { description: 'thunderstorm with light rain', code: '11d' },
        { description: 'thunderstorm with rain', code: '11d' },
        { description: 'thunderstorm with heavy rain', code: '11d' },
        { description: 'light thunderstorm', code: '11d' },
        { description: 'thunderstorm', code: '11d' },
        { description: 'heavy thunderstorm', code: '11d' },
        { description: 'ragged thunderstorm', code: '11d' },
        { description: 'thunderstorm with light drizzle', code: '11d' },
        { description: 'thunderstorm with drizzle', code: '11d' },
        { description: 'thunderstorm with heavy drizzle', code: '11d' },
        { description: 'light intensity drizzle', code: '09d' },
        { description: 'drizzle', code: '09d' },
        { description: 'heavy intensity drizzle', code: '09d' },
        { description: 'light intensity drizzle rain', code: '09d' },
        { description: 'drizzle rain', code: '09d' },
        { description: 'heavy intensity drizzle rain', code: '09d' },
        { description: 'shower rain and drizzle', code: '09d' },
        { description: 'heavy shower rain and drizzle', code: '09d' },
        { description: 'shower drizzle', code: '09d' },
        { description: 'light rain', code: '10d' },
        { description: 'moderate rain', code: '10d' },
        { description: 'heavy intensity rain', code: '10d' },
        { description: 'very heavy rain', code: '10d' },
        { description: 'extreme rain', code: '10d' },
        { description: 'freezing rain', code: '13d' },
        { description: 'light intensity shower rain', code: '09d' },
        { description: 'shower rain', code: '09d' },
        { description: 'heavy intensity shower rain', code: '09d' },
        { description: 'ragged shower rain', code: '09d' },
        { description: 'light snow', code: '13d' },
        { description: 'snow', code: '13d' },
        { description: 'heavy snow', code: '13d' },
        { description: 'sleet', code: '13d' },
        { description: 'light shower sleet', code: '13d' },
        { description: 'shower sleet', code: '13d' },
        { description: 'light rain and snow', code: '13d' },
        { description: 'rain and snow', code: '13d' },
        { description: 'light shower snow', code: '13d' },
        { description: 'shower snow', code: '13d' },
        { description: 'heavy shower snow', code: '13d' },
        { description: 'mist', code: '50d' },
        { description: 'smoke', code: '50d' },
        { description: 'haze', code: '50d' },
        { description: 'sand/dust whirls', code: '50d' },
        { description: 'fog', code: '50d' },
        { description: 'sand', code: '50d' },
        { description: 'dust', code: '50d' },
        { description: 'volcanic ash', code: '50d' },
        { description: 'squalls', code: '50d' },
        { description: 'tornado', code: '50d' },
        { description: 'clear sky', code: '01d' },
        { description: 'few clouds', code: '02d' },
        { description: 'scattered clouds', code: '03d' },
        { description: 'broken clouds', code: '04d' },
        { description: 'overcast clouds', code: '04d' }
    ];

    let description = "Unknown";
    let icon = "01d";

    if (weather && weather.length > 0) {
        const foundWeather = weather.find(item =>
            weatherDescriptions.some(desc => desc.description === item.description)
        );

        if (foundWeather) {
            description = foundWeather.description;
            icon = foundWeather.icon;
        }
    }

    const weatherIconSrc = icon;

    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = `
        <h2>Weather at ${lat}, ${lon}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Description: ${description}</p>
        <img src="http://openweathermap.org/img/wn/${weatherIconSrc}.png" alt="Weather Icon">
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${wind_speed} m/s</p>
    `;
}

