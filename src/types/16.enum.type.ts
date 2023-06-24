import { a4, a2, a3, a5 } from './17.enum';
const a6: (number | string)[] = [a4, a3, a2];
export const person = {
  name: a6[2],
  posiotion: a5.admin,
  age: a6[0]
};
