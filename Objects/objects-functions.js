let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'People\'s History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge

let convertTempF = function (fahrenheit) {
    let temp = {
        celsius: (fahrenheit - 32) * 5/9,
        fahrenheit: fahrenheit,
        kelvin: ((fahrenheit + 459.67) * 5/9)
    }
    return temp
}

let result = convertTempF(74)

console.log(`${result.fahrenheit}F is ${result.celsius}C and ${result.kelvin}K.`)