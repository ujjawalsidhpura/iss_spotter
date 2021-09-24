const { nextISSTimesForMyLocation } =
  require('./iss_promised')


nextISSTimesForMyLocation()
  .then((passes) => {
    console.log(passes);
  })
  .catch((error) => {
    console.log('Error: ', error.message);
  })