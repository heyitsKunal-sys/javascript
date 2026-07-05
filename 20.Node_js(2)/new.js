import {a,b,c,d,e} from './myModule.js';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
// output: 1 2 3 4 5

import obj from './myModule.js';
console.log(obj.x);
console.log(obj.y);
// output: 5 7

//  i can also do like this
import kunal from './myModule.js';
console.log(kunal.x );
console.log(kunal.y );
// output: 5 7   this is a default export and we can give any name to the default export while importing it in another module
//  and name default export can be anything but name of named export should be same as the name of the export in the module


// ab mene type:module se commonjs kr diya to ye code run hoga lekin  lekin ek warning k sath.
/*Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" */
// common js me require ka use hota h aur module me import ka use hota h. isliye mene type:module kr diya to ye code run ho jayega.
// solution:
// const a = require('/.new2.js')
//  console.log(a)
// to output print ho jaeyga