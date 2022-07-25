/*
 * You should write Mocha code that will test the functionalities of the add() function.
 ** Don't forget to initialize npm, install Mocha, and change the scripts in the package.json to run the test suite <command npm> test.
 *** Try to use TDD - test code, implement code, refactor the code.
 */

const add = (firstNum=0, secondNum=0) => {
    if(typeof firstNum === "string" || typeof secondNum === "string" ){
        return 0
    }
    return firstNum + secondNum;
};

module.exports = { add };

/*
 *  Implement the add function as needed to guarantee that:
      1 - add two arguments
      2 - handles only one argument
      // extension challenge
      3 - handles 0 as arguments
      4 - returns 0 if any of the arguments in not a number
     You will follow the Google document steps to do this using TDD.
 */
