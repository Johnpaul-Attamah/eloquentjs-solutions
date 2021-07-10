'use strict'



/**
 * Looping a Triangle
 * Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
 */

//solution
//To Print a triangle like above:
/**
 * 1. loop to triangle height
 * 2. print the number of hashes to be equal to the iteration count at that point
 * 3. Repeat step 2
 */
for(let i = 0; i < 10; i++) {
    console.log('#'.repeat(i));
}

/**
 * Question 2
 * Write a program that uses console.log to print all the numbers from 1 to 100,
 * with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
 * number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 * When you have that working, modify your program to print "FizzBuzz"
 * for numbers that are divisible by both 3 and 5 (and still print "Fizz" or
 * "Buzz" for numbers divisible by only one of those).
 * 
 * (This is actually an interview question that has been claimed to weed out
 * a significant percentage of programmer candidates. So if you solved it, your
 * labor market value just went up.)
 */
// solution
/**
 * loop from 1 to 100
 * for all numbers divisible by 15 or 3 and 5 print "FizzBuzz"
 * if number is divisible by 5 print "Buzz" in place of the number
 * if divisible by 3 print "Fizz"
 * else print the number
 */
for(let number = 1; number <= 100; number++) {
    if(number % 15 === 0) {
        console.log('FizzBuzz');
    } else if(number % 5 === 0) {
        console.log('Buzz');
    } else if(number % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(number)
    }
}

//you need to use elif statement for this instead of just if to avoid calling each number 3 times
// the remainder operator '%' is used to check factors

/**
 * Question 03
 * Chessboard:
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to
 *  separate lines. At each position of the grid there is either a space or a # character.
 *  The characters should form a chessboard. Passing this string to console.log 
 *  should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
* When you have a program that generates this pattern, define a binding size = 8 and 
* change the program so that it works for any size, outputting a grid of the given width and height
 */
//solution
/**
 * 1. Looking at the output, you can draw grid lines
 * 2. when both rows and column are in even position or odd position print space
 * 3. when either of above print "#" or vice versa
 */
//we will need a string to print row by row
let markings = '';
for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++){
        if((i%2===0 && j%2===0)||(i%2!==0 && j%2!==0)){
            markings += ' ';
        } else {
            markings += '#';
        }
    }
    //print the markings as one row
    console.log(markings);
    //remember to clear the row to generate for next iteration of i
    markings = '';
}

function chessboard(size=8) {
    let markings = '';
    for(let i = 0; i < size; i ++) {
        for(let j = 0; j < size; j++){
            if((i%2===0 && j%2===0)||(i%2!==0 && j%2!==0)){
                markings += ' ';
            } else {
                markings += '#';
            }
        }
        // we need to print a newline character after each complete set here
        markings+='\n';
    }
    return markings;
}

console.log(chessboard(128));
