const sumAll = function(lim1, lim2) {
    let min, max, sum = 0;
    if(lim1 <0 || 
        lim2 < 0 || 
        Math.floor(lim1) !== lim1 ||
        Math.floor(lim2) !== lim2 ||
        typeof(lim1) !== "number" ||
        typeof(lim2) !== "number") {
        return "ERROR"
    }
    if(lim1<lim2){
        min = lim1;
        max = lim2;
    } else{
        max = lim1;
        min = lim2;
    }
    for(let i=min; i<=max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
