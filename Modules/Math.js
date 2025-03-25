function add(a , b){
    return a + b;
}

function sub(a , b){
    return a - b;
}

module.exports = {
    addfuc : add ,
    sunfun : sub 
} ;

//another way of exporting .
 exports.mul = (a,b) => a*b ;

 exports.div =(a,b) => a/b;

//there are various built in modules as well like fs , http , crypyo 