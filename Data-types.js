// Datatype-> primitive->strings-> it can be declared with single, double and back tick ''""``
const name='Vishwas'
const language='Javascript'
const channel=`Codevolution`
//Number-> interger and floating point
const total=0
const PI=3.14

//Boolean TRUE or FALSE, to run the condition value
const isPrimeNumber=true
const isNewUser=false

//If the var is notassigned then its undefined
let result
console.log(result)
// or
const res=undefined
// null value
const data=null
//BigInt type
// Symbol type both are newly added no need to worry on these
//Non-primitive-> Object-> collection of values - > complex of datatypes-> contain properties defined as key 
// value pairs
// snippet
const person={
    firstName:'bruce',
    lastName:'wayne',
    age:30,
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.firstName+person.lastName)

// Array type-> written with [] seperated by commas
const oddNumbers=[1,2,3,4,5,6]
// Displays the first element of the array
console.log(oddNumbers[0])
// JavaScript is dynamically types variable
let a=10
a='vishwas'
a=true
// it will give an output as true as a=true is a last assigned, it will not through an error or conflict
console.log(a)

