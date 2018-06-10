// Aggregate Array Operations
var num = []
for (var i=0; i< 10; i++ ) {
  num[i] = i+1
}
console.log(num)
// Accessor Functions
var name = ['carmen', 'nico', 'lizzy','cherry', 'carmen']
console.log(`First Found Carmen at position ${name.indexOf('carmen')}`)
console.log(`Last Found Carmen at position ${name.lastIndexOf('carmen')}`)