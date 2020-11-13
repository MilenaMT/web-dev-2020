let name = 'Milena'

let subtotal ="27.98"
const taxRate ="0.07"

let taxTotal = subtotal * taxRate
let total = subtotal + taxTotal

console.log('Hello,' + name)
//We need to round / truncate the total to two decimals
console.log ("Subtotal:   " + subtotal)
console.log ("Tax:        " + taxTotal.toFixed(2))
console.log ("-------------------")
console.log ("Total:      " + total)