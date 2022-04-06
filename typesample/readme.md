# steps set up ts project

tsc --init

## Number vs Big number

## Type Checking

-   Check type 

    if(typeof B === 'string')

-   Check object contains property

        if ('startDate' in emp){ ...}

-   check instance type

        if (vehicle instanceof Truck)

## Discriminte Union

    interface cannot use instanceof

    can use switch if type specified in interface, can use common type which can be checked in interface

