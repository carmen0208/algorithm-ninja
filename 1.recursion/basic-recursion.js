function factorial(number) {
  if(number == 1) {
    return number
  } else {
    return number * factorial(number-1)
  }
}

console.log(factorial(5))

var nums = []
for(var i=0;i<10;++i){
  nums[i] = i+1;
}
var samenums = nums;
console.log(nums)