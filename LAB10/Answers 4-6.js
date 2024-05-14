//4/ var message = 'Hello World';

// function logMessage() {

//     console.log(this.message);

// }

// logMessage();

//Answers
// var message = 'Hello World';

// function logMessage() {

//     console.log(this.message);

// }

// logMessage();

//Answers
// the function above does not have direct relationship with an object so it will refer to the window object in javascript.
// but in node there is no wondow Object just the global. so here the "this" will refer to global object.
// so the answer is undefined in browser and Hello World in Node.
//=======================================================================================================================================================================

///5// pattern1.js

// module.exports.getName = function () {

//     console.log('Josh Edward');

// };


// // app.js

// const getName = require('./pattern1');

// getName();


//Answers
// In pattern1.js, the function getName is assigned to module.exports.getName.
// This means that when pattern1.js is imported into another file, the getName function will be accessible via require('./pattern1').
// Module Import:

// In app.js, the getName function is imported using require('./pattern1').
// This loads the module defined in pattern1.js and makes the getName function available in app.js.
// Function Invocation:

// After importing getName in app.js, it is invoked using getName().
// This executes the getName function defined in pattern1.js, which logs 'Josh Edward' to the console.
// Therefore, when the code is executed, it imports the getName function from pattern1.js and invokes it, resulting in 'Josh Edward' being logged to the console.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//6// pattern1.js

// exports.getFirstname = function () {

//     console.log('Josh');

// };

// exports = {

//     getLastname: function(){

//         console.log('Edward');

//     }

// }

// module.exports = function (){

//     console.log('Josh Edward');

// }


// // app.js

// const getName = require('./pattern2');

// getName();

//pouPut is Error:
// The error occurs because app.js is trying to import getName from pattern2.js, but pattern2.js does not exist.
//  The file name specified in require('./pattern2') should match the file name where the desired module is located. 
//  In this case, it should be require('./pattern1').