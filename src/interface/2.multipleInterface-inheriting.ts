//we can inject more property into the enum and we can use it anyware like export and import without using the export and import and

enum languagecs {
  jst = 'javascript',
  tst = 'typescript',
  sty = 'html and css'
}
enum devrole {
  fre = 'frontend',
  bke = 'backend',
  fse = 'fullstack'
}
enum framewrk {
  react = 'react',
  angular = 'angular',
  node = 'nest,express',
  syt = 'tailwind,mui,btsp',
  db = 'mongo,ps/sql'
}

//each interface can use enums to scale or have multiple set of opniated rule
//interface are like the signature of the obj that structure/construct what the obj value should do
interface lang {
  language: languagecs[]; //array gives us flexibility to give multiple values for the single property
}
interface fwk {
  tool: framewrk[];
}

interface position {
  //if the property has the single enum obj property then it can take single enum value from the framework
  role: devrole;
}
interface dev {
  name: string;
  email: string;
  phone?: number;
  address?: number;
}

//an interface can extend multiple interface property and can also have their own property
interface cadirequire extends dev, position, lang, fwk {
  joiner: string;
}

const candiate1: cadirequire = {
  joiner: 'immediate',
  name: 'bhumesh',
  email: 'asdf',
  role: devrole.fse,
  language: [languagecs.jst, languagecs.tst, languagecs.sty],
  tool: [framewrk.angular, framewrk.react, framewrk.node]
};

console.log(candiate1);
