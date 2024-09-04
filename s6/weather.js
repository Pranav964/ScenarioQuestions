async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '91a7e1e01060b7b85def0bf894e5f0e2';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('temp').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('desc').innerText = `Description: ${data.weather[0].description}`;
            document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data');
    }
}
