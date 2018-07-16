const assert = require('assert');
const MarioChar = require('../models/mariochar');

<<<<<<< HEAD
// Describe our tests
describe('Saving records', function(){

  // Create tests
  it('Saves a record to the database', function(done){

    const char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();
    });

  });

});
=======
// Describe tests
describe("Saving records", function() {

    // Create tests
    it('Save a record to database', function(done) {

        var char = new MarioChar({
            name: "Mario"
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });

});
>>>>>>> lesson-1
