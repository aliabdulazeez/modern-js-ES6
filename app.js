// Editor's note:
// All the code below are code snippets from the course + my own spaghetti code^^


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