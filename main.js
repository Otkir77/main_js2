let text = prompt("String turidagi ma'lumot kirting ")
let num = +prompt("Number turidagi ma'lumot kiriting ")
let boolean = prompt("Boolean turidagi ma'lumot kiriting ")

confirm("Hamma kiritgan ma'lumotlar to'g'riligiga ishonchingiz komilmi? ")

alert(`
Siz kiritgan ${text} so'zi ${typeof(text)} turida yozilgan,
Siz kiritgan ${num} so'zi ${typeof(num)} turida yozilgan,
Siz kiritgan ${boolean} so'zi ${typeof(boolean == boolean)} turida yozilgan,
`)