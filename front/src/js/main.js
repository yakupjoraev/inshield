// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.footer__nav')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('[data-menu-item]')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav);


function tokenomicsSelect() {
  const container = document.querySelector('.tokenomics');

  if (!container) {
    return null
  }

  let tokenomicsItems = document.querySelectorAll('[data-tokenomics-item]');

  const removeClass = () => {
    tokenomicsItems.forEach(tokenomicsItem => {
      tokenomicsItem.classList.remove('active')
    })
  }

  tokenomicsItems.forEach(tokenomicsItem => {

    tokenomicsItem.addEventListener('click', () => {
      removeClass();
      tokenomicsItem.classList.add('active')
    })
  });
}

tokenomicsSelect();

// Аккордеон
const accordionItems = document.querySelectorAll('[data-accordion-item]');
let openAccordion = null; // переменная для хранения ссылки на открытый аккордеон

function toggleAccordion() {
  if (openAccordion && openAccordion !== this) {
    // Если есть открытый аккордеон, который не совпадает с текущим
    openAccordion.classList.remove('active'); // закрыть его
    const openAccordionContent = openAccordion.nextElementSibling;
    if (openAccordionContent) {
      // если у аккордеона есть содержимое
      openAccordionContent.style.maxHeight = null; // сбросить высоту контента
    }
  }

  this.classList.toggle('active'); // открыть или закрыть текущий аккордеон

  const content = this.nextElementSibling;
  if (content) {
    // если у аккордеона есть содержимое
    if (content.style.maxHeight) {
      // Если контент открыт, закрыть его
      content.style.maxHeight = null;
    } else {
      // Если контент закрыт, открыть его
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  openAccordion = this; // запомнить ссылку на открытый аккордеон
}


accordionItems.forEach(item => item.addEventListener('click', toggleAccordion));


function roadMapFilters() {
  const container = document.querySelector('[data-roadmap-filters]');

  if (!container) {
    return null
  }

  let roadMapYears = document.querySelectorAll('[data-roadmap-year]');

  const removeClass = () => {
    roadMapYears.forEach(roadMapYear => {
      roadMapYear.classList.remove('active')
    })
  }

  roadMapYears.forEach(roadMapYear => {

    roadMapYear.addEventListener('click', () => {
      removeClass();

      roadMapYear.classList.add('active');
    })
  });

  let roadmapQuarters = document.querySelectorAll('[data-roadmap-quarters]');

  const removeClass2 = () => {
    roadmapQuarters.forEach(roadmapQuarter => {
      roadmapQuarter.classList.remove('active')
    })
  }

  roadmapQuarters.forEach(roadmapQuarter => {

    roadmapQuarter.addEventListener('click', () => {
      removeClass2();

      roadmapQuarter.classList.add('active');
    })
  });
}

roadMapFilters();

// document.addEventListener("DOMContentLoaded", function () {
//   const asideLinks = document.querySelectorAll(".aside__link, .aside__sublink, .footer__link");
//   const sections = document.querySelectorAll("section");

//   asideLinks.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//       const targetId = link.getAttribute("href");
//       const targetSection = document.querySelector(targetId);

//       if (targetSection) {
//         sections.forEach((section) => {
//           section.style.display = "none";
//         });

//         targetSection.style.display = "block";
//       }
//     });
//   });
// });

//плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    const targetBlock = document.getElementById(blockID);
    const offset = 100; // Отступ в пикселях

    const topOffset = targetBlock.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  });
}

// var swiper = new Swiper(".mySwiper", {
//   grabCursor: true,
//   // effect: "creative",
//   spaceBetween: 30,
//   mousewheel: true,
//   direction: "vertical",
//   slidesPerView: 1,
//   // creativeEffect: {
//   //   prev: {
//   //     shadow: true,
//   //     translate: [0, 0, -400],
//   //   },
//   //   next: {
//   //     translate: ["100%", 0, 0],
//   //   },
//   // },
// });
