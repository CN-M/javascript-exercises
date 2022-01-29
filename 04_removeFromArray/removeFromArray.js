const removeFromArray = function(array, ...elements) {
    for (i in elements) {
        if (array.includes(elements[i])){
            elementIndex = array.indexOf(elements[i])
            array.splice(elementIndex, 1)
        }
    }
    return array

}

// Do not edit below this line
module.exports = removeFromArray;
