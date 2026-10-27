//Logical

//A

function totalAndAverage(sales){
    let result=[]
    let average=0;
   let total=0;
   for(let i=0;i<sales.length;i++){
    total +=sales[i]
   }
   average = Number((total / sales.length).toFixed(2));
   result.push(total,average)
   return  result
   
}
console.log(totalAndAverage([120,80,100,150]));



//B
function bestAndWorstDay(profits){
  let best=0
  let worst=0
  for(let i=0;i<profits.length;i++){
    if(profits[i]>profits[best]){
        best = i
    
    }
    if(profits[i]<profits[worst]){
        worst = i
    }
  }
  return  console.log("best:"+best, "worst:"+worst);
  
}

bestAndWorstDay([300,-50,120,500,-50]);


