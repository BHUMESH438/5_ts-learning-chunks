const checkarray1: Array<string> = ['a', 'b'];
const checkarray2: Array<number> = [1, 32];
const checkarray3: Array<string | number> = ['b', 1, 32];
const checkarray4: (string | number)[] = ['b', 1, 32];
const checkarray5: number[] = [1, 32];

//if we wnat the pasanger to the object which has the same property all over the array of obj then  we can
//form the obj body type
type pasanger = {
  name: string;
  age: number;
  image?: string;
};
//use that in all the array type
//array is a single type so when we want to get more same values of obj we can use like this
type detailsArray = pasanger[];
//make that array in a variable of data
const ArrayofsameobjProp: detailsArray = [
  {
    name: 'bhu',
    age: 23
  },
  {
    name: 'bhu',
    age: 23
  },
  {
    name: 'bhu13',
    age: 233
  }
];
