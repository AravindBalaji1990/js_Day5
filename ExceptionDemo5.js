function division(x,y){
    try{
        if(y ===0 ){
            throw new Error('Division not possible')
        }
        return x/y;
    }catch(error){
        console.error(error.message)
    }
  
}

console.log(division(10,2))
console.log(division(2,0))


function arrayexception(){
    try{
    const arr = [1,2,3]
    const index =6
    console.log("value : " +arr[index])
}catch(error){
    console.error(error.message)
}
}
arrayexception()