module first {
	function logName(something: { name: string }) {
		console.log(something.name);
	}

	var person = { name: 'matt', job: 'being awesome' };
	var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
	var random = { note: `I don't have a name property` };

	logName(person); // okay
	logName(animal); // okay
	logName(random); // Error : property `name` is missing
}

module second {
	function logName(something: { name: string }) {
		console.log(something.name);
	}

	logName({ name: 'matt' }); // okay
	logName({ name: 'matt', job: 'being awesome' }); // Error: object literals must only specify known properties. `job` is excessive here.
}

module third {
	function logIfHasName(something: { name?: string }) {
		if (something.name) {
			console.log(something.name);
		}
	}
	var person = { name: 'matt', job: 'being awesome' };
	var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };

	logIfHasName(person); // okay
	logIfHasName(animal); // okay
	logIfHasName({ neme: 'I just misspelled name to neme' }); // Error: object literals must only specify known properties. `neme` is excessive here.
}

module fourth {
	var x: { foo: number; [x: string]: any };
	x = { foo: 1, baz: 0 }; // Ok, `baz` matched by index signature
	//console.log(x['baz'])
}

module fifth {
	// Assuming
	interface State {
		foo: string;
		bar: string;
	}

	class MyComponent {
		state: any;

		setState(state: State) {
			/* ... */
		}

		doSomething() {
			// You want to do:
			this.setState({ foo: 'Hello' }); // Error: missing property bar

			// But because state contains both `foo` and `bar` TypeScript would force you to do:
			this.setState({ foo: 'Hello', bar: this.state.bar });
		}
	}
}

module sixth {
	// Assuming
	interface State {
		foo?: string;
		bar?: string;
	}

	class MyComponent {
		state: any;

		setState(state: State) {
			/* ... */
		}

		doSomething() {
			// You want to do:
			this.setState({ foo: 'Hello' }); // Yay works fine!

			// Because of freshness it's protected against typos as well!
			this.setState({ foos: 'Hello' }); // Error: Objects may only specify known properties

			// And still type checked
			this.setState({ foo: 123 }); // Error: Cannot assign number to a string
		}
	}
}

module seven {
var foo = 123; 
var bar = foo.toString(); // Property 'toString' does not exist on type 'number'.


interface Math {
    seedrandom(seed?: string);
}

Math.seedrandom();

Date.parse
interface Date {

}

interface String {
    endsWith(suffix: string): boolean;
}

String.prototype.endsWith = function(suffix: string): boolean {
    var str: string = this;
    return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
}

console.log('foo bar'.endsWith('bas')); // false
console.log('foo bas'.endsWith('bas')); // true
}