//before using the static properties in ts we should use to intantiate the class so that we can access the properties of the object that has theaccess to the  properties of the intantiaed class

class Automobile1 {
  public color1: string = 'red';
}

const car1: Automobile1 = new Automobile1();
console.log('without static>>>>>>>>', car1.color1);

//example 1
//in static member we do not want to intantiate the class we can call directly
//where ever we dont need to intantiate there we can use static method and that class should not be interlinked with each other
//for example a helper class with all helpers which can be used anywere
//another real world example is math obj in js

const pi = Math.PI;
console.log('>>>>>>>>>>>>>pipi>>>>>>>>>', pi);
class Automobile {
  //property
  public static color: string = 'red';
  //method
  public static milage(miles: number, liters: number) {
    return miles / liters;
  }
}
console.log('with static>>>>>>>>>>>', Automobile.color);
console.log('with static method in a class>>>>>>>>>>>', Automobile.milage(50, 10));
