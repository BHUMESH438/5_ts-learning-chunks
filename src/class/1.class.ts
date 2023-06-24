// in oops class is the class is the blue print for creating the obj.
//a class defines the initial values of various property and method  of an object
let person1 = {
  name: 'bhumesh', //property
  mark: () => console.log(`436 is your mark`) //method
};
class Personn {
  name = 'bhumesh';
  mark() {
    return console.log(`436 is your mark`);
  }
}
let person2 = new Personn();
console.log(person2.name);
console.log(person2.mark()); //in class functions are the syntactic sugar for  prototype
