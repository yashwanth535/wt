//array methods

var arr=[1,2,3,4,5,3];
console.log(arr);
console.log(arr.length);
console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(3));
console.log(arr.reverse());
arr.push(6);
console.log(arr);
arr.pop(arr);
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.slice(3,5));
arr.splice(0,2);//deletes from 0 to 1 indices
console.log(arr);


