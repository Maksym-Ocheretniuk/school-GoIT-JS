const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 17/48
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 18/48
// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// const getUserEmails = users => users.map(user => user.email);

// console.log(getUserEmails(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 22/48
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'green'));
// console.log(getUsersWithEyeColor(users, 'blue'));
// console.log(getUsersWithEyeColor(users, 'brown'));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 23/48
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(user => user.age >= minAge && user.age <= maxAge);

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 24/48
// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// console.log(getUsersWithFriend(users, 'Adrian Cross'));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 25/48
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// const getFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friends, index, array) => array.indexOf(friends) === index);

// // АЛЬТЕРНАТИВНО;
// // const allFriends = users.flatMap(user => user.friends);
// // const uniqeFriend = allFriends.filter(
// //   (friends, index, array) => array.indexOf(friends) === index,
// // );

// console.log(getFriends(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 26/48
//Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.

// const getActiveUsers = users => users.filter(user => user.isActive === true);

// console.log(getActiveUsers(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 27/48
//Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.

// const getInactiveUsers = users => users.filter(user => user.isActive === false);

// console.log(getInactiveUsers(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 29/48
// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email.

// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);

// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 31/48
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.

// const isEveryUserActive = users => users.every(user => user.isActive === true);

// console.log(isEveryUserActive(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 33/48
/* 
Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.
*/

// const isAnyUserActive = users => users.some(user => user.isActive);

// console.log(isAnyUserActive(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 36/48
/*
Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.
*/

// const calculateTotalBalance = users =>
//   users
//     .map(user => user.balance)
//     .reduce((previousBalance, balance) => previousBalance + balance, 0);

// console.log(calculateTotalBalance(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 37/48
/*
Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users.
*/

// const getTotalFriendCount = users => {
//   return users.reduce((allFriends, user) => {
//     allFriends.push(...user.friends);
//     return allFriends;
//   }, []).length;
// };

// console.log('загальну кількість друзів: ', getTotalFriendCount(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 42/48
/*
Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance).
*/

// const sortByAscendingBalance = users =>
//   [...users].sort(
//     (firstUser, secondUser) => firstUser.balance - secondUser.balance,
//   );

// console.log(sortByAscendingBalance(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 43/48
/*
Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).
*/

// const sortByDescendingFriendCount = users =>
//   [...users].sort(
//     (firstFriend, secondFriend) =>
//       secondFriend.friends.length - firstFriend.friends.length,
//   );

// console.log(sortByDescendingFriendCount(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 44/48
/*
Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.
*/

// const sortByName = users =>
//   [...users].sort((firstName, secondName) =>
//     firstName.name.localeCompare(secondName.name),
//   );

// console.log(sortByName(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 46/48
/*
Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).
*/

// const getNamesSortedByFriendCount = users =>
//   [...users]
//     .sort(
//       (lessFriend, moreFriend) =>
//         lessFriend.friends.length - moreFriend.friends.length,
//     )
//     .map(user => user.name);

// console.log(getNamesSortedByFriendCount(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 47/48
/*
Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.
*/

// const getSortedFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friends, index, array) => array.indexOf(friends) === index)
//     .sort((firstName, secondName) => firstName.localeCompare(secondName));

// console.log(getSortedFriends(users));

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 48/48
/*
Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.
*/

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(user => user.gender === gender)
//     .reduce((totalBalance, user) => totalBalance + user.balance, 0);

// console.log(
//   'maleGender TotalBalance: ',
//   getTotalBalanceByGender(users, 'male'),
// );
// console.log(
//   'femaleGender TotalBalance: ',
//   getTotalBalanceByGender(users, 'female'),
// );

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*

console.log();
