class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head')
  }

  findByValue (element) {
    let currentNode = this.head
    while (currentNode !== null && currentNode.element !== element) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  insert (newElement, element) {
    const existed = this.findByValue(element)
    if (existed === null) {
      console.log('insert place not found')
      return
    }
    let newNode = new Node(newElement)
    let currentnode = this.findByValue(element)
    newNode.next = currentnode.next
    currentnode.next = newNode
  }

  display () {
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
      console.log(currentNode.element)
    }
  }

  findPrevNode (element) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== element) {
      currentNode = currentNode.next
    }
    if (currentNode === null) {
      return -1
    }
    return currentNode
  }

  // Delete element 
  remove (element) {
    // check if existed
    const removeCandidateNode = this.findByValue(element)
    if (removeCandidateNode === null) {
      console.log('element not found')
      return
    }

    const prevNode = this.findPrevNode(element)
    if (prevNode) {
      prevNode.next = prevNode.next.next // equals prevNode.next = removeCandidateNode.next
    }
  }

  reverseList () {
    let currNode = this.head
    let prevNode = null
    let nextNode = null

    while (currNode) {
      // Store next node.
      nextNode = currNode.next

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode
      currNode = nextNode
    }

    // Reset head and tail.
    this.tail = this.head
    this.head = prevNode

    return this
  }
}

// Test
const nameList = new LinkedList()
nameList.insert('chen', 'head')
nameList.insert('curry', 'chen')
nameList.insert('sang', 'head')
nameList.insert('zhao', 'head')
nameList.display()
console.log('-------------start reverse------------')
nameList.reverseList()
nameList.display()
// console.log('-------------check circle------------')
// console.log(nameList.checkCircle())
// console.log('-------------remove the one before last ------------')
// nameList.removeByIndexFromEnd(2)
// nameList.display()

// const sortedList1 = new LinkedList()
// sortedList1.insert(9, 'head')
// sortedList1.insert(8, 'head')
// sortedList1.insert(7, 'head')
// sortedList1.insert(6, 'head')
// const sortedList2 = new LinkedList()
// sortedList2.insert(21, 'head')
// sortedList2.insert(20, 'head')
// sortedList2.insert(19, 'head')
// sortedList2.insert(18, 'head')
// console.log('-------------sort two list ------------')
// let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next)
// while (sortedList !== null) {
//     console.log(sortedList.element)
//     sortedList = sortedList.next
// }