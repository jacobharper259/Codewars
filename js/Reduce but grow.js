// Given a non-empty array of integers, return the result of multiplying the values together in order. 


function grow(x){
  let ans = 1
  for(let i = 0 ;i < x.length; i++){
    ans = ans * x[i] 
  }
  return ans
}