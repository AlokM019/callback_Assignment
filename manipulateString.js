//2. Manipulate String

function manipulateString(str){
   const string = str.toUpperCase();

   function logString(){
      console.log(`The manipulated string is: ${string}`)
   }

   return logString;
}

const myString = "hello, world";
let myResult = manipulateString(myString)
myResult();


//another way
function manipulatedString(str, logString){
   const string = str.toUpperCase();
   return logString(string);
}

function logString(str){
   console.log(`This is the manipulated string: ${str}`)
}

let mystr = manipulatedString(myString, logString);