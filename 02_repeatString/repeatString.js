const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    } else {
        list = []
    for (i = 1; i <= num; i++ ){
        list.push(string)
    } return list.toString().replaceAll(',','')
    }
    
};

// Do not edit below this line
module.exports = repeatString;