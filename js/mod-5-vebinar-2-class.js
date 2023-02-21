/*
  1. Блогер
  Поняття клас та екземпляр, визначення, призначення
  Прототипне наслідування в інстансів класу
  Напиши клас Blogger для створення об'єкта блогера з 
  наступними властивостями:
  email - пошта, рядок
  age - вік, число
  numberOfPosts - кількість постів, число
  topics - масив тем, на яких спеціалізується блогер
  Клас очікує один параметр – об'єкт налаштувань з 
  однойменними властивостями.
  Додай метод getInfo(), який повертає рядок: 
  User ${пошта} is ${вік} years old and has ${у постів} posts
  Додай метод updatePostCount(value), який у параметрі value 
  приймає кількість постів, які потрібно додати користувачеві
*/

// class Blogger {
//   isHuman = true;

//   constructor({ age, email, numberOfPosts, topics }) {
//     this.age = age;
//     this.email = email;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts}`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// // // 1
// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);

// console.log(mango.getInfo());

// mango.updatePostCount(5);

// console.log(mango.getInfo());

// 2
// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// const obj = {};

// console.log(obj);

// console.log(obj.toString());

// console.log(poly);

// console.log(poly.getInfo());

// poly.updatePostCount(4);

// console.log(poly.getInfo());

// console.log([]);

/*
  2. Сховище
 
  Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items
  Додай методи класу:
  getItems() – повертає масив товарів
  addItem(item) - отримує новий товар та додає його до поточних
*/

// class Storage {
//   constructor(products) {
//     this.items = products;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }
// }

// const coursesStorage = new Storage(['HTML', 'JS', 'CSS']);

// console.log(coursesStorage);

// console.table(coursesStorage.getItems());

// coursesStorage.addItem('🍌');
// coursesStorage.addItem('🍌');
// coursesStorage.addItem('🍌');
// coursesStorage.addItem('🍌');
// console.log(coursesStorage.getItems());

// const coursesStorage2 = new Storage(['HTML', 'JS', 'CSS']);

/*
  3. User
  Приватні властивості
  
  Напиши клас User який створює об'єкт із властивостями login та email
  
  Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email
*/

// class User {
//   #email;
//   #login;

//   constructor({ login, email }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(emailValue) {
//     this.#email = emailValue;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(loginValue) {
//     if (typeof loginValue !== 'string') {
//       return;
//     }

//     this.#login = loginValue;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango);

// mango.login = 5335;
// console.log(mango);

/*
  4. Нотатки
  Статичні властивості
  Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.
  {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  }
  
  Додай метод addNote(note) для додавання нотатки
*/

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(notesArray) {
//     this.items = notesArray;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }
// }

// console.log(Notes.Priority);

// const myNotes = new Notes([]);

// myNotes.addNote({
//   text: 'Моя перша нотатка',
//   priority: Notes.Priority.LOW,
// });

// console.log(myNotes);
// myNotes.addNote({
//     text: 'Моя друга нотатка',
//     priority: Notes.Priority.HIGH
// });

// console.log(myNotes.items);

// Array.isArray();

// console.log({});

/*
  5. Toggle
  Напишіть клас Toggle, який приймає об'єкт налаштувань 
  
  {isOpen: boolean} 
  
  і оголошує одну властивість on - стан викл/вкл (true/false). За замовчуванням значення властивості on має бути false.
*/

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }
// }

// const toggle = new Toggle();

// console.log(toggle);

/*
  6. Прототипне наслідування детальніше
  Метод Object.create
  Власні/невласні властивості, перебір циклом for in
  та метод hasOwnProperty
*/

// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = Object.create(obj1);
// obj2.c = 3;

// debugger;

// for (let key in obj2) {
//   if (obj2.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(obj2);

// console.log(obj2.a);

// class Class1 {
//   constructor(name) {}
// }

// class Class2 extends Class1 {

//   constructor() {
//     Class1.constructor === super()
//   }
// }

// const obj1 = {
//   method: function () {}
// }

// const obj2 = {
//   method: obj1.method
// }
