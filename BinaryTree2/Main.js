const nodEntity = require('./Nod.js')
const Nod = nodEntity.Nod;

n1 = new Nod(5);
n1.Insert( 4);
n1.Insert( 9);
n1.Insert( 6);
n1.Insert( 10);
n1.Insert( 3);
console.log(n1);
n1.Delete(3);
console.log(n1);