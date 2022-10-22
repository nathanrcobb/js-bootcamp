// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let graceCalc = function (score, total) {
    let percent = (score / total) * 100
    let grade

    if (percent >= 90) {
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `You got a${grade === 'A' ? 'n' : ''} ${grade} (${percent}%)!`
}

let result = graceCalc(9, 10)

console.log(result)