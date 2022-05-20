// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  //code here
let xs = 0
let os = 0 
for(let i = 0; i<str.length; i++){
  if(str.toUpperCase().charAt(i)=== "X"){
    xs++
  }else
  if(str.toUpperCase().charAt(i)=== "O"){
    os++
  }
}
console.log(str)
console.log(`${os} ${xs}`)
if(os===xs){
  return true
}else{
  return false
}
}