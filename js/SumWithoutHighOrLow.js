// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
    if(array===null || array===undefined|| array.length<=1){
      return 0
    }
    let min = Math.min(...array)
    let max = Math.max(...array)
    let total = 0
    for(let i =0;i<array.length;i++){
      total+= array[i]
    }
    console.log(`${total} ${min} ${max}`)
    return total - (min+max)
    
  }