// Editor's note:
// All the code below are code snippets from the course + my own spaghetti code^^

/*

//DESTRUCTURING:

//CODE WITHOUT DESTRUCTURING:
function calculatePrice(total, tax = 0.1, tip = 0.05){
    console.log(total + (total * tax) + (total * tip));
  }
  // In this case 0.15 will be bound to the tip
  calculatePrice(100, undefined, 0.15)

  
//CODE WITH DESTRUCTURING:
function calculatePrice({
    total = 0,
    tax = 0.1,
    tip = 0.05} = {} ){
    console.log(total + (total * tax) + (total * tip));
  }
  
  const bill = calculatePrice({ tip: 0.15, total:150 });
  // 187.5





  //Code Wars
  problem 1

  function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers;
  };

console.log(sumTwoSmallestNumbers([7, 46, 5, 3,12,1,23,45,56,567,7,8,9,0,11,22,33,44,55,66,77,88,99,00,00,12,12,32,2222,33]))



//problem 2

function getSum( a,b )
{
   //Good luck!
  let arr = [a, b]
  arr.sort(function(a, b){ return a - b;} );

  let sum = 0;
  for(let i = arr[0]; i <= arr[1]; i++){
    sum += i;
  }
  return sum;
  
}

console.log(getSum(1, 1));

*/

//Problem 3

function accum(s) {
  // your code
 let newArr = s.split('');
 
  let haha = newArr.map((letter, index) => {
    console.log(letter, index)
  })
  
  return haha.join(' ')

}

console.log(accum('Azeez'));