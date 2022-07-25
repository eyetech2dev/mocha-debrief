//Import assert
const assert = require("assert");
//Import add function from app.js
const { add } = require("../app");
const {describe} = require("mocha");

describe("tests for the add function", () => {
  it("Add two numbers together to test add function", function() {
    const numberVariable1 = 10;
    const numberVariable2 = 5;
    const expectedSum = numberVariable1 + numberVariable2;

    const result = add(10, 5);
    assert.strictEqual(result, expectedSum);
  });
  it("To test if the add function only receives one parameter", function() {
    const numberVariable1 = 10;

    const expectedSum = numberVariable1 + 0;

    const result = add(10);
    assert.strictEqual(result, expectedSum);
  });
  it("To test if the add function receives both parameters of value 0", function() {
    const numberVariable1 = 0;
    const numberVariable2 = 0;

    const expectedSum = 0;

    const result = add(0,0);
    assert.strictEqual(result, expectedSum);
  });
  it("To test if the add function receives string as parameter, return 0", function() {
    const numberVariable1 = "string1";
    const numberVariable2 = "string2";

    const expectedSum = 0;

    const result = add(numberVariable1, numberVariable2);
    assert.strictEqual(result, expectedSum);
  });
})

/*
   * Create unit tests for the add function
   1 - should add 2 numbers as arguments
   2 - should handle only one number as arguments
   // extension challenge
   3 - should be able to accept 0 as arguments
   4 - should return 0 if one argument is not a number
   You will be following the Google doc steps to do this using TDD.
 */
  

