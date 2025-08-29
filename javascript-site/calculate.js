

const user = {
  name: "Александр",
  age: 28,
  city: "Москва",
  address: {
    street: 'ул. Пушкина, д. 1, кв. 1',
    zipcode: 123431
  },
  todos: ['sleep','eat','work','train','learn'],
  hasCat: true,
  yacht: false,
  toString() {
    return `{name: "${this.name}", age: "${this.age}  ...}`
  }

}

console.log(user)