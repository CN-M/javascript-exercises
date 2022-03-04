const re = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g

const palindromes = function (string) {
    return joinString(string) === reverseString(string)
};

const reverseString = (string) => string
                                .replaceAll(re, '')
                                .replaceAll(' ','')
                                .toLowerCase()
                                .split('')
                                .reverse()
                                .join('')                

const joinString = (string) => string
                                .replaceAll(re, '')
                                .replaceAll(' ','')
                                .toLowerCase()

// Do not edit below this line
module.exports = palindromes;