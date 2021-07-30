const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

console.log("Welcome to the password validator tool!");

reader.question("Please enter your password: ", function(answer) {
    console.log(answer)
    if (answer.length >= 10) {
        console.log("You have chosen an acceptable password.")
    } else {
        console.log("Please make sure your password meets the required criteria.")
    }
    reader.close()
});
