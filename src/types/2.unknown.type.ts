function checkunknown(a: unknown) {
  if (typeof a === 'number') {
    return a * 2;
  } else {
    return 'please provide valid number';
  }
}
console.log('>>>>>>>', checkunknown(2));
console.log('>>>>>>>', checkunknown('hi'));

//if we also dont know the input type and ts also dont know means it we can use unknown to check the datatype by internal validation
//if right ts will res   ts  force us to give datatype unlike any
