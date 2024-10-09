const myTitle = document.querySelector('#title');
myTitle.textContent = `How's the Weather`;

fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));