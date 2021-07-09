module.exports.add= function(x, y){
    return x+y;
}
module.exports.subtract= function(x, y){
    return x-y;
}
module.exports.multiply= function(x, y){
    return x*y;
}
module.exports.divide = function(x, y){
    if (y!==0){
    return x/y;
    }
    else 
    {
        console.log("division by zero not applicable")
    }
}

module.exports.pi = 3.14;