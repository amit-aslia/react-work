1. Difference between let, var, const
		Output questions:
			1 console.log(a); // Reference Error
				a = 5;

			2 console.log(a); // undefined
				var a;

			3 console.log(a) // undefined
				let a = 3;

			4	var a = 2;
				if(true){
						console.log(a);  // 2
						var a = 3;
				}
			5 const arr = [];
				if(true) {
					console.log(a);
					const a = 4;
				}

2.) What is Pure function? Why we use Pure function ?
3.) Immutability,
			is Immutablity always useful,is it always enhance React speed,
   		SubQuestion:
      If Yes/no, why, (Ans: Incase of big object or array of object copying operation gets expensive to overcome them we use immer or immutableJS or any self made function which avoid copying and mutation)
        Array and Object,
        How can we compare Object and Array,
        What is deep copy and shallow copy,
        How to copy nested object into a variable(Shallow copy and deep copy problem)

				var obj1 = {
					test: 'amit'
				}

				var obj2 = {
					test = 'amit'
				}

				obj1 === obj2  // false (differnt memory loation)

				var obj3 = obj1;
				obj1 == obj3 // true (same Reference)
				obj3.bossName = 'ankit'
				console.log(obj1)  :: {test: 'amit', bossName: 'ankit'}

				Deep copy and shallow copy	
					const obj = {
						name: 'amit',
						address: {
							city: 'delhi',
							country: 'India'
						}
					}

					const obj2 = {...obj}  // shallow copy
					const obj3 = {...obj, address: {...obj.address}} /// Deep copy

	4.) 
			for(var i=0;i<=4;i++){
				setTimeout(() => {
					console.log(i) // 5,5,5,5,5
				}, 0)
			}



			for(let i=0;i<=4;i++){
				setTimeout(() => {
					console.log(i) // 0,1,2,3,4
				}, 0)
			}


	5.) Event loop questions
				setTimeout(() => console.log('A'),0)
				const promise = Promise.resolve('B')
				promise.then(() => console.log('B'))
				console.log('C')

				Order of Exection:  
														B
														A

	6.) call, applym bind method
	7.) Throttling and debounce (Implementation)
	8.) High order function
				write function 'mul';
				console.log(mul(2)(3)(4))   // Ans will be  24

	9.) closures

	10.)Promises
				const p1 = new Promise((resolve) => setTimeout(resolve, 3000, 'Promise 1'));
				const p2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Promise 2'));
				const p3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3'));

				Promise.all([p2,p1,p3]).then((res) => console.log('this is success',res)).catch(err => console.log('this is error',err));

				// Ans:
						this is error Promise 2

	11.) this operator and Proptypal Inheritance is optional



	///// React  /////

	1.) What is Pure component? Is pure function always enhance the performance
	2.) How can you acheive functionality of Pure component in functional components
	3.) What is the drawback of keeping index as key?
	4.) What if we pass callback as props and use pure component, does child component render when parent gets updated?

	5.) Hooks (useEffect, useCallback, useMemo)
	6.) Why dont we use arrow function in onClick event?
	7.) Error boundaries? which lifecycle method is use to log error
	8.) What is code splitting
	9.) Reconciliation
	10.) How can we reduce DOM node? what are the various ways
	

	/////////Redux //////////

	1.) Why we use redux? Is redux is always useful? does redux increase latency in code
	2.) If same action.type contain in two reducer what will happen
	3.) Life cycle of Redux
	4.) why we use replace reducer
	5.) connect function
	
