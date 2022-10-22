// Global scope(convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local scope (fahrenheit, tempCelsius)
        // Local scope (isFreezing)


let convertFahrenheitToCelsius = function (tempFahrenheit) {
    let tempCelsius = (tempFahrenheit - 32) * 5/9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return tempCelsius
}

let val = convertFahrenheitToCelsius(32)
let val2 = convertFahrenheitToCelsius(68)

console.log(val)
console.log(val2)