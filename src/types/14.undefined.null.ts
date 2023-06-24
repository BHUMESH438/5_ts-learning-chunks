//null - js is not able to compute and ran into an error
//undefined - is not defined in the not defined
let aS: string;
// console.log(aS); //undefined
let saveButton: HTMLElement | null = document.getElementById('save'); //null
const users = [
  {
    name: 'bhu',
    age: 24
  },
  {
    name: 'err',
    age: 35
  }
];

const compareusers = users.find(user => user.name === aS);
