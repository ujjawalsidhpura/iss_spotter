const request = require('request');

const fetchMyIp = function (api, callback) {

  request(api, (err, res, body) => {
    if (err) {
      callback(err, null);
      return
    }

    if (res.statusCode !== 200) {
      const message = `Status code ${res.statusCode} when fetching IP
      response ${res.body}.`;

      callback(err(message), null);
      return;
    }

    const IP = JSON.parse(body).ip;

    callback(null, IP);
  });

};


const fetchCoordsByIP = function (ip, callback) {

  request(`https://freegeoip.app/json/${ip}`, (err, res, body) => {

    if (err) {
      return callback(err, null);
    }

    if (res.statusCode !== 200) {
      return callback(err(`Error: Status code ${res.statusCode} ${res.body}`), null);
    }

    const data = JSON.parse(body);
    const latitude = data.latitude;
    const longitude = data.longitude;
    const coordinates = { latitude, longitude };

    callback(null, coordinates);
  });
};

module.exports = { fetchMyIp, fetchCoordsByIP };
