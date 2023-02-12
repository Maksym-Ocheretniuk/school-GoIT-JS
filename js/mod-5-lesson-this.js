// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 1/20
/* Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.
 */

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order('Smoked'));
// console.log(pizzaPalace.order('Four meats'));
// console.log(pizzaPalace.order('Big Mike'));
// console.log(pizzaPalace.order('Viennese'));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 2/20
/* 
Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
*/

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],

//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 3/20
/*
Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі. Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.
*/

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],

//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
// console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 4/20
/*
Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.
*/

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;

// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty('heritage'));
// console.log(child.hasOwnProperty('name'));
// console.log(child.name);
// console.log(child.hasOwnProperty('age'));
// console.log(child.age);
// console.log(child.hasOwnProperty('surname'));
// console.log(child.surname);
// console.log(child.hasOwnProperty('heritage'));
// console.log(child.heritage);
// console.log(parent.isPrototypeOf(child));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 5/20
/*
Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.
*/

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(ancestor.isPrototypeOf(parent));
// console.log(parent.isPrototypeOf(child));
// console.log(ancestor.hasOwnProperty('surname'));
// console.log(ancestor.surname);
// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.surname);
// console.log(child.hasOwnProperty('surname'));
// console.log(child.surname);
// console.log(ancestor.hasOwnProperty('heritage'));
// console.log(ancestor.heritage);
// console.log(parent.hasOwnProperty('heritage'));
// console.log(parent.heritage);
// console.log(child.hasOwnProperty('heritage'));
// console.log(child.heritage);

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
