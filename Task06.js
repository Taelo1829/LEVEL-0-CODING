function maximum(...num){
    let max = 0;
    for(let i = 0 ; i < num.length;i++){
        if(max < num[i]){
            max = num[i];
        }
    }
 
        return max;
    
}
console.log(maximum(1,22,3,2));