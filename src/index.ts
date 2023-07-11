//----------------------------------------defining the type of the array----------------------------------------------
type Holidays1 = {
  date: Date;
  reason: string;
}[];
//----------------------------------------defining the parent class----------------------------------------------

abstract class Departmen3 {
  //declare the array,constructor as protected as child can only access
  protected abstract holidays1: Holidays1; //abstract property
  protected constructor(protected name: string) {}
  //public method - check the array and push it to the string -  can be accessed by all the property
  public addHolidays(holidays1: Holidays1) {
    if (Array.isArray(holidays1)) {
      for (const holiday of holidays1) {
        this.holidays1.push(holiday);
      }
    }
  }

  public printHolidays() {
    if (this.holidays1.length === 0) {
      console.log('there are no holidays');
    }
    console.log('here is the list of holidays');
    this.holidays1.forEach((holiday: { date: Date; reason: string }, index: number) => {
      console.log(`${index} and ? ${holiday.date} - ${holiday.reason}`);
    });
  }
}

//----------------------------------------extending the parent class----------------------------------------------

class ItDepartment1 extends Departmen3 {
  //creating an empty array of type Holdiays
  protected holidays1: Holidays1 = [];
  //passing name
  constructor() {
    super('IT');
  }
  public printHolidays() {
    //method signature is the same in the child and parent class , so the this will indicate the name property in the name class and the method overrittern can be done by giving the sane property. but this has more code repeatability for that we can use abstract methods
    if (this.holidays1.length === 0) {
      console.log('there are no holidays');
    }
    console.log(`here is the list of holidays-${this.name}`);
    this.holidays1.forEach((holiday: { date: Date; reason: string }, index: number) => {
      console.log(`${index} and ? ${holiday.date} - ${holiday.reason}`);
    });
  }
}

//----------------------------------------extending the parent class----------------------------------------------

class HRDepartment1 extends Departmen3 {
  protected holidays1: Holidays1 = [];
  constructor() {
    super('HR'); //in super we pass all the arguments property when we intantiate the class/childclass
  }
}

//protected and child class
//- if in the child class if we declare the constructor in the abstract class of then it can only be accessed by the child class and cannot be mutated
//-in abstract class we should declare the child class constructor with protected modifires or if we declare the default or public then that specific extended class can be intantiated by another class
// const labourDep = new ItDepartment1('ded');
// const labourDep1 = new ItDepartment1('ded');
//like above said it would be a problem so we should declare it as protected at any cost to the constructor in abstract class so only the child that extends can use it

//passing array

//defining the array type with values
const itHoliday: Holidays1 = [
  {
    date: new Date(2022, 12, 25),
    reason: 'christmas'
  },
  {
    date: new Date(2022, 1, 25),
    reason: 'pongal'
  }
];

const hrHoliday: Holidays1 = [
  {
    date: new Date(2022, 2, 25),
    reason: 'saraspooj'
  },
  {
    date: new Date(2022, 10, 25),
    reason: 'singla'
  }
];

//-------------------------intantiate the  respective class----------------------------------

const itDepartment1 = new ItDepartment1();
const hrDepartment1 = new HRDepartment1();

// console.log('>>>>>>>>>>>>>>>', itDepartment1);
// console.log('>>>>>>>>>>>>>>>', hrDepartment1);

itDepartment1.addHolidays(itHoliday);
itDepartment1.printHolidays();
hrDepartment1.addHolidays(hrHoliday);
