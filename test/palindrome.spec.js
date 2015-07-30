var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var palindromeChain = require ('../palindromechain.js');

describe ("palindromeChain", function(){

  it('should be a function', function(){
    expect(palindromeChain).to.be.a('function');
  });

  it('should return a number', function(){
    expect(typeof palindromeChain(89)).to.equal('number');
  });

  it('should returns the number of special steps needed to obtain a palindrome', function(){
    expect(palindromeChain(87)==4);
  });

});