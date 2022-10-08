function solve(arr){
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++){
        sum1 +=arr[i];
    }
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            arr[i] += i;
        }
        else{
            arr[i] += -i;
        }
    }
    
    console.log(arr)
    console.log(sum1);
     
    sum2 = 0;
    
    for (let i = 0; i < arr.length; i++){
        sum2 += arr[i];
    }    
    console.log(sum2)
   

}
solve([5,15,23,56,35]);
solve([-5,11,3,0,2]);