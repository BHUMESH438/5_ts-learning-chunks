class Person1 {
  name = 'bhumesh';
  age = 23;
  constructor(name: string, age: number) {
    console.log('name:' + name);
    console.log('age:' + age);
  }
  mark() {
    return `436 is your mark`;
  }
}

let person3 = new Person1('kavia', 34);
console.log(person3);
console.log(person3.mark());

//in ts class cant be self invoke
//if the constructor arg passed then it will take that for obj/fun or it will take the default arg
