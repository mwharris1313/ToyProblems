/*
SequenceSum

Sum of 'n' Numbers
sum_of_n takes an integer n and returns a List of length abs(n) + 1. 
The List/Array contains the numbers in the arithmetic series produced 
by taking the sum of the consecutive integer numbers from 0 to n inclusive.

n can also be 0 or a negative value.
Example:

5 -> [0, 1, 3, 6, 10, 15]
-5 -> [0, -1, -3, -6, -10, -15]
7 -> [0, 1, 3, 6, 10, 15, 21, 28]
—————————————
*/

function sumOfN(n) {
  var currentSum = 0;
  var solution = [];
  var finalNumber = Math.abs(n);
  var sign = n < 0 ? -1 : 1;

  for (var i=0; i <= finalNumber; i++) {
    currentSum += sign * i;
    solution.push(currentSum);
  }

  return solution;
}

console.log(sumOfN(7));
