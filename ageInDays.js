//3.convert age in days
let person = {
   first_name : "Alok",
   last_name : "Maurya",
   age : 23
}


function ageInDays(obj, logResult){
   const full_name = obj.first_name.concat(' ').concat(obj.last_name);
   const ageInDays = obj.age*365;
   return logResult(full_name,ageInDays);
}

function logResult(full_name, ageInDays){
   console.log(`The person's full name is ${full_name} and their age in days is ${ageInDays}`);
}

const myResult = ageInDays(person, logResult)