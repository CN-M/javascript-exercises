const findTheOldest = function(array) {
    array.sort((a,b) => {
        if (!b.yearOfDeath)
            b.yearOfDeath = (new Date().getFullYear())
        
        let person_A = a.yearOfDeath - a.yearOfBirth;
        let person_B = b.yearOfDeath - b.yearOfBirth;
        if (person_A > person_B) {
            return -1
        } 
        return 1
    });
    return array[0]
};

// Do not edit below this line
module.exports = findTheOldest;
