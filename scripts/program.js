
let curseList = document.querySelector('.curse-list')
function makeUp(web) {
    curseList.insertAdjacentHTML('afterbegin',
        ` <li class="curse-list__item">
<div class="curse-list__head">
    <h3 class="curse-list__curse-name">${web.title}</h3>
    <div class="curse-list__links">
        <a href="${web.payment}" class="curse-list__link">
            <p class="curse-list__dcs">Оплата</p>
        </a>
        <a href="${web.syllabuses}" class="curse-list__link">
            <p class="curse-list__dcs ">Силабус</p>
        </a>
        <a href="${web.brif}" class="curse-list__link ${web.id}">
            <p class="curse-list__dcs">Бриф</p>
        </a>
        <a href="${web.notion}" class="curse-list__link">
            <p class="curse-list__dcs">Ноушен</p>
        </a>
    </div>
</div>
<div class="curse-list__info">
    <p class="curse-list__dsc">Длительность: ${web.long}</p>
    <p class="curse-list__dcs">${web.freetrack}</p>
    <p class="curse-list__dcs">Формат: ${web.format}</p>
    <p class="curse-list__dcs">Нагрузка: ${web.timeInWeek}</p>
    <p class="curse-list__dcs">Документ: ${web.document}</p>
    <p class="curse-list__dcs">Опыт: ${web.exp}</p>
    <p class="curse-list__dcs">Стоимость:</p>
    <ul class="curse-list__price-list">
    </ul>
    <p class="curse-list__dcs">Даты стартов потокв:</p>
    <ul class="curse-list__date-list">
    </ul>
</div>
</li>`
    )

    //Price list
    let priceList = curseList.querySelector('.curse-list__price-list')
    for (let i = 0; i < web.price.length; i++) {
        priceList.insertAdjacentHTML('afterbegin',
            `<li class="curse-list__price">${web.price[i]}</li>`)
    }

    //Date list
    let dateList = curseList.querySelector('.curse-list__date-list')
    for (let i = 0; i < web.dateOfStarts.length; i++) {
        dateList.insertAdjacentHTML('afterbegin', `<li class="curse-list__date">${web.dateOfStarts[i]}</li>`
        )
    }
}

let programmArray = [
    web, webBootcamp, webPlus
]

for (let i = 0; i < programmArray.length; i++) {
    makeUp(programmArray[i])
}

let webBrifLink = document.querySelector('.web')


function toggleWebBrif() {
    curseList.insertAdjacentHTML(`afterbegin`, `
<div class="pop-up">
<div class="pop-up__container">
    <ul>
        <li>15 -20 ч / неделю, 3 академа (30 дней), каникулы после каждого модуля, 720 ч</li>
        <li>спринт 2 недели / диплом</li>
        <li>Карьерный трек: есть Программа трудоустр-ва, акселерация</li>
        <li>Онбординг (15 минут) + Фритрек (20 ч.)</li>
        <li>фронтенд-разработчик</li>
        <li>Базовый синтаксис HTML и CSS</li>
        <li>Язык программирования JavaScript </li>
        <li>Библиотека React и её экосистема</li>
        <li>Серверный JavaScript в Node.js</li>
        <li>Инструмент Webpack (соединяет JavaScript и CSS-файлы)</li>
        <li>Работа с макетом, построение сложных сеток, адаптивная вёрстка</li>
        <li>Серверный API для сайта (бэкенд)</li>
        <li>Группировка элементов технологией Grid Layout</li>
        <li>Nginx, Система контроля версий Git, Методология БЭМ</li>
        <li>VScode, bash, Я.Облако,GitHub Actions, Express.js, mongoDB</li>
        <li>Не учим в этом курсе: JAVA, Go, Php</li>
    </ul>
    <button class="pop-up__close-button">
        <img src="./images/pop-up__form-close-button.svg" alt="Кнопка закрыть форму"
            class="pop-up__close-icon" />
    </button>
</div>
</div>
`
    )
    let closeBrifButton = document.querySelector('.pop-up__close-button')
    let popUp = document.querySelector('.pop-up')
    function deletePopUp() {
        popUp.remove()
    }
    closeBrifButton.addEventListener('click', deletePopUp)

}

webBrifLink.addEventListener("click", toggleWebBrif)

