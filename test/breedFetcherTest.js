const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {

      console.log('err: ' + err);
      console.log('desc: ' + desc);

      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns error for a non-existent breed, via callback', (done) => {

    fetchBreedDescription('Nocat', (err, desc) => {
      
      console.log("err :" + err);
      console.log("desc :" + desc);
    
      // const expectedDesc = "The Siberians dog ...";

      assert.equal('No cat with name Nocat found.', err);
      assert.equal(desc, null);

      done();
    });
  });

});
