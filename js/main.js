/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/
//Bad Code:
/*
function getSum(a,b){
    let ans = 0
    if(a<b){
        for(let i = a; i<b;i++){
        ans+=i
        
        }
    }else
    if(b<a){
        for(let i = b; i<a;i++){
        ans+=i
        
        }
    }
    console.log(ans + b)
  }
*/
//Good Code
/*
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }
*/
/*
  Clock shows h hours, m minutes and s seconds after midnight.

  Your task is to write a function which returns the time since midnight in milliseconds.
*/
/*
function past(h, m, s){
    return (s*1000) + (m*60000) + (h* 3600000)
  }


function accum(s) {
    let ans = []
    ans.push(s.charAt(0))
	for(let i = 0; i<s.length;i++){
        
        for(l=0;l<i;l++){
            ans.push(s.charAt(i))
        }
  }
  console.log(ans)
  
}
*/
function lovefunc(flower1, flower2){
  if(flower1%2===0 && flower2%2!==0){
    return true
  }else if(flower2%2===0 && flower1%2!==0){
    return true
  }else{
    return false
  }
}
