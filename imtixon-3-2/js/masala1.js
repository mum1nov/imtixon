var longText = "Let's say you're trying to use quotation marks inside a string. You'll need to use opposite quotation marks inside and outside of JavaScript single or double quotes. That means strings containing single quotes need to use double quotes and strings containing double quotes need to use single quotes."

// 1-shart
// Console'ga huddi har bir so'zni katta harf bilan chiqarishimiz kerak
// Let's Say You're Trying To Use Quotation Marks.....
function capitalis(someText) {
    var splited = someText.split(' ')
    var result = []
    for (const soz of splited) {
        var text = soz.split('')
        text[0] = text[0].toUpperCase()
        result.push(text.join(''))
    }
    return result.join(' ')
}
console.log(capitalis(longText))
// 2-shart
// Funksiya yasashingiz kerak bo'ladi. Matn va harfni kiritsam. Harflarni sonini aytishi kerak bo'ladi. Agar harf bo'lmasa 0 qaytaradi. Bunda katta harflarni ham chichkina qilamiz va ular ham sanoqga kiradi, masalan A va a bo'lsa 2ta bo'ladi

var loverCase = longText.toLowerCase()
var split = loverCase.split('')
var numberLetter = 0
function countLetters(text, letter) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] == letter) {
            numberLetter++
        }
    }
    return numberLetter

}

console.log(countLetters(split, 'a'))

// 14


// 3-shart
// Nechta katta harf ishtirok etgan va ularni console'ga chiqaring

var splitted = longText.split('')
var textArray = []
for (const item of splitted) {
    if (item.trim() == 0 || item == '.' || item == ',' || item == "'") { } else
        if (item == item.toUpperCase()) {
            textArray.push(item)
        }
}
console.log(textArray)
