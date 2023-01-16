let web = {
    id: 'web',
    title: 'Веб-разработчик',
    payment: 'https://practicum.yandex.ru/profile/web/order/',
    syllabuses: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a2c04315-7ff4-4dde-917d-98dbdca8ad0a/%D0%92%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA_%D0%BE%D1%82_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%D0%B0.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230115T031317Z&X-Amz-Expires=86400&X-Amz-Signature=a5ea319d4a1a63ff18d04e7264c4fdbadb23849f1d14437c49de55e929b621f3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%2592%25D0%25B5%25D0%25B1-%25D1%2580%25D0%25B0%25D0%25B7%25D1%2580%25D0%25B0%25D0%25B1%25D0%25BE%25D1%2582%25D1%2587%25D0%25B8%25D0%25BA%2520%25D0%25BE%25D1%2582%2520%25D0%25AF%25D0%25BD%25D0%25B4%25D0%25B5%25D0%25BA%25D1%2581%2520%25D0%259F%25D1%2580%25D0%25B0%25D0%25BA%25D1%2582%25D0%25B8%25D0%25BA%25D1%2583%25D0%25BC%25D0%25B0.pdf%22&x-id=GetObject',
    brif: '#',
    notion: 'https://www.notion.so/praktikum/dfdf0d6377ad4acab4ab0ad65ae4765b',
    long: '10 месяцев',
    freetrack: 'Фритрек 20ч',
    format: 'спринт 2 недели',
    timeInWeek: 'от 20ч',
    document: 'Диплом/Сертификат',
    exp: 'С нуля до junior',
    price: [monthly = 'помесячно 15 500 рублей, 10 платежей(155 000)', credit = 'Кредит от 7 201 руб, до 24 месяцев', full = '140 000 рублей'],
    dateOfStarts: ['26.01, оплата до 19.01 ', '09.02, оплата до 26.01', '23.02', '09.03', '23.03'],
    popUp: ['15 -20 ч / неделю, 3 академа (30 дней), каникулы после каждого модуля, 720 ч',
        'спринт 2 недели / диплом',
        'Карьерный трек: есть Программа трудоустр-ва, акселерация',
        'Онбординг (15 минут) + Фритрек (20 ч.)',
        'фронтенд-разработчик',
        'Базовый синтаксис HTML и CSS',
        'Язык программирования JavaScript ',
        'Библиотека React и её экосистема',
        'Серверный JavaScript в Node.js',
        'Инструмент Webpack (соединяет JavaScript и CSS-файлы)',
        'Работа с макетом, построение сложных сеток, адаптивная вёрстка',
        'Серверный API для сайта (бэкенд)',
        'Группировка элементов технологией Grid Layout',
        'Nginx, Система контроля версий Git, Методология БЭМ',
        'VScode, bash, Я.Облако,GitHub Actions, Express.js, mongoDB',
        'Не учим в этом курсе: JAVA, Go, Php'],
    requireLinks: [
        {
            name: 'Сравнение Веб и Веб+',
            link: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cf36952d-c273-42c0-ab77-42fd54a8c039/%D0%A0%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC_%D0%92%D0%B5%D0%B1_%D0%B8_%D0%92%D0%B5%D0%B1_%D0%B2_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%D0%B5.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230116T010143Z&X-Amz-Expires=86400&X-Amz-Signature=f1d66b691e1e221a4a82300eeb3c1744509a6258ee17869d74294031abaca4f3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%25A0%25D0%25B0%25D0%25B7%25D0%25BB%25D0%25B8%25D1%2587%25D0%25B8%25D0%25B5%2520%25D0%25BF%25D1%2580%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D0%25BC%25D0%25BC%2520%25D0%2592%25D0%25B5%25D0%25B1%2520%25D0%25B8%2520%25D0%2592%25D0%25B5%25D0%25B1%252B%2520%25D0%25B2%2520%25D0%25AF%25D0%25BD%25D0%25B4%25D0%25B5%25D0%25BA%25D1%2581.%25D0%259F%25D1%2580%25D0%25B0%25D0%25BA%25D1%2582%25D0%25B8%25D0%25BA%25D1%2583%25D0%25BC%25D0%25B5.pdf%22&x-id=GetObject'
        },
        {
            name: 'Сравнение Bootcamp, Веб, Веб+',
            link: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/29e4dc61-8a1f-4a9c-a3a5-c84d7d8b9879/%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%92%D0%B5%D0%B1%D0%92%D0%B5%D0%B1%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4_Bootcamp_%D0%B2_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%D0%B5.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230116T010307Z&X-Amz-Expires=86400&X-Amz-Signature=7dcdaf56d9a295318ff8f508f7181ce28af135df5f1743197751d957b54b1823&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%25A1%25D1%2580%25D0%25B0%25D0%25B2%25D0%25BD%25D0%25B5%25D0%25BD%25D0%25B8%25D0%25B5%2520%25D0%2592%25D0%25B5%25D0%25B1%252C%25D0%2592%25D0%25B5%25D0%25B1%252B%252C%25D0%25A4%25D1%2580%25D0%25BE%25D0%25BD%25D1%2582%25D0%25B5%25D0%25BD%25D0%25B4%2520Bootcamp%2520%25D0%25B2%2520%25D0%25AF%25D0%25BD%25D0%25B4%25D0%25B5%25D0%25BA%25D1%2581%2520%25D0%259F%25D1%2580%25D0%25B0%25D0%25BA%25D1%2582%25D0%25B8%25D0%25BA%25D1%2583%25D0%25BC%25D0%25B5.pdf%22&x-id=GetObject'
        }
    ]


}
let webBootcamp = {
    id: 'web-bootcamp',
    title: 'Веб-разработчик Bootcamp',
    payment: 'https://practicum.yandex.ru/profile/web/order/',
    syllabuses: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/63dda3b8-87d1-4544-ae1b-87d7e128f5ed/%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA_%D0%B1%D1%83%D1%82%D0%BA%D0%B5%D0%BC%D0%BF_%D0%BE%D1%82_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%D0%B0.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230115T050103Z&X-Amz-Expires=86400&X-Amz-Signature=e75bda8b65503c4d51d44b841c1b1b595c35dc30e39705de2e027feb300ad5c4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%25A4%25D1%2580%25D0%25BE%25D0%25BD%25D1%2582%25D0%25B5%25D0%25BD%25D0%25B4-%25D1%2580%25D0%25B0%25D0%25B7%25D1%2580%25D0%25B0%25D0%25B1%25D0%25BE%25D1%2582%25D1%2587%25D0%25B8%25D0%25BA%2520%25D0%25B1%25D1%2583%25D1%2582%25D0%25BA%25D0%25B5%25D0%25BC%25D0%25BF%2520%25D0%25BE%25D1%2582%2520%25D0%25AF%25D0%25BD%25D0%25B4%25D0%25B5%25D0%25BA%25D1%2581%2520%25D0%259F%25D1%2580%25D0%25B0%25D0%25BA%25D1%2582%25D0%25B8%25D0%25BA%25D1%2583%25D0%25BC%25D0%25B0.pdf%22&x-id=GetObject',
    brif: '#',
    notion: 'https://www.notion.so/praktikum/Bootcamp-6789dd09c9714ff1b67a851fd23365a0',
    long: '5 месяцев',
    freetrack: 'Фритрек 40ч',
    format: 'спринт 1 недели',
    timeInWeek: 'от 40ч',
    document: 'Диплом/Сертификат',
    exp: 'С нуля до junior',
    price: [monthly = 'помесячно 42 000 руб, 5 платежей(210 000)', credit = 'Кредит от 8 750 руб, до 24 месяцев', full = '210 000 рублей'],
    dateOfStarts: ['26.01, оплата до 25.01', '23.02, оплата до 31.01', '23.03'],
    popUp: [
        'от 40 ч / неделю, 1 академ, 1 неделя каникул, 780 ч',
        'спринт 1 недели / диплом',
        'Карьерный трек: есть (по желанию)',
        'Онбординг (15 минут) + Фритрек (20 ч.)',
        'Mongo DB, JavaScript, HTML, Github, Express.js, PM2, Nginx, Bash',
        'Пре и Постпроцессы CSS',
        'Функциональное программирование',
        'Алгоритмы и структуры данных',
        'Внутренности React (продвинутый) ',
    ],
    requireLinks: [
        {
            name: 'Сравнение Bootcamp, Веб, Веб+',
            link: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/29e4dc61-8a1f-4a9c-a3a5-c84d7d8b9879/%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%92%D0%B5%D0%B1%D0%92%D0%B5%D0%B1%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4_Bootcamp_%D0%B2_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%D0%B5.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230116T010307Z&X-Amz-Expires=86400&X-Amz-Signature=7dcdaf56d9a295318ff8f508f7181ce28af135df5f1743197751d957b54b1823&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%25A1%25D1%2580%25D0%25B0%25D0%25B2%25D0%25BD%25D0%25B5%25D0%25BD%25D0%25B8%25D0%25B5%2520%25D0%2592%25D0%25B5%25D0%25B1%252C%25D0%2592%25D0%25B5%25D0%25B1%252B%252C%25D0%25A4%25D1%2580%25D0%25BE%25D0%25BD%25D1%2582%25D0%25B5%25D0%25BD%25D0%25B4%2520Bootcamp%2520%25D0%25B2%2520%25D0%25AF%25D0%25BD%25D0%25B4%25D0%25B5%25D0%25BA%25D1%2581%2520%25D0%259F%25D1%2580%25D0%25B0%25D0%25BA%25D1%2582%25D0%25B8%25D0%25BA%25D1%2583%25D0%25BC%25D0%25B5.pdf%22&x-id=GetObject'
        }
    ]
}
let webPlus = {
    id: 'web-plus',
    title: 'Веб-разработчик+',
    payment: 'https://practicum.yandex.ru/profile/web/order/',
    syllabuses: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c0390e11-d2d0-436d-84f2-0e0ac06398be/%D0%92%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA_%D0%BE%D1%82_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%D0%B0.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230115T050013Z&X-Amz-Expires=86400&X-Amz-Signature=43fe20a07c49c79f9fa8c4ddc3e6c921ac3799baa7eace5f4549cbe3ca927b52&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%2592%25D0%25B5%25D0%25B1-%25D1%2580%25D0%25B0%25D0%25B7%25D1%2580%25D0%25B0%25D0%25B1%25D0%25BE%25D1%2582%25D1%2587%25D0%25B8%25D0%25BA%252B%2520%25D0%25BE%25D1%2582%2520%25D0%25AF%25D0%25BD%25D0%25B4%25D0%25B5%25D0%25BA%25D1%2581%2520%25D0%259F%25D1%2580%25D0%25B0%25D0%25BA%25D1%2582%25D0%25B8%25D0%25BA%25D1%2583%25D0%25BC%25D0%25B0.pdf%22&x-id=GetObject',
    brif: '#',
    notion: 'https://www.notion.so/praktikum/a3cfa8e51d68425498a514b4190b192e',
    long: '18 месяцев',
    freetrack: 'Фритрек 20ч',
    format: 'спринт 3 недели',
    timeInWeek: 'от 15ч',
    document: 'Диплом/Сертификат',
    exp: 'С нуля до junior+',
    price: [monthly = 'помесячно 16 500 руб, 18 платежей(155 000)', credit = 'Кредит от 12 963 руб, до 24 месяцев', full = '140 000 рублей'],
    dateOfStarts: ['19.01, оплата до 18.01', '16.02, оплата до 31.01', '16.03'],
    popUp: [
        'от 15 - 20 ч / неделю, нет каникул(есть проектные месяцы), 3 академа(30 д.), от 1200 ч',
        'спринт 3 недели / диплом',
        'Карьерный трек: есть',
        'Программа трудоустройства, акселерация, сопр - е на испытательном сроке',
        'Онбординг(15 минут) + Фритрек(20 ч.)',
        'ТО ЖЕ ЧТО ВЕБ + ЕЩЕ ',
        'Пре и Постпроцессы CSS',
        'Функциональное программирование',
        'Алгоритмы и структуры данных',
        'Вовращение',
        'Внутренности React(продвинутый) ',
        'Докер, TypeScrip, Redux, Cypress, NestJS',
        'Postgres SQL',
    ],
    requireLinks: web.requireLinks
}
let reactDev = {
    id: 'react-dev',
    title: 'React-разработчик(с опытом)',
    payment: 'https://practicum.yandex.ru/profile/react/order/',
    syllabuses: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/050a50c3-70a9-4af6-983d-a973a2cf6f4b/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%BA%D1%83%D1%80%D1%81%D0%B0_React-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230116T021958Z&X-Amz-Expires=86400&X-Amz-Signature=70f11710d6df03788558ae33633dbe7775125f60469055428063220c9b241556&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%259F%25D1%2580%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D0%25BC%25D0%25BC%25D0%25B0%2520%25D0%25BA%25D1%2583%25D1%2580%25D1%2581%25D0%25B0%2520React-%25D1%2580%25D0%25B0%25D0%25B7%25D1%2580%25D0%25B0%25D0%25B1%25D0%25BE%25D1%2582%25D1%2587%25D0%25B8%25D0%25BA.pdf%22&x-id=GetObject',
    brif: '#',
    notion: 'https://www.notion.so/praktikum/React-fe10ed2678a84f1a8c8ed578c812fa05',
    long: '3 месяца',
    freetrack: 'Входное тестирование- 2 часа.',
    format: 'спринт 2 недели',
    timeInWeek: '20-25ч',
    document: 'Удостоверение',
    exp: 'курс 1,5 этажности, необходим опыт',
    price: [monthly = 'помесячно 17 340/ мес (52 020)', credit = 'от 2 623₽/мес до 24м', full = '51 000 рублей'],
    dateOfStarts: ['26.01, оплата до 25.01', '22.02, оплата до 31.01', '23.03'],
    popUp: [
        '20-25 часов / неделю, 1 академ (30д), 1 неделя каникул, 160ч',
        'спринт 2 недели / удостоверение',
        'Карьерный трек: есть',
        'Входное тестирование (2ч.)',
        'Библиотека для разработки интерфейсов React',
        'Redux, TypeScript, тесты на Jest',
        'Webpack 5',
        'Библиотека MobX, Redux Saga',
        'Функции-генераторы (ES6)',
        'Библиотека React Router',
    ],
    requireLinks: [
        {
            name: 'Базово о реакт',
            link: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b75bcf3a-dfeb-4151-bade-74e2b559f174/%D0%91%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE_%D0%BE_React.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230116T023627Z&X-Amz-Expires=86400&X-Amz-Signature=39570672abe924b75d99062073b62c90c7bc92740e7ed83374a62dd2ce621ef8&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%2591%25D0%25B0%25D0%25B7%25D0%25BE%25D0%25B2%25D0%25BE%2520%25D0%25BE%2520React.pdf%22&x-id=GetObject'
        },
        {
            name: 'Презентация от факультета веб',
            link: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0b0617fd-0a0b-4365-81d0-04806fdefc6e/%D0%9C%D0%B8%D0%B4%D0%BB_%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4_%D0%A0%D0%B5%D0%B0%D0%BA%D1%82.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230116T023628Z&X-Amz-Expires=86400&X-Amz-Signature=9219eb4d74d9221a27aea4765dca640b85bcd404bca60f2c116d7b422fdf1dd3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%259C%25D0%25B8%25D0%25B4%25D0%25BB%2520%25D1%2584%25D1%2580%25D0%25BE%25D0%25BD%25D1%2582%25D0%25B5%25D0%25BD%25D0%25B4_%25D0%25A0%25D0%25B5%25D0%25B0%25D0%25BA%25D1%2582.pdf%22&x-id=GetObject'
        }
    ]

}

let middleFrontend = {
    id: 'middle-frontend',
    title: 'Мидл фронтенд-разработчик',
    payment: 'https://practicum.yandex.ru/profile/middle-frontend/order/',
    syllabuses: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/18a0b101-ecb1-4ba8-ac28-76074691da53/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%BA%D1%83%D1%80%D1%81%D0%B0_%D0%9C%D0%B8%D0%B4%D0%BB_%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4_%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230116T023451Z&X-Amz-Expires=86400&X-Amz-Signature=90a359bbf545cf8a94548e091cd9232deb3eb9612dcc9886297fa26ddedfa9f6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%259F%25D1%2580%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D0%25BC%25D0%25BC%25D0%25B0%2520%25D0%25BA%25D1%2583%25D1%2580%25D1%2581%25D0%25B0%2520%25D0%259C%25D0%25B8%25D0%25B4%25D0%25BB%2520%25D1%2584%25D1%2580%25D0%25BE%25D0%25BD%25D1%2582%25D0%25B5%25D0%25BD%25D0%25B4%2520%25D1%2580%25D0%25B0%25D0%25B7%25D1%2580%25D0%25B0%25D0%25B1%25D0%25BE%25D1%2582%25D1%2587%25D0%25B8%25D0%25BA.pdf%22&x-id=GetObject',
    brif: '#',
    notion: 'https://www.notion.so/praktikum/fea6780713924c8eb785b91ff295a10b',
    long: '5 месяцев',
    freetrack: 'Онбординг (25 мин.) + входное тестирование (2-4ч.)',
    format: 'спринт 2-3 недели',
    timeInWeek: 'от 20ч в неделю',
    document: 'Диплом',
    exp: 'курс второго этажа',
    price: [monthly = '16 500/мес (82 500)', credit = 'кредит от 4 012₽/мес до 24 месяцев', full = '78 000 рублей'],
    dateOfStarts: [
        '26.01, оплата до 25.01',
        '22.02, оплата до 31.01',
        '23.03'
    ],
    popUp: [
        'Программа трудоустр - ва, акселерация, сопр - е на исп.сроке',
        'ES6.Модули в JS.NodeJS. Асинхронность.Синхронность.Git.',
        'Компонентный подход, SPA.Продвинутые технологии SPA.Advanced Nginx.Vps, vds, облака.Docker.Devops.CI / CD',
        'Отображение.DOM API.',
        'Браузерные события, Клиент - серверное взаимодействие.',
        'Шаблонизация.API: CRUD в REST, Правила в REST API, xhr, promise, Fetch API. TypeScript.Роутинг.',
        'Архитектура: CSS, компонент, MV *.Работа с запросами.Тестирование.Webpack.Eslint.',
        'Безопасность веб - приложений.Эксплуатация приложения.Docker.CDN.',
        'ReactJS, react router, webpack с React, Typescript в React.',
        'Компоненты.Canvas api.Игровые механики.Hoc, hook.Middlewares.',
        'Хранение данных.State management.Анимации.Service workers. Безопасность в react.Oauth.',
        'Управление памятью в JS.Производительность веб - приложений.Обработка серверных и клиентских ошибок.',
        'Quality assurance.Server side rendering.',//from top string
        'Хранилища в web.Другие способы авторизации.',
        'Алгоритмы: анализ сложности алгоритмов, массив, хеш - таблица, связный список, очередь, стек, дерево,',
        'куча, граф, сортировка, рекурсия, алгоритм Хаффмана, поиск в ширину и в глубину, динамическое программирование, мемоизация.',//from top string
    ],
    requireLinks: [
        {
            name: 'Презентация от факультета веб',
            link: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0b0617fd-0a0b-4365-81d0-04806fdefc6e/%D0%9C%D0%B8%D0%B4%D0%BB_%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4_%D0%A0%D0%B5%D0%B0%D0%BA%D1%82.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230116T023628Z&X-Amz-Expires=86400&X-Amz-Signature=9219eb4d74d9221a27aea4765dca640b85bcd404bca60f2c116d7b422fdf1dd3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25D0%259C%25D0%25B8%25D0%25B4%25D0%25BB%2520%25D1%2584%25D1%2580%25D0%25BE%25D0%25BD%25D1%2582%25D0%25B5%25D0%25BD%25D0%25B4_%25D0%25A0%25D0%25B5%25D0%25B0%25D0%25BA%25D1%2582.pdf%22&x-id=GetObject'
        }
    ],
}

let Maska = {
    id: '',
    title: '',
    payment: '',
    syllabuses: '',
    brif: '#',
    notion: '',
    long: '',
    freetrack: '',
    format: '',
    timeInWeek: '',
    document: '',
    exp: '',
    price: [monthly = '', credit = '', full = ''],
    dateOfStarts: [

    ],
    popUp: [

    ],
    requireLinks: [

    ],
}