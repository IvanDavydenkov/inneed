
let curseList = document.querySelector('.curse-list')
function makeUp(web) {
    curseList.insertAdjacentHTML('afterbegin',
        ` <li class="curse-list__item ${web.id}">
<div class="curse-list__head">
    <h3 class="curse-list__curse-name">${web.title}</h3>
    <div class="curse-list__links">
        <a href="${web.payment}" class="curse-list__link">
            <p class="curse-list__dcs">Оплата</p>
        </a>
        <a href="${web.syllabuses}" class="curse-list__link">
            <p class="curse-list__dcs ">Силабус</p>
        </a>
        <a href="${web.brif}" class="curse-list__link">
            <p class="curse-list__dcs ${web.id}">Бриф</p>
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
webBlock = document.querySelectorAll('.web')

webBlock.addEventListener('click', () => { })