const reverseString = require('./reverseString')

test('Reverse function exists', () => {
  expect(reverseString).toBeDefined()
})

test('Reverse reversed a string', () => {
  expect(reverseString('abcd')).toEqual('dcba')
})

test('Reverse reversed a string', () => {
  expect(reverseString('   abcd')).toEqual('dcba   ')
})
