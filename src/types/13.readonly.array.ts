//array in js and typescript are immutable we can change the values of the array so were ever it is referenced it will use mutate the array
let checkreadOnly: readonly number[] = [2, 3, 4, 54, 1];
console.log(checkreadOnly);
//checkreadOnly.push(34)//error property push doesnot exist on the respective read only array
//we only use this to copy and read the existing property of the array
type checkreadOnly1 = Readonly<string[]>;
type checkreadOnly2 = Readonly<[...string[]]>;
const checkreadOnly3: readonly [string | number] = ['asssssssssss'];
const checkreadOnly4: readonly string[] = ['asssssssssss'];
