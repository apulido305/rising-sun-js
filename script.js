const weather_api = "http://api.openweathermap.org/data/2.5/weather?q=Miami,us&APPID=6207107a487641b8cb63621f9b64076e"

window.addEventListener('load', function(){
});

function getWeatherData () {
  // const data = this.responseText;
  const data = JSON.parse(this.responseText);
  const sunrise = console.dir(data.sys.sunrise);
  const sunset = console.dir(data.sys.sunset);
  const timeNow = new Date().getTime()/1000;
  const timeSinceSunrise = timeNow - sunrise;
  const noonTime = sunrise + ((sunset - sunrise) / 2);
  console.log(noonTime);
}

const connection = new XMLHttpRequest();

connection.addEventListener('load', getWeatherData);

connection.open("GET", weather_api);
connection.send();
