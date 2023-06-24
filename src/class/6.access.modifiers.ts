/*As the name suggests, access modifiers restrict the access of properties and methods or the members
of the class to its child class or to an instance depending on which access modifier you are using.
*/
class Homy {
  name: String;
  age: number;
  //NOTE ERROR: Property 'age' has no initializer and is not definitely assigned in the constructor.
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let bhume: Homy = new Homy('bhumesh', 24);
console.log('>>>before change>>>>>>>>', bhume);
bhume.age = 25; // we can change the obj property by the calling the variable name and also changing prpoerty ouside the class
console.log('>>>after change>>>>>>>>', bhume);

//like above in many application there must be some property where we might not want to change the property outside the class
//we might not want the use to change the property outside the class
//so this is were access modifiers come to use
