const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 19 }
];



const sortByName = function(a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }  
  if (nameA === nameB) {
    return b.age - a.age;
  }
};

console.log(students.sort(sortByName));