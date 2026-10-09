const users = [
    { firstName: "akshay", lastName: "saini", age: 25 },
    { firstName: "nishant", lastName: "yadav", age: 25 },
    { firstName: "donald", lastName: "trump", age: 69 }
]

// const output = users.map(user => user.firstName + " " + user.lastName)

// console.log(output)



const output = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age]++
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log(output)