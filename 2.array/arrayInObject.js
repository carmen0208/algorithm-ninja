function weekTemps() {
  this.dataSource = []
  this.add = add
  this.average = average
}

function add(temp) {
  this.dataSource.push(temp)
}

function average() {
  const reducer = (start, currentValue) =>  {
    return start + currentValue
  }
  var sum = this.dataSource.reduce(reducer)
  console.log(sum)
  return sum / this.dataSource.length
}

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average());