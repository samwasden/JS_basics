const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

console.log("Welcome to the password validator tool!");
console.log()
console.log("Password Criteria \nMust be at least 10 characters long\nHave a minimum of 1 special character\nBe at least 1 Upper case letter\nHave no spaces")

let valid = false

let congrats = `
          _           __ 
   ____  (_)_______  / / 
  / __ \ / / ___/ _ \ / / 
 / / / / / /__/  __/_/ 
/_/ /_/_/\ ___/\ ___(_)
`

let failure = `
        __                      _ __
   ____/ / ___  _____ ___ ____ (_) /_ 
  / __  / __ '/ __ ' __ / __  / / __/ 
 / /_/ / /_/ / / / / / / / / / / /_
  __,_/\ __,_/_/ /_/ /_/_/ /_/_/\ __/ 
  `

function getPassword() {
    reader.question("Please enter your password: ", function(answer) {
        let specialChars = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "<", ">", ",", ".", "/", "?", ":", '"', "'", ";", "{", "}", "[", "]", "|"]
        let invalid = "This password is invalid. Come on the criteria is not that hard."
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
            console.log(congrats)
            console.log(accepted)
            console.log()
            reader.close() 
        } else {
            console.log(failure)
            console.log(invalid) 
            console.log()
            reader.close()
        } 
    });
}

getPassword()