//types-accessmodifires-public ,private,
//public- data can be modified in outside the class, parent class,child class
//protected- data can be modified in  parent class,child class
//private- data can be modified in   parent class

//public==================================================================================================================
class HomyPublics {
  public name: String; //property name with access type name
  age: number; // property name without any access name will be considered as public (default)
  //NOTE ERROR: Property 'age' has no initializer and is not definitely assigned in the constructor.
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let bhume1: HomyPublics = new HomyPublics('bhumesh', 24);
console.log('>>>before change>>>>>>>>', bhume1);
bhume1.name = 'kavia';
console.log('>>>before change>>>>>>>>', bhume1);

//private===================================================================================================================
//ex-1------------------------------------------------------------------------------------------------------------------
class HomyPrivate {
  private name1: String; //property name with access type name
  protected gender: String;
  age: number; // property name without any access name will be considered as public (default)
  //NOTE ERROR: Property 'age' has no initializer and is not definitely assigned in the constructor.
  constructor(name1: string, gender: string, age: number) {
    this.name1 = name1;
    this.gender = gender;
    this.age = age;
  }
  //methods for accessing the private name1 outside the homyPrivate constructor
  public getname1() {
    return this.name1;
  }
  //setter to modify the private
  public setName1(newName: string) {
    this.name1 = newName;
  }
}

let bhume2: HomyPrivate = new HomyPrivate('bhumesh1', 'male', 24);
console.log('>>>before change>>>>>>>>', bhume2);

/*No, if the name1 property in the HomyPrivate class is declared as private, you cannot directly modify it from outside the class. Private properties are intentionally designed to be inaccessible from external code to enforce encapsulation and maintain data integrity.

To allow modification of a private property, you typically provide a public method or setter within the class that can update the private property's value. Here's an example:*/
bhume2.setName1('kavia');

console.log('>>>before change>>>>>>>>', bhume2);

//ex-2------------------------------------------------------------------------------------------------------------
class Student {
  private rollno: String = `16Eir017`;
  private studentName: string = `bhumesh`;

  public getD() {
    return this.rollno;
  }
}

const one: Student = new Student();
// console.log(one.rollno);
console.log(one.getD()); //If you access the fullName property, without (), it will return the function definition:

//ex-3--------------------------------------------------------------------------------------------------------------------
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }
}

const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.calculateArea()); // Output: 50

//protected=========================================================================================================================

//we extend the private class in a protected class
class HomyProtected extends HomyPrivate {
  public returngender() {
    return this.gender;
  }
}

let bhume3: HomyProtected = new HomyProtected('bhumesh1', 'female', 24);
console.log('>>>before change>>>>>>>>', bhume3);
//here you can see in js console it will create(class is instantiated) another new obj even through it is private because in js abstract concept is not there and only in ts it is a  syntactic sugar.

//access the private and protected and public

//in ts we cant access or modify directly the private access properties from the parent class to ouzide of the class
//ts doesnot run at the exe time and it only compiles down to js to give better dev experience
console.log('>>>protected accessing outside the class through method>>>>>>>>', bhume3.age); //public
console.log('>>>protected accessing outside the class through method>>>>>>>>', bhume3.returngender()); //protected access - method in child class
// console.log('>>>protected accessing outside the class through method>>>>>>>>', bhume3.name1); //private-access-within the class only
// console.log('>>>protected accessing outside the class through method>>>>>>>>', bhume2.name1); //private-access-within the parent class only not even in the intantiated class the only way is to through method
console.log('>>>protected accessing outside the class through method>>>>>>>>', bhume2.getname1());

//access-modifiers-declared -implicit->defalut inbuilt public
// -explicit->we declare
