import {firstName as fname} from './utils/fname.js'
import {age} from './utils/age.js'
import person,{Person2,Person3} from './utils/person.js'
// import p from './utils/person.js' // kuch bhi name de skte h 

console.log(fname,age);

const per = new person("P","S",20);
per.info();
console.log(per);