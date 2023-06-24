let firstName: any = 'MARK';
console.log('>>>>>>firstName', firstName); //mark
firstName = 123;
console.log('>>>>>>firstName', firstName); //123
firstName = [5, 4, 3, 5];
console.log('>>>>>>firstName', firstName); //[...]
function check(number: any) {
  return number * 2;
}
console.log('>>>>>>check', check(3)); //3
console.log('>>>>>>check', check('sdf')); //error ask to give correct data for argument

//if we use any it is then it is js, we must assign a varaible or ts will pass to js compiler undefined /null/nan
