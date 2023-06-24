const addnumbers = (): void => console.log(1 + 2);
addnumbers(); // 3

const addnumbers1 = (): never => {
  throw new Error('bitch');
};
addnumbers1(); //never stops execution
addnumbers(); // it wont execute
