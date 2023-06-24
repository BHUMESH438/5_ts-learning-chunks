class Person2 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log('name:' + this.name);
    console.log('age:' + this.age);
  }
  mark() {
    return `436 is ${this.name}  mark`;
  }
}

let person4 = new Person2('kavia', 34);
let person5 = new Person2('bhumesh11', 34);
console.log(person4.name);
console.log(person5.name);

//this represent the current class values and scope is block scoped
