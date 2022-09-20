
//
// conditional type chaining
//

// interface IA {
//     a: number;
// }

// interface IAb {
//     a: number;
//     b: string;
// }

// interface IAbc {
//     a: number;
//     b: string;
//     c: boolean;
// }

// type abc_ab_a<T> = T extends IAbc ? [number, string, boolean] :
//     T extends IAb ? [number, string] :
//     T extends IA ? [number] :
//     never;

// function getTupleStringAbc<T>(tupleValue: abc_ab_a<T>): string {
//     let [...tupleDestructured] = tupleValue;
//     let returnString = "|";
//     for (let value of tupleDestructured) {
//         returnString += `${value}|`;
//     }
//     return returnString;
// }

// let keyA = getTupleStringAbc<IA>([1]);
// console.log(`keyA = ${keyA}`);

// let keyAb = getTupleStringAbc<IAb>([1, "test"]);
// console.log(`keyAb = ${keyAb}`);

// let keyAbc = getTupleStringAbc<IAbc>([1, "test", true]);
// console.log(`keyAbc = ${keyAbc}`);

// // 
// // distributed conditional types
// //

// type dateOrNumberOrString<T> =
//     T extends Date ? Date :
//     T extends number ? Date | number :
//     T extends string ? Date | number | string :
//     never;

// function compareValues<
//     T extends string | number | Date | boolean
// >(
//     input: T, compareTo: dateOrNumberOrString<T>
// ) {
//     // do comparison
// }

// compareValues(new Date(), new Date());
// compareValues(1, new Date());
// compareValues(1, 2)
// compareValues("test", new Date());
// compareValues("test", 1);
// compareValues("test", "test");

//
// conditional type inference
//

type inferFromPropertyType<T> =
    T extends { id: infer U } ? U : never;

function testInferFromPropertyType<T>(
    arg: inferFromPropertyType<T>
) { 
    console.log(arg);
}

testInferFromPropertyType<{ id: string }>("test");
testInferFromPropertyType<{ id: number }>(1);
testInferFromPropertyType<{ id: string }>("ttt");

type myt={
    id:string,
    value:number,
    a:string
}

let cp:myt={id:"yy",value:9,a:"hjh"}

testInferFromPropertyType<myt>("g");
//
// type inference from function signatures
//

type inferredFromFnParam<T> =
    T extends (a: infer U) => void ? U : never;

function testInferredFromFnParam<T>(
    arg: inferredFromFnParam<T>
) {
    console.log(arg);
 }

testInferredFromFnParam<(a: number) => void>(1);
testInferredFromFnParam<(a: string) => void>("test");

testInferredFromFnParam<(a: myt) => void>(cp);


type inferredFromFnReturnType<T> =
    T extends (a: string) => infer U ? U : never;

type inferredFromFnReturnTypeMY<T> =
    T extends (a: myt) => infer U ? U : never;

function testInferredFromReturnType<T>(
    arg: inferredFromFnReturnType<T>
) { }

function testInferredFromReturnTypeMY<T>(
    arg: inferredFromFnReturnTypeMY<T>
) {
    return arg;
 }

testInferredFromReturnType<(a: string) => number>(1);
testInferredFromReturnType<(a: string) => myt>(cp);
testInferredFromReturnType<(a: string) => boolean>(false);
testInferredFromReturnTypeMY<(a: myt) => myt>(cp);
//
// type inference from arrays
//

type inferredTypeFromArray<T> = T extends (infer U)[] ? U[] : never;

function testInferredFromArray<T>(args: inferredTypeFromArray<T>) {
    console.log(args);
 }

// testInferredFromArray<string[]>("test");
// testInferredFromArray<number[]>(1);
testInferredFromArray<number[]>([1,2]);
testInferredFromArray<string[]>(["test","test"]);

//
// standard conditional types
//

// exclude: It will exclude those types given in the second generic parameter from the types given in the first generic parameter. In this example, we have specified that we wish to exclude the types of number and string from the list of types number | string | boolean.
type ExcludeStringAndNumber = Exclude<
    string | number | boolean,
    string | number>;
    let boolValue: ExcludeStringAndNumber = true;
// extract: The Extract conditionals type will return all matching types given in the second generic parameter from the list given in the first parameter
type StringOrNumber = Extract<
    string | boolean | never,
    string | number>;

let stringValue: StringOrNumber = "test";


// nonnullable: NonNullable to extract the types from a given type union that are not null or undefined. Removing null and undefined from the given type union
type NotNullOrUndef = NonNullable<number | undefined | null>;
let numValue: NotNullOrUndef = 1;
