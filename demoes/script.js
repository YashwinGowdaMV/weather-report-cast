document.addEventListener('DOMContentLoaded', () => {
    const weatherWidget = document.getElementById('weather-widget');
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=YOUR_API_KEY&units=metric')
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherWidget.innerHTML = `
                <img src="${icon}" alt="Weather Icon">
                <span>${temperature}°C, ${description}</span>
            `;
        })
        .catch(error => {
            weatherWidget.innerHTML = 'Weather data unavailable';
            console.error('Error fetching weather data:', error);
        });
});
