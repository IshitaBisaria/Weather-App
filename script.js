const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "84242b6aabmsh17077544deef774p1dd284jsn7ed8dd0aa7f1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      // temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    c_s.innerHTML = response.cloud_pct;
    t_s.innerHTML = response.temp;
    f_s.innerHTML = response.feels_like;
    h_s.innerHTML = response.humidity;
    mit_s.innerHTML = response.min_temp;
    mat_s.innerHTML = response.max_temp;
    ws_s.innerHTML = response.wind_speed;
    wd_s.innerHTML = response.wind_degrees;
    sr_s.innerHTML = response.sunrise;
    ss_s.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    c_b.innerHTML = response.cloud_pct;
    t_b.innerHTML = response.temp;
    f_b.innerHTML = response.feels_like;
    h_b.innerHTML = response.humidity;
    mit_b.innerHTML = response.min_temp;
    mat_b.innerHTML = response.max_temp;
    ws_b.innerHTML = response.wind_speed;
    wd_b.innerHTML = response.wind_degrees;
    sr_b.innerHTML = response.sunrise;
    ss_b.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    c_l.innerHTML = response.cloud_pct;
    t_l.innerHTML = response.temp;
    f_l.innerHTML = response.feels_like;
    h_l.innerHTML = response.humidity;
    mit_l.innerHTML = response.min_temp;
    mat_l.innerHTML = response.max_temp;
    ws_l.innerHTML = response.wind_speed;
    wd_l.innerHTML = response.wind_degrees;
    sr_l.innerHTML = response.sunrise;
    ss_l.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    c_k.innerHTML = response.cloud_pct;
    t_k.innerHTML = response.temp;
    f_k.innerHTML = response.feels_like;
    h_k.innerHTML = response.humidity;
    mit_k.innerHTML = response.min_temp;
    mat_k.innerHTML = response.max_temp;
    ws_k.innerHTML = response.wind_speed;
    wd_k.innerHTML = response.wind_degrees;
    sr_k.innerHTML = response.sunrise;
    ss_k.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
