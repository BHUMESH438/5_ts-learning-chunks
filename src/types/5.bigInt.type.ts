let checkbigint1 = BigInt(94867); //94867n
let checkcorrectbigint: bigint = BigInt(94867);
console.log('>>>>BigInt constructor>>>>>>>>>', checkbigint1); //94867n
console.log('>>>>BigInt constructor>>>>>>>>>', checkcorrectbigint); //94867

//in js numbers cant go beyon 2^23
const safeInt = Number.MAX_SAFE_INTEGER;
console.log('>>>>>>>safeInt 1>>>>>>', safeInt); //9007199254740991
const safeInt1 = safeInt + 10;
console.log('>>>>>>>safeInt 1+>>>>>>', safeInt1); //9007199254741000
const safeInt2 = safeInt + 10;
console.log('>>>>>>>safeInt 2+ >>>>>>', safeInt2); //9007199254741000
const safeInt3 = safeInt1 + safeInt2;
console.log('>>>>>>>safeInt >>>>>>', safeInt3);
console.log(safeInt1 === safeInt2); //true

//type number is not assignable to bigint -let a: bigint = 212343245345;
//so we must use n along wuth the number
let a: bigint = 212343245345n;
let b: bigint = 212343245345n;
let c: bigint = a + b;
console.log('>>>>>>>>>>>>>a,b,c', a, b, c);

//cons 1.bigint cannot have decimal values 232344.23n
//2.we cant use the math obj and we can use math obj with bigint
