/*
Задание 2 (тайминг 20 минут)
Используя Symbol.iterator, создайте объект "Библиотека", который можно
итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator.
2. Реализуйте кастомный итератор для объекта library. Итератор должен
перебирать книги по порядку.
3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
консоль. 
*/

// Массив книг:

const library = {
    books: [
        {
            title: 'Война и мир',
            author: 'Толстой',
            year: 1869,
        },
        {
            title: 'Отцы и дети',
            author: 'Достоевский',
            year: 1862,
        },
        {
            title: 'Идиот',
            author: 'Достоевский',
            year: 1869,
        },
    ],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                return i < this.books.length
                    ? { value: this.books[i++], done: false }
                    : { done: true };
            },
        };
    },
};

for (const book of library) {
    console.log(`Название: ${book.title}, Автор: ${book.author}, Год издания: ${book.year}`);
}



// Создаем объект библиотеки с объектами книг
// let library = {
//     books: [
//         { title: 'Книга 1', author: 'Автор 1', year: 2000 },
//         { title: 'Книга 2', author: 'Автор 2', year: 2005 },
//         { title: 'Книга 3', author: 'Автор 3', year: 2010 },
//         { title: 'Книга 4', author: 'Автор 4', year: 2015 },
//         { title: 'Книга 5', author: 'Автор 5', year: 2020 }
//     ],
//     [Symbol.iterator]() {
//         let index = 0;
//         return {
//             next: () => {
//                 if (index < this.books.length) {
//                     return { value: this.books[index++], done: false };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };

// // Используем цикл for...of для перебора книг и вывода их на консоль
// for (let book of library) {
//     console.log(`Название: ${book.title}, Автор: ${book.author}, Год издания: ${book.year}`);
// }




// Создаем объект библиотеки
// let library = {
//     books: ['Книга 1', 'Книга 2', 'Книга 3', 'Книга 4', 'Книга 5'],
//     [Symbol.iterator]() {
//         let index = 0;
//         return {
//             next: () => {
//                 if (index < this.books.length) {
//                     return { value: this.books[index++], done: false };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };

// // Используем цикл for...of для перебора книг и вывода их на консоль
// for (let book of library) {
//     console.log(book);
// }

