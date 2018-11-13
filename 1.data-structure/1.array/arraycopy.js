const shallowCopy = (oldArray, newArray) => {
  newArray = oldArray
  return newArray
}

const deepCopy = (oldArray, newArray) => {
  for (var i = 0; i < oldArray.length; i++) {
    newArray[i] = oldArray[i]
  }
  return newArray
}

let num = [1,2,3,4,5,6,7,8,9,10]
let shallowArray = []
let deepArray = []

shallowArray = shallowCopy(num, shallowArray)
deepArray = deepCopy(num, deepArray)

num[5] = 10000000
console.log('orignal array')
console.log(num)
console.log('check shallowArray\'s value after change old array value')
console.log(shallowArray)
console.log('check deepArray\'s value after change old array value')
console.log(deepArray)
