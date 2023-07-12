//interface define how obj structure in advance
//interface force the obj to implement those properties
interface Person {
  name: string;
  email?: string; //optional property
  phone?: number;
  greet?: () => void;
}

const person: Person = { name: 'bhumesh' };
console.log(person.name);

//interface can be used to extend the property and can force the child to inherit it
//can extend interface using extend keyword
interface cusUser1withoutaddress {
  name: string;
  email: string;
  phone: number;
}

interface cusUser2withaddress extends cusUser1withoutaddress {
  name: string;
  email: string;
  phone: number;
  address: string;
}

const user11: cusUser1withoutaddress = {
  name: 'bhumesh',
  email: 'asd',
  phone: 123
};

const user12: cusUser2withaddress = {
  name: 'bhumesh',
  email: 'asd',
  phone: 123,
  address: 'asdasd'
};

console.log(user11);
console.log(user12);
