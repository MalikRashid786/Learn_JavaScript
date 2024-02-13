const balance = 300

console.log(balance);

const newestBalance = new Number(4000)

console.log(newestBalance.toString())


console.log(newestBalance.toFixed(2));


const latestBalance = 10000000
console.log(latestBalance.toPrecision(4));

console.log(latestBalance.toLocaleString('en-IN'));


// ================================================================ Math =================================================================

console.log(Math.random());

console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10

const max = 20

console.log(Math.floor(Math.random() *  (max - min +1 )) + min);   