const { template } = require("@babel/core");

function minMedMax(n1, n2, n3) {
  let min 
  let mid
  let max

  //find min
  if(n1 < n2 && n1 < n3){
    min = n1
  }else if(n2 < n1 && n2 < n3){
    min = n2
  }else if(n3 < n1 && n3 < n2){
    min = n3
  }else if(n1 == n2 && n1 < n3){
    min = n1 || n2, max = n3
  }else if (n1 == n3 && n1 < n2){
    min = n1 || n3, max = n2
  }else if(n2 == n3 && n2 < n1){
    min = n2 || n3, max = n1
  }

  //find max
  if(n1 > n2 && n1 > n3){
    max = n1
  }else if(n2 > n1 && n2 > n3){
    max = n2
  }else if(n3 > n1 && n3 > n2){
    max = n3
  }else if(n1 == n2 && n1 > n3){
    max = n1 || n2, min = n3
  }else if(n1 == n3 && n1 > n2){
    max = n1 || n3, min = n2
  }else if(n2 == n3 && n2 > n1){
    max = n2 || n3, min = n2
  }

  //find mid

  if((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)){
    mid = n1
  }else if((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)){
    mid = n2
  }else if((n3 > n1 && n3 < n2) || (n3 < n1 && n3 > n2)){
    mid = n3
  }else if((n1 == n2) && (n1 > n3 || n1 < n3)){
    mid = n1 || n2
  }else if((n1 == n3) && (n1 > n2 || n1 < n2)){
    mid = n1 || n3
  }else if((n2 == n3) && (n2 > n1 || n2 < n1)){
    mid = n2 || n3
  }
  
     






  
  let Answer = { "min": min, "mid": mid, "max": max }
   return Answer;
}

// console.log(minMedMax(85, 30, 1));
// console.log(minMedMax(10, 0, 20));
// console.log(minMedMax(-5, 0, 10));
// console.log(minMedMax(5, 1, 1));
// console.log(minMedMax(-1, -8, 0));

console.log("Hello YoYo")


module.exports = minMedMax;
