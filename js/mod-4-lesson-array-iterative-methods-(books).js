const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
    genres: ['fiction'],
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
    genres: ['mysticism', 'adventure'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
    genres: ['horror', 'mysticism'],
  },
  {
    title: 'Enemy of God',
    author: 'Bernard Cornwell',
    rating: 8.67,
    genres: ['horror', 'adventure'],
  },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR2 = 'Robert Sheckley';

const MIN_BOOK_RATING = 8;

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 15/48
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// const titles = books.map(book => book.title);

// console.log(titles);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 16/48
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 20/48
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index,
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 21/48
// Використовуючи метод filter(), доповни код таким чином, щоб:
// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 28/48
// Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR2);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 41/48
/*
Доповни код таким чином, щоб:

У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
*/

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author),
// );

// const sortedByReversedAuthorName = [...books].sort(
//   (firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author),
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating,
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating,
// );

// console.log('sortedByAuthorName ', sortedByAuthorName);
// console.log('sortedByReversedAuthorName ', sortedByReversedAuthorName);
// console.log('sortedByAscendingRating ', sortedByAscendingRating);
// console.log('sortedByDescentingRating ', sortedByDescentingRating);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// 45/48
/*
Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
*/

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// console.log(names);

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
console.log();

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
console.log();

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
console.log();
