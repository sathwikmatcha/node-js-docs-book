//Assertion used
//The assert module provides a set of assertion functions for verifying invariants.The truth, truthy stuff and verification all come over here and 
//assertion is kind of necessary if you are building something heavy, so that nothing seriously goes wrong.

const assert=require("assert");
const assert_strict=require("assert").strict;

var statement1=assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
console.log(statement1);

var statement2 = assert.deepStrictEqual(1,[1]);
console.log(statement2);
