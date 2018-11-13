// List is a liner sequence of elements
class ADTList {
  constructor() {
    this.dataStore = []
    this.listSize = 0
  }

  append(element) {
    this.dataStore[this.listSize++] = element
  }

  find(element) {

  }

  remove(element) {

  }
}

var personList = new ADTList()
personList.append('carmen')