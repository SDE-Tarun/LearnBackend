// Fundamental of Javascript
// Arrays 
var arr = [1,2,3,4];

// forEach() 
arr.forEach(function(val) {
    console.log(val + " hello");
})

// map
var newarr = arr.map(function(val) {
    return 13;
})
console.log(newarr);

// filter
var ans = arr.filter(function(val) {
    if(val >= 3) {
        return true;
    }
    else{
        return false;
    } 
})
console.log(ans);

// find 
var ans = arr.find(function(val) {
    if(val == 2){
        return val;
    }
})
console.log(ans);

arr.indexOf(2);

// Objects
var obj = {
    name: 'Tarun'
}

// freeze - Dont want to change property value
Object.freeze(obj);

obj.name = 'ABC';

console.log(obj.name);

// We know how to find array length, so how we can find function length
// Function length - Number of parameters , as everything in JS is an object
function abcd(a, b, c, d) {
    
}

console.log(abcd.length); // 4

// return meaning
function abcd() {
    return 12;
}

var ans = abcd(); // control

console.log(ans); // 12

// async js coding

// var blob = await fetch(`https://randomuser.me/api/`);
// var res = await blob.json();
// console.log(res);

// Synchoronous-
// line by line code chale isye kehte hai synchronous.

// Asynchronous-
// jo bhi code async nature ka ho usey side stack mein bhejhdo
// and agle code ko chalao jo bhi sync nature ka ho,
// jab bhi sara sync code chal jaye mtlb main stack khali hojaye,
// tab check kro ki async code complete hua ya nahi.
// agar vo complete hua ho toh usey main stack mein lao and chala do.

// fetch - async code ki tarah hi by default banaya gaya hai, fetch hai hi asyncronous by nature.
// kyunki fetch kahi se data la raha hai toh usme time lag sakta hai mtlb hum third party pe dependent hai.
// So thats why fetch ko isliye by default asyncronous by nature banaya hai.
// Yeh non-blocking hai yeh rokega nahi hai code ko.

// blob mtlb fetch jo apko deta hai vo direct answer nhi hota.
// vo readable format nahi hota vo ek stream hoti hai.
// Toh vo stream ko hume json mein convert krna padta hai.
// fir hume ek baar yeh conversion krne ke baad answer milta hai


async function xyz() {
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();
    console.log(ans);
    console.log(ans.results);
    console.log(ans.results[0].name);
}

xyz();

