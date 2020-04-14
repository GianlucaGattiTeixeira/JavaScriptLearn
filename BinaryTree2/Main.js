const nodEntity = require('./Tree.js')
const Tree = nodEntity.Tree;


var n1 = new Tree(5);
n1.Add( 4);
n1.Add( 9);
n1.Add( 6);
n1.Add( 7);
n1.Add( 11)
n1.Add( 10);
n1.Add( 3);
console.log(n1.nodeZero);
console.log("-----------------------")
console.log(n1.CountNodes())


//n1.Delete(9);
//console.log(n1.nodeZero.value, n1.nodeZero.right.value,n1.nodeZero.right.left.value,n1.nodeZero.right.left.left.value,n1.nodeZero.right.left.left.right.value)

//n1.Delete(3);
//console.log("--------------------");
//console.log(n1.nodeZero);
//console.log("--------------------");
//console.log(n1);

//console.log(n1.nodeZero);
