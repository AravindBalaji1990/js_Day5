const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}


console.log(persons.map(getFullName))
console.log('directly calling the function: ', getFullName)
console.log('directly calling the function: ', getFullName(persons))