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
console.log();
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
console.log();
