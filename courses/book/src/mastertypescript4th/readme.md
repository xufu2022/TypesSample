# Advanced type inference

        interface IAbRequired {
            a: number;
            b: string;
        }
        let ab: IAbRequired = {
            a: 1,
            b: "test"
        }
        type WeakInterface<T> = {
            [K in keyof T]?: T[K];
        }
        let allOptional: WeakInterface<IAbRequired> = {}

## Partial, Readonly, Record, and Pick

Using mapped types that transform properties are seen as so fundamental that their definitions have been included in the standard TypeScript type definitions. The WeakType type alias that we created earlier is actually called **Partial**


        /**
        * Make all properties in T optional
        */
        type Partial<T> = {
            [P in keyof T]?: T[P];
        };

Here, we can see the type definition for a type named Partial, which will transform each property in the type named T into an optional property. There is also a mapped type named **Required**, which will do the opposite of Partial, and mark each property as required.


        interface IAbc {
            a: number;
            b: string;
            c: boolean
        }
        type PickAb = Pick<IAbc, "a" | "b">;
        let pickAbObject: PickAb = {
            a: 1,
            b: "test"
        }

The final mapped type that we will explore is the Record mapped type, which is used to construct a type on the fly. It is almost the opposite of the Pick mapped type, and uses a provided list of properties as a string literal to define what properties the type must have. Consider the following example:type RecordedCd = Record<"c" | "d", number>;

        let recordedCdVar: RecordedCd = {
            c: 1,
            d: 1
        };

## Conditional types

        type NumberOrString<T> = T extends number ? number : string;

        type abc_ab_a<T> = 
            T extends IAbc ? [number, string, boolean] :
            T extends IAb ? [number, string] :
            T extends IA ? [number] :
            never;

        function getTupleStringAbc<T>
            (tupleValue: abc_ab_a<T>): string 
        {
            let [...tupleDestructured] = tupleValue;
            let returnString = "|";
            for (let value of tupleDestructured) {
                returnString += `${value}|`;
            }
            return returnString;
        }

## Conditional type inference

There is a further, and more esoteric version of the conditional type syntax, where we are able to infer a new type as part of a conditional type statement. The simplest form of these inferred types can best be explained by an example, as follows:

        type inferFromPropertyType<T> =
            T extends { id: infer U } ? U : never;

Here, we have defined a type named inferFromPropertyType that is using the generic syntax to define a type named T. We are then using a conditional type to check whether the type of T extends an object that has a property named id. If the type of T is an object that has a property named id, then we will return the type of the id property itself. This is done by introducing a new type name, which in this case is U, and using the infer keyword. In other words, we are inferring a new generic type named U that is the type of the id property of the object T. If the object T does not have an id property, then we simply return never. Let's now take a look at how we would use this inferred conditional type, as follows: