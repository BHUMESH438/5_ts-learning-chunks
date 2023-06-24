const checkStudent1: [string, number] = ['bhumeh', 23]; //tuples-array is predefined
type studentarraybody = [string, number | string, ...string[]];
//if you are declaring the type then you should declare it as type as it is a body and we can use it anyware
const passStudentList: studentarraybody = ['pass', '12', 'jon', 'de', 'de'];
const failStudentList: studentarraybody = ['pass', 23, 'jfon', 'de'];
console.log('>>>>>>pass', passStudentList);
console.log('>>>>>>fail', failStudentList);
//... must be an array type but not a obj type
