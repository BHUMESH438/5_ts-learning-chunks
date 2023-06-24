class User1 {
  name: string;
  age: number;
  height: number;
  BMI: number | string;
  constructor(name: string, age: number, height: number, BMI: number | string) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.BMI = BMI;
  }
}

class Useronly1 extends User1 {
  BMIresult: string;
  status: boolean = true;
  bodycount: string | number;
  constructor(BMI: number | string, BMIresult: string, bodycount: string | number) {
    super('petertha', 24, 174, BMI); //if we dont want the age parameter to be in class instance arg we can define it in the parent or in the child class
    //but we must pass the parameters inside the super class as the parent class constructor will expect the value
    (this.BMIresult = BMIresult), (this.bodycount = bodycount);
  }
}

const peter1: User1 = new User1('peter', 24, 174, 28);
const peterParents1: Useronly1 = new Useronly1(28, 'overwiegh', 56); //assigning the class we can declare the typeof obj in the const which is the class we mentioned or the new class
console.log('peter', peter1);
console.log('peter', peterParents1);
