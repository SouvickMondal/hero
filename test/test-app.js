var assert = require("assert"); // core module
var C = require('../cash.js');  // our module

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
  })
}); 




// // var assert = require('chai').assert;

// // describe('Phase 1 testing', () => {
// //     it('should return -1 when the value is not present', () => {
// //         assert.equal(-1, [1, 2, 3].indexOf(5));
// //         assert.equal(-1, [1, 2, 3].indexOf(0));
// //     });

// // });





// // var assert = require('chai').assert;

// // describe('Phase 1 testing', () => {
// //     before(() => {
// //         console.log("Before is called")
// //     });

// //     beforeEach(() => {
// //         console.log("Before each is called")
// //     });

// //     it('should return -1 when the value is not present', () => {
// //         assert.equal(-1, [1, 2, 3].indexOf(5));
// //     });
// //     it('another test case', () => {
// //         assert.equal(-1, [1, 2, 3].indexOf(0));
// //     });

// //     it('pending......');

// //     afterEach(() => {
// //         console.log("After each is callled")
// //     });
// //     after(() => {
// //         console.log("After is called")
// //     });
// // });





// // let sum = require('../sumApp.js').sum;
// // let expect = require("chai").expect;
// // console.log("TYPE OF ", typeof sum)
// // describe('Sum of Numbers tests', () => {
// //     describe('General tests', () => {
// //         it('should be a function', () => {
// //             expect(typeof sum).to.equal('function');
// //         });
// //     });

// //     describe('Function tests', () => {
// //         it('should return zero for a zero length input array', () => {
// //             expect(sum([])).to.equal(0);
// //         });

// //         it('should return the member value for a one member array', () => {
// //             expect(sum([1])).to.equal(1);
// //         });

// //         it('should return the member value for a one member array when given as string', () => {
// //             expect(sum(['1'])).to.equal(1);
// //         });

// //         it('should add whole number arrays', () => {
// //             expect(sum([1, 2, 3])).to.equal(6);
// //         });

// //         it('should add whole number arrays including negative numbers', () => {
// //             expect(sum([-1, 2, 3])).to.equal(4);
// //         });

// //         it('should add whole number arrays including strings', () => {
// //             expect(sum([-1, '2', 3])).to.equal(4);
// //         });

// //         it('should add fractions', () => {
// //             expect(sum([1.1, 2.2, 3])).to.be.closeTo(6.3, 0.0001);
// //         });

// //         //it('should not add non-arrays', () => {
// //         //    expect(sum(1,2,3)).to.be.NaN;           
// //         //}); 

// //         it('should not add arrays of invalid data', () => {
// //             expect(sum(['pesho', 'gosho'])).to.be.NaN;
// //         });
// //     });
// // });




// // var expect = require('chai').expect;
// // var request = require('request');

// // it('Main page content', function(done) {
// //     request('http://localhost:3006', function(error, response, body) {
// //         expect(body).to.equal('welcome to react world');
// //         done();
// //     });
// // });
// // var should = require('chai').should()
// // var foo = 'bar'
// // var beverages = { tea: ['chai', 'matcha', 'oolong'] };

// // describe('Equality check', () => {
// //     it('Equals to ', () => {
// //         foo.should.be.a('string')
// //     });
// // });







// var expect = require('chai').expect
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// expect(foo).to.be.a('string');
// expect(foo).to.equal('bar');
// expect(foo).to.have.length(3);
// expect(beverages).to.have.property('tea').with.length(3);





