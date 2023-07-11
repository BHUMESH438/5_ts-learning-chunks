//custom type of array of obj
type Holidays = {
  date: Date;
  reason: string;
}[];
abstract class Department1 {
  constructor(protected name: string) {} // all the child class that exptend form the name class will have the access to the protected property of the parent class
}
//abstract classes cannot be intantiated
//Cannot create an instance of an abstract class.
//since we never intatiate the abstract class and so we cant use the public class and can use the protected class on the constructor so that the child class can use it , mention it, the child class cant intantiate and use the public class
// const department = new Department1('thamme');

abstract class Department {
  protected abstract holidays: Holidays; //child will be forced to implement it
  protected constructor(protected name: string) {}
}

//creating the child class

class ItDepartment extends Department {
  protected holidays: Holidays = [];
}
class HRDepartment extends Department {
  protected holidays: Holidays = [];
}

//What you need to take away from this lecture is that abstract members of the class need to be implemented by each of the child classes.
// The abstract members in the parent class are not concrete implementations.They exist in parent class so that their implementations can be forced inside the child classes.
