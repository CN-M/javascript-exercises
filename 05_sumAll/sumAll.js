const sumAll = function(a, b) {
    if (a < 0 || b < 0){
        return 'ERROR'
        
    } else if (typeof a === 'number' && typeof b === 'number') {
        if (a > b){
            [a, b] = [b, a];
        }
        c = b + 1
        array = [...Array(c).keys()]
        index = array.indexOf(a)
        finalArray = array.slice(index, c)
        return finalArray.reduce((d, e) => d + e, 0)

    } else {
        return 'ERROR'
    }
    
};

// Do not edit below this line
module.exports = sumAll;