const p1 = new Promise((resolve) => setTimeout(resolve, 3000, 'Promise 1'));

const p2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Promise 2'));
const p3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3'));

Promise.all([p2,p1,p3]).then((res) => console.log(res)).catch(err => console.log(err));

// a = 5;
// console.log(a)
// var a;

// const promise = new Promise((resolve, reject) => {
//     if(5 != 5) {
//         return resolve('Hello vaibhav Success')
//     }
//     else {
//         return reject('Bhad me jaa');
//     }
// })

// promise.then((response) => console.log(response)).catch(err => console.log(err));

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 5000);
//     });
//   }
  
//   async function asyncCall() {
//       const result = await resolveAfter2Seconds();
//       console.log(result);
//       console.log('calling'); 
//     }
  
//   asyncCall();

// const hello = () => {
//   var a = 4;
// }

// console.log(a)

// var x = 10;
// function a(){
//   console.log(x); // 10 // wrong // undefned
//   var x = 20;
// }
// a();
// console.log(x)


var h = setTimeout(() => {
    return 10;
}, 2);

console.log(h);