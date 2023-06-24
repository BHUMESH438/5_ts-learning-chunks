type Areoplane = {
  name: string;
  seat: number;
  customer: {
    //one obj can have one index signature and we cannot have two index signature in one obj
    //if we want we can use union type for index signature
    //union-sting|number; intersection-string&&number
    id: number;
    [key: string]: string | number; //union,index signature
  };
  luggageweight: {
    [key: number]: string;
  };
};

let bhum: Areoplane = {
  name: 'bhumesh',
  seat: 2,
  customer: {
    id: 12324
  },
  luggageweight: {
    30: `kg`
  }
};
console.log('>>>>>>>>>>>>>1 ', bhum);
