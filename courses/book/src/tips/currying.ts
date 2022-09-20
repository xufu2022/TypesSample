
// A function that supports currying
let add = (x: number) => (y: number) => {
	console.log(y);
	
	return x + y;
}

// Simple usage
add(123)(456);

// curried
let add123 = add(123);


// use the curried function
add123(456);