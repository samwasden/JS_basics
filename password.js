const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

console.log("Welcome to the password validator tool!");
console.log()
console.log("Password Criteria \nMust be at least 10 characters long\nHave a minimum of 1 special character\nBe at least 1 Upper case letter\nHave no spaces")

let valid = false

function getPassword() {
    reader.question("Please enter your password: ", function(answer) {
        let specialChars = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "<", ">", ",", ".", "/", "?", ":", '"', "'", ";", "{", "}", "[", "]", "|"]
        let invalid = "This password is invalid. Please read criteria."
        let accepted = "This password meets all the criteria and is valid."
        let hasCaps = false
        let hasSpecial = false
        let noSpaces = true
        if (answer.length >= 10) {
            let answerArr = answer.split("");
            for (let i=0; i<answerArr.length; i++) {
                if (isNaN(answerArr[i])) {
                    if (specialChars.includes(answerArr[i])) {
                        hasSpecial = true;
                    } else if (answerArr[i].toUpperCase() === answerArr[i]) {
                        hasCaps = true
                    } 
                } else {
                    if (answerArr[i] === " ") {
                        noSpaces = false
                    }
                }
            }
        }
        if (hasCaps && hasSpecial && noSpaces) {
            valid = true
            console.log()
            console.log(accepted)
            console.log()
            reader.close() 
        } else {
            console.log()
            console.log(invalid) 
            console.log()
            reader.close()
        } 
    });
}

getPassword()