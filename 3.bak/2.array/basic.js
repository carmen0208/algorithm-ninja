// Aggregate Array Operations
// copy one to another

var num = []
for (var i = 0 i < 10 i++) {
  num[i] = i + 1
}
console.log(num)
var copyednum = num
console.log(copyednum)
num[2] = 208
console.log(`copyednum: ${copyednum}`)
// Accessor Functions(indexOf, lastIndexOf)
var name = ['carmen', 'nico', 'lizzy', 'cherry', 'carmen']
console.log(`First Found Carmen at position ${name.indexOf('carmen')}`)
console.log(`Last Found Carmen at position ${name.lastIndexOf('carmen')}`)
// String representation of Array(toString(), join())
// deal with Arrays(concat, splice)
var itDiv = ['Mike', 'Clayton', 'Terrill', 'Raymond', 'Cynthia', 'Danny', 'Jennifer']
var dmpDept = itDiv.splice(3, 3)
var cisDept = itDiv
print(dmpDept) // Raymond,Cynthia,Danny
print(cisDept) // Mike,Clayton,Terrill,Jennifer
//Mutator Functions(push, pop, unshift, shift, splice)
var nums = [1,2,3,7,8,9]
var newElements = [4,5,6]
nums.splice(3,0,newElements)
print(nums) // 1,2,3,4,5,6,7,8,9
var nums = [1,2,3,100,200,300,400,4,5] nums.splice(3,4)
print(nums) // 1,2,3,4,5
// Put Array in Order(sort, reverse)
// Iterator(forEach(), every() -- if every in array return true, some() if some in array return true,
// reduce())
// map() -- return a new array
// filter --  function works similarly to every(), but instead of returning true if all the elements of an array satisfy a Boolean function
