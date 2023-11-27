// initialisation of the map
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

//we use the map to retrive the data from the array
persons.map(getFullName);

// user defined functions
function getFullName(item) {
  return [item.firstname,item.lastname];
}


console.log("items in the map ", persons.map(getFullName))
console.log('directly calling the function: ', getFullName)
// console.log('directly calling the function: ', getFullName(persons))