const products = [
    { name: 'iPhone', category: 'Electronics', price: 1000 },
    { name: 'Shirt', category: 'Clothing', price: 50 },
    { name: 'Laptop', category: 'Electronics', price: 1500 },
    { name: 'Jeans', category: 'Clothing', price: 80 },
    { name: 'Headphones', category: 'Electronics', price: 200 }
]


const output = products.reduce(function (acc, curr) {
    if (!acc[curr.category]) {
        acc[curr.category] = []
    }
    acc[curr.category].push(curr)
    return acc
}, {})

console.log(output)