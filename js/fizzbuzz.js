// replacement table with option to add more and edit
const replace_array = [
   [3,'fizz']
  ,[5,'buzz']
//,[X,'YYYY'] // next number to replace, if you want...
];

// range numbers
const num_min = 0;
const num_max = 100;

// printout replacement patterns, just for test
/* 
for (const key in replace) {
  console.log(`${key}:${replace[key]}`);
}
   
console.log(replace_array);

console.log("========="); 

*/

//body of while
for (let i = num_min; i <= num_max; i++) {
  o = []; //declare "o" array
  x=(i/i)*i //0 fix

  for (const key in replace_array) {

    o.push(String(x%replace_array[key][0])); // create array of modulo result
  }

  for (const key in o) {
    o[key] = o[key].replace(/^[0]$/, replace_array[key][1]); // replace 0 to fizz or buzz
    o[key] = o[key].replace(/[0-9]/g, ""); //remove not needed numbers
  }
  

  o = o.join(''); // join 2 array and convert to string
  o = o.trim(); //trim bad looks spaces  
  o = o.replace(/^(?![\s\S])/, x); // replace empty to numbers
  o = o.replace('NaNNaN', 0); // 0fix
  
  //print result
  console.log(i+':'+o);
}