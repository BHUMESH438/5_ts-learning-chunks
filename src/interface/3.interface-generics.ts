//for the given expample below we declare the string for each automobile property by user can give any strict value so our proerty type should by flexibile and restrict the user to give the specific property so that we can use generic for this issue

enum carType {
  car = 'car',
  bike = 'bike'
}
enum carBrand {
  benz = 'benz',
  maruti = 'maruti',
  bmw = 'bmw'
}
enum carColor {
  red = 'red',
  yellow = 'yellow',
  green = 'green',
  white = 'white'
}
//by using the generic we can use any type of name for the enum and can assign it to the interface signature
interface Automabile<Type, Brand, Color> {
  type: Type;
  brand: Brand;
  colors: Color[];
  description?: string;
}

//automobile interdface req 3 generics type,brand,color and we can declare the 3 generic type from the enum we created
const swift: Automabile<carType, carBrand, carColor> = {
  type: carType.car,
  brand: carBrand.benz,
  colors: [(carColor.green, carColor.red, carColor.yellow)]
};

//declaring the generic without the mentioned generic type
const alto: Automabile<string, string, string> = {
  type: 'car',
  brand: 'alto',
  colors: ['red', 'white']
};

//from  above we saw that while using generics we can use automobile <carType, carBrand, carColor> as generic and if we want to customise we can use <string ,,,> as generic so by this we can use our interface for declaring the structured and customised object
//below shows the example of mixed example

const santro: Automabile<carType, string, carColor> = {
  type: carType.car,
  brand: 'renaoult',
  colors: [(carColor.green, carColor.red, carColor.yellow)]
};

console.log(swift);
console.log(alto);
console.log(santro);
