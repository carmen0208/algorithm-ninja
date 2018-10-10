function HashTable () {
  this.table = new Array(137)
  this.simpleHash = simpleHash
  this.showDistro = showDistro
  this.put = put
}

function simpleHash (data) {
  var key = 0
  for (var i = 0; i < data.length; i++) {
    key += data.charCodeAt(i)
  }
  console.log('Hash value: ' + data + ' -> ' + key)
  return key % this.table.length
}

function showDistro () {
  // var n = 0
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log(`${i} : ${this.table[i]}`)
    }
  }
}

function put (data) {
  var pos = this.simpleHash(data)
  this.table[pos] !== undefined ? this.table[pos].push(data): this.table[pos] = new Array(data)
}

var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan', 'Carmen', 'Cerman']

var hTable = new HashTable()
for (var i = 0; i < someNames.length; i++) {
  hTable.put(someNames[i])
}
hTable.showDistro()

// Hash value: David -> 488
// Hash value: Jennifer -> 817
// Hash value: Donnie -> 605
// Hash value: Raymond -> 730
// Hash value: Cynthia -> 720
// Hash value: Mike -> 390
// Hash value: Clayton -> 730
// Hash value: Danny -> 506
// Hash value: Jonathan -> 819
// Hash value: Carmen -> 598
// Hash value: Cerman -> 598
// 35 : Cynthia
// 45 : Raymond,Clayton
// 50 : Carmen,Cerman
// 57 : Donnie
// 77 : David
// 95 : Danny
// 116 : Mike
// 132 : Jennifer
// 134 : Jonathan