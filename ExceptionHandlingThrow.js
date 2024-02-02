function divide(a,b){
    if(b===0){
        throw new Error("0 is not a proper value")
    }
    return a/b;
}

try{
    let result = divide(10,0)
    console.log(result)
}catch(s){
    console.error(s.message)
}finally{
    console.log("executing from finally block")
}