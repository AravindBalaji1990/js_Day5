function division(a,b){
    if(b == 0){
        throw new Error("Division error ")
    }
    return a/b;
}

try{
    console.log(division(10,0));
}catch(error){
    console.log(error)
}