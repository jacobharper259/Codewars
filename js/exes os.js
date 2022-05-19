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