# fundamental

> Check node version

		node --version

> Build-in Types

		string
		number
		boolean
		array
		undefined
		null
		any
		void
		...

> Building Apps with Functions

-	typed parameters
-	defining Functions
-	return values
-	async/await
-	optional parameters
-	arrow Functions
-	default parameters
-	rest parameters
-	parameter destructuring

>	interface vs type

	An interface is a code contract, defines the shape of data

	interface definitions can be used to represent the shape of an object-like data structure

	Type alias declarations can be used to represent primitive types and object-like data structure

			interface Product {
				id: number;
				name: string;
				icon: string;
			}

			type Product= string | {
				id: string,
				name: string,
				icon: string
			};

npx ts-node src/generics.ts