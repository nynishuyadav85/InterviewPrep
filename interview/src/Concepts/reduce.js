const arr = [2, 4, 6, 3, 7]


const output = arr.reduce(function (acc, curr) {
    if (curr > acc) {
        acc = curr
    }
    return acc

}, 0)

console.log(output)