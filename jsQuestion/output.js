// console.log(a);
// a = 5;


// console.log(a);
// var a;


// var a = 2;
// var b = {
// 	a: 5,
// 	getA: function(){
// 		console.log(this.a);	
// 	}
// }

// b.getA();



// var a = 2;
// var b = {
// 	a: 5,
// 	getA: function(){
// 		console.log(this.a);	
// 	}
// }

// setTimeout(b.getA, 1000);


// var a = 2;
// if(true){
// 	console.log(a);
// 	const a = 3;
// }





// obj = {
//     name: 'amit'
// };

// obj2 = obj;
// obj = {}

// console.log(obj, obj2);


// var output = (function(x) {   // delete is used to delete property of object here x is an local variable
//     delete x;
//     return x;
//   })(0);

//   console.log(output);


// var x = { foo : 1};    // Ans is undefined because foo is deleted and we returning that
// var output = (function() {
// delete x.foo;
// return x.foo;
// })();

// console.log(output);

//     var foo = function bar() { console.log(12)  };

// console.log(typeof(x))

// new Promise((resolve, reject)=>{ // takes 10 sec
//      resolve('amit');
//     })
//     .then((res)=> console.log(res))
//     .catch((err)=>{});

let output = {}
const cases = {
  "India": 10,
  'Sri Lanka': 20,
  "England": 16,
  "Dubai": 50,
  "France": 25
};
const continents = {
  "India": "Asia",
  "Sri Lanka": "Asia",
  "England": "Europe",
  "Dubai": "Africa",
  "Mexico": "America",
  "France": "Europe"
}

//   output= { Asia: 30, Europe: 41, Africa: 50 }

Object.entries(cases).map((data,index) => {
    output[continents[data[0]]] = output[continents[data[0]]] ? output[continents[data[0]]] + data[1] : data[1]
})  

// for(key in continents) console.log(key)
console.log(output)

// var a = 2;
// if(true){
//     console.log(a);
//     var a = 3;
// }

// const obj = {
//   name: 'amit',
//   address: {
//     city: 'delhi',
//     country: 'India'
//   }
// }

// const obj2 = {
//   ...obj,
//   address: {
//     ...obj.address
//   }
// }

// obj2.address.city = 'mumbai'
// console.log(obj2)
// console.log(obj);





