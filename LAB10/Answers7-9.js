//7 // pattern1.js

// exports.getFirstname = function () {

//     console.log('Josh');

// };

// exports = {

//     getLastname: function(){

//         console.log('Edward');

//     }

// }

// module.exports.getFullname = function (){

//     console.log('Josh Edward');

// }


// // app.js

// const {getFullname} = require('./pattern2');

// getFullname();

// exports is reassigned to a new object containing getLastname function, 
// effectively breaking the reference to the original exports object. 
// This means that getFirstname is no longer exported.
//In app.js, getName is attempted to be imported from pattern2.js,
//  but pattern2.js does not exist. This will result in a "Module not found" error
//------------------------------------------------------------------------------------------------------------------------------------------------------

//8 const result = (function(exports, module){

// exports = module.exports;

// exports.firstname = 'John';

// module.exports.lastname = 'Smith';

// exports = {

//     getFullName: function(){

//         console.log('John Smith')

//     }

// }

// return module.exports;

// }).apply(null, [null, {exports: {}}]);

// console.log(result);
//when console.log(result) is executed, the output will be: { firstname: 'John', lastname: 'Smith' }
//Initially, exports is assigned to module.exports, so both exports and module.exports point to the same object.
// Properties firstname and lastname are added to this object.
// Then, a new object is assigned to exports, which breaks the reference to module.exports.
// The IIFE returns module.exports, which still refers to the original object with firstname and lastname properties.
