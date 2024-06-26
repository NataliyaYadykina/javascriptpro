/*
Вы управляете рестораном, в котором работают разные повара,
специализирующиеся на определенных блюдах.
Клиенты приходят и делают заказы на разные блюда.
Необходимо создать систему управления этими заказами, которая позволит:
• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.
Используйте коллекции Map для хранения блюд и их поваров,
а также для хранения заказов каждого клиента.
В качестве ключей для клиентов используйте объекты.

Повара и их специализации:
Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:
Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:
Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/

// Определяем поваров и их специализации
const chefs = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);

// Определяем блюда и их поваров
const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

// Определяем заказы клиентов
const orders = new Map();

// Записываем заказы клиентов
const client1 = { name: 'Алексей' };
orders.set(client1, ['Пицца "Пепперони"', 'Тирамису']);

const client2 = { name: 'Мария' };
orders.set(client2, ['Суши "Калифорния"', 'Пицца "Маргарита"']);

const client3 = { name: 'Ирина' };
orders.set(client3, ['Чизкейк']);

// Выводим информацию о заказах
orders.forEach((order, client) => {
    console.log(`${client.name} заказал(а):`);
    order.forEach(dish => {
        const chef = dishes.get(dish);
        console.log(`- ${dish}, готовит ${chef}`);
    });
    console.log('');
});
