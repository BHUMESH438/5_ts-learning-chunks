/*
1.using interfaces with calsses
2.multiple class using same interface
3.implementing multiple interface in same class
4.multiple inheritance in class using interface
5.interfaces and access-modifiers
-interfaces are the contract only to the public members of the class and interfaces are the blue print for the final phase of the obj that the class will create*****
-And since objects do not have any access modifiers, that applies to interfaces as well.
- constructor(private Brand: Vbrand, public Colors: Vcolors[], public permit: string, public type: string, public desctription: string) {}
private will show error
-class itself inside or outside the constructor can have any private or protected value only the interface cant have the pr 
*/

//enum with value

enum Vtype {
  car = 'car',
  bike = 'bike'
}

enum Vcolors {
  red = 'red',
  yellow = 'yellow',
  green = 'green',
  white = 'white'
}

enum Vbrand {
  benz = 'benz',
  maruti = 'maruti',
  bmw = 'bmw'
}

//interface strcture with generic enum
interface Vehicle<type, colors, brand> {
  name: type;
  // private Brand: brand; - in obj and interface we cannot have the private/protected as interface and objects access modifires cannot be directly used
  Brand: brand;
  Colors: colors[];
  desctription?: string;
}

interface Commercial {
  permit: string;
  type: string;
}
//the most important use of interfaces is to be used along with class
//in class if we implement the interface and restricted the interface with generics and enum it  will expect the class to give the generics
//class Car implements Vehicle--- returns the property of the vehicle interface.So whenever you want your class to implement any specific interface, you can use the implements keyword.Let's go ahead and add the generic types to our automobile interface.So the class implements the automobile interface and it also has the three generic types it requires.

//class Car implements Vehicle<string, Vcolors, Vbrand> {}

/*Error:TypeScript says that car is missing the following properties from Vehicle that is name brand colors
 which is correct because we have not implemented the car class as yet.
So our car class right now does not create an object which contains all the properties of our Vehicle interface.

So the Vehicle interface over here is forcing us to implement the class in a specific structure.
It is acting like a contract and will force the developers to follow the contract.

The beauty of interfaces is that they are not concrete implementations as this same interface can be
used for any kind of Vehicle, be it a car, a truck, a bus, a van, etc. As long as it is an Vehicle,*/

//structuring our class

class Car implements Vehicle<string, Vcolors, Vbrand> {
  public name: string = 'car'; //name properyt should be common for the car class
  //the other class should be specific so implement that in the constructor
  constructor(public Brand: Vbrand, public Colors: Vcolors[], public desctription: string) {}
}
//in generics order is must
// class can implement many no of interfaces. so multiple interface implementation gives us the advantage of over class inheritance because in inheritance class can only extends one class and cannot extend multiple class. but interface in a class can be n number and it is done by implements**********
class Truck implements Vehicle<string, Vcolors, Vbrand>, Commercial {
  public name: string = 'truck';
  constructor(public Brand: Vbrand, public Colors: Vcolors[], public permit: string, public type: string, public desctription: string, private dirver: string = 'raj') {}
}
const mclan: Car = new Car(Vbrand.benz, [Vcolors.green, Vcolors.red], 'this is a car'); //through the consructor we can pass the obj directly
const volvo: Truck = new Truck(Vbrand.bmw, [Vcolors.white, Vcolors.yellow], 'national', 'heavy', 'this is truck', 'ankita');
console.log(mclan);
console.log(volvo);
