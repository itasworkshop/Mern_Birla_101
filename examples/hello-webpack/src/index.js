console.log("hello webpack")

class User {
    name = 'Rajesh'
}

const user = new User()

const p = document.createElement('p')
p.textContent = `Hi this is ${user.name}.`

const heading = document.createElement('h1')
heading.textContent = 'My Website!!!'

const app = document.querySelector('#root')
app.append(heading)