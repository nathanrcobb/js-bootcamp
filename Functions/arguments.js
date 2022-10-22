// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)

console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - ' + 'Score: ' + score
}

let scoreText = getScoreText(undefined,99)
console.log(scoreText)

// Challenge

let getTip = function (total, percent = 0.2) {
    return total * percent
}

let tip = getTip(45, 0.15)
console.log(tip)