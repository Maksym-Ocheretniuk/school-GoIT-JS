// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 34/48
/*
Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.
*/

// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousTime, time) => {
//   return previousTime + time;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log('playtimes: ', playtimes);
// console.log('totalPlayTime: ', totalPlayTime);
// console.log('averagePlayTime: ', averagePlayTime);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 35/48

const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

/*
Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
*/

// const totalAveragePlaytimePerGame = players
//   .map(player => player.playtime / player.gamesPlayed)
//   .reduce((previousTime, time) => previousTime + time, 0);

// console.log(totalAveragePlaytimePerGame);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
console.log();

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
console.log();

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
console.log();
