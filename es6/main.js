// var sam = "something";
// console.log(sam);

// //const = constant = קבוע
// // let = let = תן ותשחרר

// let myAge = 31;
// console.log(myAge);
// myAge = 32;
// console.log(myAge);

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

// //primitives variables: boolean, numbers, string, = by value
// //advanced variables: function, array, object, Map, Set = by reference

// const string = "str";
// console.log(string.length);

// const newString = string.replace("s", "b");
// console.log(newString);

// const person = { name: "almog", age: 31 };
// console.log(person);

// person.name = "shira";
// person.age = 21;

// console.log(person);
// // person = {} - לא תקין!

// Object.freeze(person);
// person.age = 50;
// console.log(person);

// console.log(
//   "hi, my name is " + person.name + " i am " + person.age + " years old"
// );
// console.log(`I'm`);
// console.log(`hi, my name is ${person.name} i am ${person.age} years old`);

// function ex(num1, num2) {
//   return num1 + num2;
// }
// console.log(ex(5, 7));

// const ex2 = (num1, num2) => num1 + num2;

// console.log(ex2(10, 56));
// const persons = [
//   {
//     name: "a",
//     age: 20,
//   },
//   {
//     name: "a",
//     age: 70,
//   },
//   {
//     name: "a",
//     age: 40,
//   },
//   {
//     name: "a",
//     age: 60,
//   },
//   {
//     name: "a",
//     age: 50,
//   },
//   {
//     name: "a",
//     age: 38,
//   },
//   {
//     name: "a",
//     age: 78,
//   },
//   {
//     name: "a",
//     age: 45,
//   },
//   {
//     name: "a",
//     age: 12,
//   },
//   {
//     name: "a",
//     age: 90,
//   },
//   {
//     name: "a",
//     age: 86,
//   },
//   {
//     name: "a",
//     age: 75,
//   },
//   {
//     name: "a",
//     age: 50,
//   },
// ];

// let personsThatMatters = persons;

// const onlyOldPersons = persons.filter((person) => person.age > 49);

// const onlyOldPersons2 = persons.filter(function (person) {
//   return person.age > 40;
// });
// console.log(onlyOldPersons);

// const someFunc = () => {};

// const personsClone = [...persons];
// console.log(personsClone);

// const onlyYoungPersons = personsClone.filter((person) => person.age < 49);

// personsThatMatters = onlyYoungPersons;
// console.log(personsThatMatters);

// const dog = {
//     name:'venus',
//     age:13,
//     color:'brown',
//     type:'vimerhaner'
// }

// const { name, age } = dog;

// console.log(age, name, dog.color);


// function detectCollision(objects, { x: px, y: py }) {

  
//   // for (let i = 0; i < objects.length; i++) {
//   //   const object = objects[i];
//   //   const { x, y, width, height } = object;

//   //   if (px >= x && px <= x + width && py >= y && py <= y + height) {
//   //     return object;
//   //   }
//   // }
//   return objects.find(({ x, y, width, height }) => px >= x && px <= x + width && py >= y && py <= y + height)
// }

// const myObjects = [
//   { x: 10, y: 20, width: 30, height: 30 },
//   { x: -40, y: 20, width: 30, height: 30 },
//   { x: 0, y: 0, width: 10, height: 5 },
// ];
