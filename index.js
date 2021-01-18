// Code your solutions in this file
names(["Ada","Brendan","Ali"], "birthday")
function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        console.log('Thank you, ${names[0][i]} for a wonderful ${names[1]} gift!');
    }
    return names
}