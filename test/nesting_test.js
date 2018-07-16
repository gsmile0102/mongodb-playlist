const assert = require('assert');
const mongoose = require('mongoose');
<<<<<<< HEAD
const Author = require('../models/authors');

// Describe our tests
describe('Nesting records', function(){

    beforeEach(function(done){
        // Drop the collection
        mongoose.connection.collections.authors.drop(function(){
=======
const Author = require('../models/author');

// Describe tests
describe('Nesting records', () => {

    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(() => {
>>>>>>> lesson-1
            done();
        });
    });

    // Create tests
<<<<<<< HEAD
    it('Creates an author with sub-documents', function(done){

=======

    it('Create an author with sub-documents', (done) => {
>>>>>>> lesson-1
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

<<<<<<< HEAD
        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                assert(record.books.length === 1);
                done();
            });
        });

    });

    it('Adds a book to an author', function(done){

=======
        pat.save().then(() => {
            Author.findOne({name: 'Patrick Rothfuss'}).then((result) => {
                assert(result.books.length === 1);
                done();
            });
        });
    });

    it('Add a book to an author', (done) => {
>>>>>>> lesson-1
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

<<<<<<< HEAD
        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                // add a book to the books collection
                record.books.push({title: "Wise Man's Fear", pages: 500});
                record.save().then(function(){
                    Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                        assert(record.books.length === 2);
=======
        pat.save().then(() => {
            Author.findOne({name: 'Patrick Rothfuss'}).then((record) => {
                // add a book to the books array
                record.books.push({title: "Wise Man's Fear", pages: 500});
                record.save().then(() => {
                    Author.findOne({name: 'Patrick Rothfuss'}).then((result) => {
                        assert(result.books.length === 2);
>>>>>>> lesson-1
                        done();
                    });
                });
            });
        });

    });

<<<<<<< HEAD
});
=======
})
>>>>>>> lesson-1
