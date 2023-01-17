let webBrifLink = document.querySelector(".web");
let webBootcampBrifLink = document.querySelector(".web-bootcamp");
let webPlusBrifLink = document.querySelector(".web-plus");
let reactDevBrifLink = document.querySelector(".react-dev");
let middleFrontendBrifLink = document.querySelector(".middle-frontend");
let asyncPythonBrifLink = document.querySelector(".async-python");
let cPlusPlusBrifLink = document.querySelector(".c-plus-plus");
let javaDevBrifLink = document.querySelector(".java-dev");
let qaBrifLink = document.querySelector(".qa");
let qaPlusBrifLink = document.querySelector(".qa-plus");
let qaBootcampBrifLink = document.querySelector(".qa-bootcamp");

function toggleBrif(web) {
  curseList.insertAdjacentHTML(
    `afterbegin`,
    `
<div class="pop-up">
<div class="pop-up__container">
    <ul class="pop-up__list">
    </ul >
    <div class='pop-up__info-box'></div>
    <button class="pop-up__close-button">
        <img src="./images/pop-up__form-close-button.svg" alt="Кнопка закрыть форму"
            class="pop-up__close-icon" />
    </button>
</div >
</div >
    `
  );
  let closeBrifButton = document.querySelector(".pop-up__close-button");
  let popUp = document.querySelector(".pop-up");
  let popUpList = curseList.querySelector(".pop-up__list");
  let popUpContainer = document.querySelector(".pop-up__info-box");
  //delete pop-up
  function deletePopUp() {
    popUp.remove();
  }
  closeBrifButton.addEventListener("click", deletePopUp);
  //Requier links
  for (let i = 0; i < web.requireLinks.length; i++) {
    popUpContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <a target="_blank" href="${web.requireLinks[i].link}"><p class="pop-up__info-box-item">${web.requireLinks[i].name}</p></a>
        `
    );
  }
  //Main brif
  for (let i = 0; i < web.popUp.length; i++) {
    popUpList.insertAdjacentHTML(
      "afterbegin",
      `
            <li class="pop-up__list-item">${web.popUp[i]}</li>
        `
    );
  }
}

// webBrifLink.addEventListener("click", () => {
//     for (let i = 0; i < programmArray.length; i++) {
//         toggleBrif(programmArray[i])
//     }
// })
webBrifLink.addEventListener("click", () => {
  toggleBrif(web);
});
webBootcampBrifLink.addEventListener("click", () => {
  toggleBrif(webBootcamp);
});
webPlusBrifLink.addEventListener("click", () => {
  toggleBrif(webPlus);
});
reactDevBrifLink.addEventListener("click", () => {
  toggleBrif(reactDev);
});
middleFrontendBrifLink.addEventListener("click", () => {
  toggleBrif(middleFrontend);
});

asyncPythonBrifLink.addEventListener("click", () => {
  toggleBrif(AsyncPython);
});

cPlusPlusBrifLink.addEventListener("click", () => {
  toggleBrif(cPlusPlus);
});
javaDevBrifLink.addEventListener("click", () => {
  toggleBrif(javaDev);
});

qaBrifLink.addEventListener("click", () => {
  toggleBrif(qa);
});
qaBootcampBrifLink.addEventListener("click", () => {
  toggleBrif(qaBootcamp);
});
qaPlusBrifLink.addEventListener("click", () => {
  toggleBrif(qaPlus);
});
