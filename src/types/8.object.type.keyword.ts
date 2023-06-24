//declaring - shape of the obj
let article1: {
  name: string;
  age: number;
  mobile: number;
  image?: string; //optional
  cupon: bigint;
};
//declaring the value of the object
article1 = {
  name: 'bhumehs',
  age: 24,
  mobile: 6383665184,
  image: 'asdfasfadsfas',
  cupon: 123432454565687n
};

//instead of doing like in above we can use obj keywords

//type alias
type Article = {
  //property syntax;
  author: string;
  title: string;
  content: string;
  image?: string;
};
//now using type alias declare the property and values for many object

let article2: Article = {
  author: 'bhumesj5',
  title: 'Altad',
  content: 'jojsdf'
};

let post: Article = {
  author: 'b23humesj5',
  title: 'Al233tad',
  content: 'joj233sdf'
};
