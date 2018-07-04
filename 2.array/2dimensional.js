Array.matrix = function(numrows, numcols, initial) {
  var arr=[]
  for(var i=0;i<numrows; i ++ ) {
    var cols = []
    for( var j=0;j< numcols; j ++) {
      cols[j] = initial
    }
    arr[i] = cols
  }
  return arr
}

var nums = Array.matrix(5, 6, 0)
console.log(nums)
//0:(6) [0, 0, 0, 0, 0, 0]
//1:(6) [0, 0, 0, 0, 0, 0]
//2:(6) [0, 0, 0, 0, 0, 0]
//3:(6) [0, 0, 0, 0, 0, 0]
//4:(6) [0, 0, 0, 0, 0, 0]