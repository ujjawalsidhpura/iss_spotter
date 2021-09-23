const { fetchMyIp, fetchCoordsByIP } = require('./iss');

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



// Catching user inputs
// const input = process.argv.slice(2);
// const ip = input[0];
// I used my own ip by using this site 'https://freegeoip.app/'

// fetchCoordsByIP(ip, (err, res) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })