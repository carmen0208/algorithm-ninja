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
function reverseString( str ) {
  // reducer()
  return str.split('').reduce((total, current) => current + total, '')
}

module.exports = reverseString