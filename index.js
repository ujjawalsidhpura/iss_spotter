const fetchISSFlyOverTimes = require('./iss');
const fetchCoordsByIP = require('./iss');

//1
//Catching user inputs
// const input = process.argv.slice(2);
// const api = input[0];
// We use this api = 'https://api.ipify.org?format=json';

// fetchMyIp(api, (err, res) => {
//   if (err) {
//     console.log('Error: ', err);
//     return;
//   }
//   console.log('It worked returned: ', res);
// });


//2
// Catching user inputs
// const input = process.argv.slice(2);
// const ip = input[0];
// I used my own ip by using this site 'https://freegeoip.app/'

// fetchCoordsByIP('71.17.174.61', (err, res) => {
//   if (err) {
//     console.log(err)
//     // return err;
//   } else {
//     console.log(res)
//     // return res;
//   }
// })


//3
// fetchISSFlyOverTimes(coords,callback)

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(exampleCoords, (err, res) => {
//   if (err) {
//     console.log(err)
//     return;
//   }
//   console.log(res)
// })

