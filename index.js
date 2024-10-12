const myTitle = document.querySelector('#title');
myTitle.textContent = `How's the Weather`;

const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.WEATHER_API_KEY;


fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`)
.then(response => response.json())
.then(data => {console.log(data);

console.log(data.clouds.all)
const cloudData = data.clouds;
const cloudLvl = document.createElement('h2');  
if(cloudData.all > 90) cloudLvl.textContent = 'Cloudy af';
document.body.appendChild(cloudLvl);
})
.catch(error => console.error('Error:', error)); 




