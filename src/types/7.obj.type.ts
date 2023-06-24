//object type
//1.can be declared inside the type property of obj and use ; and in the value use ,
//declaring - shape of the obj
let article: {
  name: string;
  age: number;
  mobile: number;
  image?: string; //optional
  cupon: bigint;
};
//declaring the value of the object
article = {
  name: 'bhumehs',
  age: 24,
  mobile: 6383665184,
  image: 'asdfasfadsfas',
  cupon: 123432454565687n
};

//like above bywe can predefine the property of obj and values by literal syntax
//even we didnt declare the obj type syntax ts will implicityly declare the obj
