// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge

let convertFahrenheitToCelsius = function (tempFahrenheit) {
    let tempCelsius = (tempFahrenheit - 32) * 5/9
    return tempCelsius
}

let val = convertFahrenheitToCelsius(32)
let val2 = convertFahrenheitToCelsius(68)

console.log(val)
console.log(val2)