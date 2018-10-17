function Node (data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function show () {
  return this.data
}

function BST () {
  this.root = null
  this.insert = insert
}

function insert (data) {
  let n = new Node(data, null, null, null)
  if (this.root == null) {
    this.root = n
  } else {
    var current = this.root
    var parent
    while (true) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current == null) {
          parent.left = n
          break
        }
      } else {
        current = current.right
        if (current == null) {
          parent.right = n
          break
        }
      }
    }
  }
}

// traversal Depth
function inOrder (node) {
  if(node != null) {
    inOrder(node.left)
    console.log(node.show())
    inOrder(node.right)
  }
}

// traversal Width
function preOrder (node) {
  if(node !=null) {
    console.log(node.show())
    preOrder(node.left)
    preOrder(node.right)
  }
}

function postOrder (node) {
  if (node != null) {
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.show())
  }
}

var nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.log('Traversal In Order :')
inOrder(nums.root)
console.log('Traversal Pre Order:')
preOrder(nums.root)

console.log('Traversal Post Order')
postOrder(nums.root)
