//abstract class structure
//both abstract and interface provide us with the binding contract and nothing else
//both bind the class with the propertys, i.e which property should give to the class which extends or implement it
abstract class Personsample1 {
  //abstract class can only be invoked by the child class and if we want to invoke the abstract class means give it to a child class and declare the class and classname and modifiers as public and give a super in the constructor and invoke that class by a const variable and give the constructor parameters
  public abstract name111: string;
  public abstract email111: string;
  public abstract phone111: string;
  public greeting111() {
    console.log('>>>>>>>>>>>>>>>>>>hello');
  }
  public static greeting113() {
    //abstract class can contain static methods as well and greeting113 doesnot contain static methods
    return console.log('>>>>>>>>>>>>>>>>>>hello static');
  }
}
interface Personsample2 {
  name112: string;
  email112: string;
  phone112: string;
  greeting112: () => void;
}
//abstract class can have implementation of methods inside them were interface cannot have the implementation of methods inside them.
//interfaces wont allow the method implementation
//interfaces are like blue print structure of the class
class details111 extends Personsample1 {
  constructor(public name111: string, public email111: string, public phone111: string) {
    super();
  }
}
const personnn: details111 = new details111('bhu', 'asd', '12313');
console.log(personnn);
personnn.greeting111();

class details112 implements Personsample2 {
  constructor(public name112: string, public email112: string, public phone112: string) {}
  public greeting112 = () => console.log('hello>>>>interface');
}

const person112: details112 = new details112('bhuinterface', 'asdinteerface', '12313');
console.log(person112);
person112.greeting112();
Personsample1.greeting113(); //static method in abstract class invoked directly withou inatiating the class
//but implementing the static method inside the class cannot be done by the interfaces and the method can only be implemented inside the class as public

//So if any implementation is mandatory within the class, you need to use abstract classes.

//On the other hand, if you're just looking for creating a contract for your classes and the classes are bound to implement those contracts or interfaces, then using interfaces makes much more sense.
