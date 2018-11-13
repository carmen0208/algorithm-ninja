// O(1)
const access = (array, index) => {
  return array[index]
}

const array = [1, 'word', 3.14, { a: 1 }]
console.log(access(array, 2))

// O(n)
const search = (array, element) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i
    }
  }
}

console.log(search(array, 'word'))

// O(n) + O(n) = O(n)
const remove = (array, element) => {
  // O(n)
  const index = search(array, element)
  // O(n)
  array.splice(index, 1)
  return array
}

console.log(remove(array, 'word'))

// O(n)
const insert = (array, element, index) => {
  array.splice(index, 0, element)
  return array
}

console.log(insert(array, 'word', 1))
