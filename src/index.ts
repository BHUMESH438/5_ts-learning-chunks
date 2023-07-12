//the advantage of types over interface is that the types helps us to create the union type and intersection types over the interfaces
//we cannot produce the
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
