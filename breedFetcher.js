let input = process.argv;
let qs = input[2];
// let qs = input.splice(2, input.length - 2);
console.log(qs);

const request = require('request');

// 'https://api.thecatapi.com/v1/breeds/search?q=Siberian'

request(`https://api.thecatapi.com/v1/breeds/search?q=${qs}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  if (error) {
    return console.error('Error:', error);
  } else {

    const data = JSON.parse(body);
    console.log('statusCode:', response && response.statusCode); // Response status code

    if (data.length === 0) {
      // console.log("not found");
      console.log(`No cat with name ${qs} found.`);
    } else {
      console.log(data.length);
      console.log(data[0].description);
    }
  }
});
