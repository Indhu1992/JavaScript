// Implicit conversion
console.log(true + '3')
console.log('4'-'2')
console.log('5'- true)
console.log('5'-'4')
console.log('6'+'6')

//Explicit converstion
console.log(Number('5'))
console.log(parseInt('5'))
console.log(parseFloat('3.14'))
console.log(String(500))
console.log(String(true))
console.log(String(null))
console.log(String(undefined))
console.log((500).toString())
console.log(Boolean(10)) //null undefined 0 '' NaN

// Equality

const var1 = 10
const var2 =''

console.log(var1 == var2)
console.log(var1 === var2)
