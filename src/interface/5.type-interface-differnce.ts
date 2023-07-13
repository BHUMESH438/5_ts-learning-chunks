//the advantage of types over interface is that the types helps us to create the union type and intersection types over the interfaces
//we cannot produce the custom   types like union and intersection types in interfaces
type UserQ = {
  name: string;
  phone: number | string; //union
};
type AdminUser = {
  isAdminUser: boolean;
};
//intersection of types in variable
const userloggedis: UserQ & AdminUser = {
  name: 'bhumesh',
  phone: 1234435,
  isAdminUser: true
};
//union of types in variable
const useradmornot: UserQ | AdminUser = {
  isAdminUser: false
};

//tuples can be declared using type keyword and tuples  cannot be declared using interfaces
type restuples = [string, number];
//-------------------------------------------------------------------------------------------------------------------------------------------------
//typescript automatically merges two interfaces with the same name but that doesnot happens in the case of types
interface personq {
  name: string;
}
interface personq {
  phone: string;
}
interface persont {
  email: string;
}
interface personw extends personq, persont {} //interface can inherit multiple interface but type cant do that
const persona: personw = {
  //typescript merges the property of the both the interface with same name
  name: 'bhu',
  email: 'asdf',
  phone: '12334'
};

console.log('interface used by const>>>>>', persona);

class qwer implements personq, persont {
  constructor(public name: string, public phone: string, public email: string) {}
}
const personn: qwer = new qwer('bhumes', '123424', 'asdf@gamil.com');
console.log('interface used by class>>>>>', personn);
