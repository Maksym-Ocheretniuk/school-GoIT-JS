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

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

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
//
console.log();

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//
console.log();

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//
console.log();

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//
console.log();

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//
console.log();
