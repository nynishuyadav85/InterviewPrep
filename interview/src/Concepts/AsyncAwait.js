const users = [
    {
        name: "nishu",
        age: 24
    },
    {
        name: "nishant",
        age: 28
    }
]

function getUsers() {
    setTimeout(() => {
        let output = ""
        users.forEach((user) => {
            output += `<li>${user.name}</li>`
        })
        document.body.innerHTML = output

    }, 1000)
}

getUsers()