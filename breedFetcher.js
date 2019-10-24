let input = process.argv;
let qs = input[2];
// let qs = input.splice(2, input.length - 2);
console.log(qs);

const request = require('request');

// 'https://api.thecatapi.com/v1/breeds/search?q=Siberian'

request(`https://api.thecatapi.com/v1/breeds/search?q=${qs}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  console.log(typeof body); // Type

  // if (!error) {
  //   console.log(data);
  //   const data = JSON.parse(body);
  //   console.log(`No cat with name ${qs} found.`);
  // }
  // console.log(typeof data);

}, function(error, response, body) {
  if (error) {
    return console.error('Error:', error);
  }
  console.log('Success: ', body);
});
