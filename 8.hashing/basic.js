function HashTable() {
  this.table = new Array(137)
  this.simpleHash = simpleHash
  this.showDistro = showDistro
  this.put = put
}

function simpleHash(data) {
  var key = 0
  for( var i=0;i<data.length; i++) {
    key += data.charCodeAt(i)
  }
  console.log("Hash value: " + data + " -> " + key);
  return key % this.table.length
}

function showDistro() {
  var n=0;
  for( var i=0;i<this.table.length; i++) {
    if(this.table[i] != undefined)
    console.log(`${i} : ${this.table[i]}`)
  }
}

function put(data) {
  var pos = this.simpleHash(data)
  this.table[pos] = data
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan","Carmen"]

var hTable = new HashTable()
for( var i=0;i< someNames.length; i++) {
  hTable.put(someNames[i])
}
hTable.showDistro()