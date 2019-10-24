const request = require('request');
const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      // return console.error('Error:', error);
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      // console.log('statusCode:', response && response.statusCode); // Response status code

      if (data.length === 0) {
        callback(null, `No cat with name ${breedName} found.`);
      } else {
        console.log(data.length);
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
