const fibonacci = function(index) {
    if (index < 0)
        return 'OOPS'
    if (index == 1 || index == 2)
        return 1
    seq = [];
        for (let i = 0; i < index; i++) {
            if (seq.length < 3) {
                seq.push(i)
            } else {
                seq[i] = seq[i-1] + seq[i-2]
            }
        }
    return seq[index-1]
};

console.table(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
