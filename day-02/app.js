/*
 * Day 02
 */
//todo level 1
let challenge = "30 Days Of JavaScript"
console.log("String is:", challenge)
console.log("Length:", challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 2))
console.log(challenge.replace("Days Of JavaScript", ""))
console.log("String contain a word Script", challenge.includes("Script"))
console.log(challenge.split(""))
console.log(challenge.split(" "))

const company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(company.split(","))

console.log(challenge.replace("JavaScript", "Python"))
console.log("Char at index 15 is", challenge.charAt(15))
console.log("Character code of J is", challenge.charCodeAt(15))
console.log("Position of the first occurrence of a is", challenge.indexOf("a"))
console.log(
    "Position of the last occurrence of a is",
    challenge.lastIndexOf("a")
)

const string =
    "You cannot end a sentence with because because because is a conjunction"
console.log(
    "Position of the first occurrence of the word because is",
    string.indexOf("because")
)
console.log(
    "Position of the last occurrence of the word because is",
    string.lastIndexOf("because")
)

console.log(challenge.trim())
console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("JavaScript"))
console.log(challenge.match(/a/gi))
console.log((a = "30 Days Of".concat(" JavaScript")))
console.log(challenge.repeat(2))

//todo level 2
const statement =
    "%cThe quote " +
    `%c'There is no exercise better for the heart than reaching down and lifting people up.' ` +
    "%cby John Holmes teaches us to " +
    "%chelp " +
    "%cone another."
console.log(statement, "", "color: #1c7d4d", "", "color: #6e59d9", "")

const quoteMotherTeresa = `%c"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(quoteMotherTeresa, "color: #1c7d4d")

console.log(`Type of '10' equal 10 is`, typeof "10" == typeof 10)
let number = 9.8
console.log(Math.round(number))
console.log(
    `'on' is found in both python and jargon`,
    "python".includes("on") && "jargon".includes("on")
)
const randRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log("Rand Num from 0-100", randRange(0, 100))
console.log("Rand Num from 50-100", randRange(50, 100))
console.log("Rand Num from 0-255", randRange(0, 255))

const strJavaScript = "JavaScript"
console.log(
    "Random char in JavaScript is",
    strJavaScript.charAt(randRange(0, strJavaScript.length))
)
let str = ""
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if( j == 0) {
            str += (i+1).toString() + ' ';
        } else {
            str += Math.pow(i+1, j - 1) + ' ';
        }
        if(j == 4) {
            str = str.trim() + '\n';
        }
    }
}
console.log(str)