class User {
  //class is the blue print to define the obj
  //property
  name: string;
  age: number;
  height: number;
  BMI: number | string;
  //when defining the property give the ; not the , in both property and in the constructor
  constructor(name: string, age: number, height: number, BMI: number | string) {
    this.name = name; //assing the constructor values to the property
    this.age = age;
    this.height = height;
    this.BMI = BMI;
  }
}
class Useronly extends User {
  //adding extra property
  BMIresult: string;
  status: boolean = true;
  bodycount: string | number;
  constructor(name: string, age: number, height: number, BMI: number | string, BMIresult: string, bodycount: string | number) {
    super(name, age, height, BMI); //super key word must be given inside the child class constrctor
    //super key word property contains the value of the parent class
    (this.BMIresult = BMIresult), (this.bodycount = bodycount); //no need for defining the parent class property in child constructor as the parent class will invoked by the super method
  }
}

const peter: User = new User('peter', 24, 174, 28);
const peterParents: Useronly = new Useronly('peter', 24, 174, 28, 'overwiegh', 56);
console.log('peter', peter);
console.log('peter', peterParents);
