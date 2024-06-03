/*
Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.
Каждая итерация должна возвращать следующий альбом из коллекции.
• Создайте объект musicCollection, который содержит массив альбомов
и имеет свойство-символ Symbol.iterator.
Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection.
Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции
и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
*/

// Создаем класс для хранения информации об альбоме
class Album {
    constructor(title, artist, year) {
        this.title = title;
        this.artist = artist;
        this.year = year;
    }
}

// Создаем объект "Музыкальная коллекция"
const musicCollection = {
    albums: [
        new Album("Альбом 1", "Исполнитель 1", "2000"),
        new Album("Альбом 2", "Исполнитель 2", "2010"),
        new Album("Альбом 3", "Исполнитель 3", "2020")
    ],
    // Реализуем символьное свойство Symbol.iterator
    [Symbol.iterator]() {
        let index = 0;
        const albums = this.albums;
        // Возвращаем объект итератора
        return {
            next() {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Используем цикл for...of для вывода информации об альбомах
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

