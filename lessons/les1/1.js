let obj = {
    animal: 'dog'
}

let obj2 = obj;

obj = null;

console.log(obj);
console.log(obj2);

// Если мы создадим несколько ссылок на объект, записав их в разные переменные, то объект удалится только при удалении всех ссылок на объект. Можно рекурсивно перебрать значения