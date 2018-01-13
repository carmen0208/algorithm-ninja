//Way 1:
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }


//Way 2:
// function reverseString(str) {
//     let reversed = '';
//     for(let char of str) {
//         reversed = char + reversed;
//     }

//     return reversed;
// }


//Way 3:
function reverseString(str) {
    return str.split('').reduce((rev, index) => index+rev, '')
}

module.exports = reverseString;