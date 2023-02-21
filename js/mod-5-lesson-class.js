// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 6/20
// 7/20
/*
Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.
*/ /*
Додай класу Car метод constructor, який приймає три параметри:
brand - марка автомобіля.
model - модель автомобіля.
price - ціна автомобіля.
Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.
*/

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.log(Car);
// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('BMW', 'X5', 58900));
// console.log(new Car('Nissan', 'Murano', 31700));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 8/20
/*
Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.
*/
// 9/20
/*
Додай класу Car два методи.
getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.
*/

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 10/20
/*
Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

Оголоси наступні методи класу:

getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
*/

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const index = this.items.indexOf(itemToRemove);
//     return this.items.splice(index, 1);
//   }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 11/20
/*
Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

Оголоси наступні методи класу:

getValue() - повертає поточне значення властивості value.
padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
*/

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// /* В умові написано в одному з методів додати параметр str в кiнець. Тобто використовуємо не пуш ( бо на строку push використати не можна), а this.value + str;  якщо str потрібно вставити і в початок і в кінець, то this.value = str + this.value + str; */

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 12/20
/* Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

getBrand() - повертає значення приватної властивості brand.
changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
*/

// class Car {
//   #brand;
//   model;
//   price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 13/20
/* Виконай рефакторинг класу Storage, зробивши властивість items приватною.
 */

// class Storage {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 14/20
/*
Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.
*/

// class StringBuilder {
//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 15/20

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// console.log();

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 16/20
/* Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.
*/

// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       return (this.#price = newPrice);
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 17/20
/* Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).
*/

// class Car {
//   static #MAX_PRICE = 50000;

//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 18/20
/* У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

Оголоси клас Admin, який наслідує від класу User
Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
*/

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 19/20
/* Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel. Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.
 */

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 20/20
/* Додай класу Admin наступні властивості і методи.

Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
*/

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//

console.log();
