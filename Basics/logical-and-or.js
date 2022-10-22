// Logical And Operator - True if both sides are true, False otherwise
// Logical Or Operator - False if both sides are False, True otherwise

let temp = 55

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside.')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Eh... Do what you want.')
}

// Challenge

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menu.')
}