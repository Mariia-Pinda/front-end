# front-end
Кулінарний блог.
Структура:
1. Головна сторінка. Перехід на сторінку "Меню" - кнопка Menu.
2. В Меню 2 розділи: Рецепти і Про Їжу. При натисканні на розділ з'являються підрозділи, за ними - перехід до інших сторінок. 
Для розгортання підрозділів є код на JQuery - файл assets/js/app.js (Сollapse). Треба переписати на React.
3. Підрозділи. Натискаємо на картинку - переходимо на відповідну сторінку. Поки прописані тільки сторінки Desserts -> Tasty Pancakes та Cooking Methods -> Broiling Method.
Інші картинки поки посилань не містять.
4. Шапка сторінки. З будь-якої сторінки можна перейти на головну. Кпопки авторизації і реєстрації - файл client/src/pages/Auth. 
Дані записуються в БД (зв'язок з сервером прописаний у відповідних файлах папки server).
5. Реалізувати віджет:
1) React-сторінку і набір компонент, що реалізують відображення віджета з погодою на кілька днів (або іншого за погодженням із викладачем).
2) Асинхронне отримання даних (про погоду), що виконує AJAX-запит (за допомогою fetch чи XMLHttpRequest) на зовнішній сервер (в Інтернеті) та отримує від нього відповідь (наприклад, у форматі JSON).
3) Блокування інтерфейсу користувача для унеможливлення кількох одночасних запитів (за допомогою приховування елементів UI чи/або відображення тимчасових елементів-заглушок, “лоадерів”/прогрес-барів).
4) Обробку помилок комунікації із зовнішнім сервером (неправильних даних запиту, таймаутів тощо). 
1. Віджет можна відобразити на окремій сторінці.

Upd: порівняно з попереднім варіантом налагодила авторизацію користувача, все працює.
Summary того, що залишилося: 
1. Зробити віджет, вимоги вище.
2. Переписати файли з JQuery на React. Файли містяться в окремій папці assets/js. Файл assets/js/app.js - перетворення шапки сторінки в мобільному форматі + відкриття підрозділів у акордеоні на сторінці Меню. Файл assets/js/pancakes-ing.js - на сторінці Tasty Pancakes можна обирати кількість порцій. Числа змінюються без перезавантаження сторінки. Відповідний код у файлі client/src/pages/TastyPancakes поки закоментовано.
