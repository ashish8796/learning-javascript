// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);


// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// let keyNo = 0;
// function isEmpty(obj) {
//   for(key in obj) {
//     keyNo++;
//   }
//   if(keyNo) {
//     return false;
//   }
//   else{
//     return true;
//   }
// }

// We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(key in salaries) {
  sum += salaries[key];
}
console.log(sum)

// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for(key in obj) {
    if (typeof(obj[key])== 'number') {
      obj[key] *= 2;
    }
  }

}

console.log(menu)