//require is use for importing and we can give here a path 
const math = require('./Math.js');

console.log(math) // this will give us an empty object beacuse the add function is private there .

//now we exported the functions we can use it here and now this will not return an empty object ---> (console.log(math))
console.log("mayth value is " , math.addfuc(5,6));

console.log("math val is" , math.sunfun(9,3));
