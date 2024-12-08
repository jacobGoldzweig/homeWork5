// question 1:

function question1(num1, num2) {
    if (num1 < num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

question1(45, 22)

//question 2:

function question2(str1, str2, str3, str4) {
    let count = 0
    if (str1.length > 3) {
        ++count
    }
    if (str2.length > 3) {
        ++count
    }
    if (str3.length > 3) {
        ++count
    }
    if (str4.length > 3) {
        ++count
    }
    return count
}

console.log(question2('hi', 'hello', 'world', 'me'))

//question 3

function convertAToLowercase() {
    let inputText = document.getElementById('highToLowercaseInput').value
    if (inputText.includes('a')) {
        let resultText = inputText.replace('a', 'A')
        document.getElementById('result').innerText = resultText
    } else {
        document.getElementById('result').innerText = inputText
    }
}

let myButton = document.getElementById('myButton');
if (myButton) {
    myButton.addEventListener('click', convertAToLowercase);
}

//question 4

function question4(retNumber) {
    let number = retNumber
    let parity = 'even'
    let sign = 'zero'
    if (number % 2 !== 0) {
        parity = 'odd'
    }

    if (number > 0) {
        sign = 'positive'
    } else if (number < 0) {
        sign = 'negative'
    }
    return `${parity} ${sign}`
}

let ans = question4(5)
console.log(ans)

ans = question4(-2)
console.log(ans)

ans = question4(0)
console.log(ans)

//question 5

function question5(str) {
    if (str.length > 1) {
        if (str[0] === str[str.length - 1]) {
            str = str.substring(1, str.length - 1)
        }
    }
    return str
}

let result1 = question5('abca')
console.log(result1)

let result2 = question5('hello')
console.log(result2)

let result3 = question5('a')
console.log(result3)

//question 6

function question6(lastStr) {
    if (lastStr.includes('*')) {
        lastStr = lastStr.replace(/\*/g, '')
        console.log(lastStr)
    } else if (lastStr.includes('@')) {
        lastStr = '*' + lastStr
        console.log(lastStr)
    } else if (lastStr.includes('₪')) {
        console.log('new shekel')
    } else {
        console.log(lastStr)
    }
}

question6('hello*world')

question6('hello@world')

question6('hello')

question6('hello')

question6('hello₪world')

question6('hello world')