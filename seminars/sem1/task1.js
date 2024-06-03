/*
Задание 1 (тайминг 20 минут)
Создать механизм для безопасного добавления метаданных к
объектам книг с использованием Symbol.
1. Создать уникальные символы для метаданных: отзывы,
рейтинг, теги.
2. Реализовать функции addMetadata (добавление метаданных)
и getMetadata (получение метаданных).
3. Создать объект книги, добавить метаданные и вывести их на
консоль.
*/

// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
    // Добавить код
    if (book[metadataType]) {
        book[metadataType].push(data);
    } else {
        book[metadataType] = [data];
    }
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    // вернуть
    return book[metadataType];
}

// Создание объекта книги и добавление метаданных
const book = {
    title: 'Война и мир',
    author: 'Толстой',
};

const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

addMetadata(book, reviewSymbol, 'Отличная книга!');
addMetadata(book, ratingSymbol, 4.5);
addMetadata(book, tagsSymbol, ['фантастика', 'приключения']);

// Вывод метаданных для книги
console.log(book.title, '|', book.author);
console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));