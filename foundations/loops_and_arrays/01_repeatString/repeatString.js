const repeatString = function(string, num) {
    let temp = [];
    if(num<0){
        return "ERROR";
    }
    for(let i=0;i<num;i++){
        temp.push(string);
    }
    return temp.join("");
};

// Do not edit below this line
module.exports = repeatString;
