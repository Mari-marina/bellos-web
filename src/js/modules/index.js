import toggleBodyLock from './../helpers/toggleBodyLock'
import { html, firstScreen, header, burgerButton } from './../helpers/elementsNodeList'

// logger (Full Logging System) =================================================================================================================
function FLS(message) {
  setTimeout(() => (window.FLS ? console.log(message) : null), 0)
}

// Проверка браузера на поддержку .webp изображений =================================================================================================================
function isWebp() {
  // Проверка поддержки webp
  const testWebp = (callback) => {
    const webP = new Image()

    webP.onload = webP.onerror = () => callback(webP.height === 2)
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => {
    const className = support ? 'webp' : 'no-webp'
    html.classList.add(className)

    FLS(support ? 'webp поддерживается' : 'webp не поддерживается')
  })
}

/* Проверка мобильного браузера */
const isMobile = {
  Android: () => navigator.userAgent.match(/Android/i),
  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => navigator.userAgent.match(/Opera Mini/i),
  Windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () =>
    isMobile.Android() ||
    isMobile.BlackBerry() ||
    isMobile.iOS() ||
    isMobile.Opera() ||
    isMobile.Windows(),
}
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
  // Добавление класса _touch для HTML если браузер мобильный
  if (isMobile.any()) {
    html.classList.add('touch')
  }
}

// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      html.classList.add('loaded')
    }, 0)
  })
}

// Получение хеша в адресе сайта
const getHash = () => {
  if (location.hash) {
    return location.hash.replace('#', '')
  }
}

// Указание хеша в адресе сайта
function setHash(hash) {
  hash = hash ? `#${hash}` : window.location.href.split('#')[0]
  history.pushState('', '', hash)
}

// Функция для фиксированной шапки при скролле =================================================================================================================
function headerFixed() {
  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('sticky', !entry.isIntersecting)
  })

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen)
  }
}

// Универсальная функция для открытия и закрытия попапо =================================================================================================================
const togglePopupWindows = () => {
  document.addEventListener('click', ({ target }) => {
    if (target.closest('[data-type]')) {
      const popup = document.querySelector(
        `[data-popup="${target.dataset.type}"]`
      )

      if (document.querySelector('._is-open')) {
        document.querySelectorAll('._is-open').forEach((modal) => {
          modal.classList.remove('_is-open')
        })
      }

      popup.classList.add('_is-open')
      toggleBodyLock(true)
    }

    if (
      target.classList.contains('_overlay-bg') ||
      target.closest('.button-close')
    ) {
      const popup = target.closest('._overlay-bg')

      popup.classList.remove('_is-open')
      toggleBodyLock(false)
    }
  })
}

// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
const menuInit = () => {
  if (burgerButton) {
    document.addEventListener('click', ({ target }) => {
      if (target.closest('.icon-menu')) {
        html.classList.toggle('menu-open')
        toggleBodyLock(html.classList.contains('menu-open'))
      }
    })
  }
}
const menuOpen = () => {
  toggleBodyLock(true)
  html.classList.add('menu-open')
}
const menuClose = () => {
  toggleBodyLock(false)
  html.classList.remove('menu-open')
}

export {
  FLS,
  isWebp,
  isMobile,
  addTouchClass,
  headerFixed,
  togglePopupWindows,
  addLoadedClass,
  getHash,
  setHash,
  menuInit,
  menuOpen,
  menuClose,
}

const button = document.querySelector(".burger");
let menu = document.querySelector(".nav");
let buttonMenu = document.querySelector(".burger__btn");


button.addEventListener("click", function () {
  menu.classList.toggle("active");
});

buttonMenu.addEventListener("click", function () {
  buttonMenu.classList.toggle("close");
});

let anchors = document.querySelectorAll('a[href*="#"]');
// let anchors = document.querySelectorAll(".go_top");
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}


let modalButton = document.getElementById("modalBtn");
let applicationBtn = document.querySelector(".main__wrap");
let applicationBtnThird = document.getElementById("main__wrapthird");
let applicationProcessing = document.getElementById("application-processing");
let applicationProcessing2 = document.getElementById("application-processing2");
let createAnApplication = document.getElementById("create-an-application");
let modalWindow = document.querySelector(".modal");
let modalWindowSecond = document.querySelector(".modal-second");
let modalWindowThird = document.querySelector(".modal-third");
let modalWindowFourth = document.querySelector(".modal-fourth");
let closeBtn = document.querySelector(".close-btn")
let closeBtnNew = document.querySelector(".close-btn-new")
let closeBtnThird = document.querySelector(".close-btn-third")
let closeBtnFourth = document.querySelector(".close-btn-fourth")



modalButton.addEventListener("click", function () {
  modalWindow.style.display = "flex";
});
closeBtn.addEventListener("click", function () {
  modalWindow.style.display = "none";
});
createAnApplication.addEventListener("click", function () {
  modalWindow.style.display = "none";
});
createAnApplication.addEventListener("click", function () {
  modalWindowSecond.style.display = "flex";
});
applicationBtn.addEventListener("click", function () {
  modalWindowSecond.style.display = "flex";
});
closeBtnNew.addEventListener("click", function () {
  modalWindowSecond.style.display = "none";
});


modalWindow.addEventListener("click", function (event) {
  if (event.target === modalWindow) {
    modalWindow.style.display = "none";
  }
});
modalWindowSecond.addEventListener("click", function (event) {
  if (event.target === modalWindowSecond) {
    modalWindowSecond.style.display = "none";
  }
});



applicationBtnThird.addEventListener("click", function () {
  modalWindowThird.style.display = "flex";
});
closeBtnThird.addEventListener("click", function () {
  modalWindowThird.style.display = "none";
});
modalWindowThird.addEventListener("click", function (event) {
  if (event.target === modalWindowThird) {
    modalWindowThird.style.display = "none";
  }
});
applicationProcessing2.addEventListener("click", function () {
  modalWindowThird.style.display = "none";
});
applicationProcessing2.addEventListener("click", function () {
  modalWindowFourth.style.display = "flex";
});

applicationProcessing.addEventListener("click", function () {
  modalWindowFourth.style.display = "flex";
});
applicationProcessing.addEventListener("click", function () {
  modalWindowSecond.style.display = "none";
});
closeBtnFourth.addEventListener("click", function () {
  modalWindowFourth.style.display = "none";
});
modalWindowFourth.addEventListener("click", function (event) {
  if (event.target === modalWindowFourth) {
    modalWindowFourth.style.display = "none";
  }
});


let modalButtonfifth = document.getElementById("add");
let modalFifth = document.querySelector(".modal-fifth");
let modalFifthClose = document.querySelector(".close-btn-fifth");

modalButtonfifth.addEventListener("click", function () {
  modalFifth.style.display = "flex";
});
modalFifthClose.addEventListener("click", function () {
  modalFifth.style.display = "none";
});
modalFifth.addEventListener("click", function (event) {
  if (event.target === modalFifth) {
    modalFifth.style.display = "none";
  }
});