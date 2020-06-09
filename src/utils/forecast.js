const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fe458f2f52759ed6cc951cfe930ad87e&query=' + latitude + ',' + longitude + '&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(body.current.observation_time);
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " \nIt is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
