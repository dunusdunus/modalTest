const control = document.querySelector("#control");
const clearBtn = document.querySelector("#clear");

const button = document.querySelector('.order__button-btn');
const buttonWrapper = document.querySelector('.button');
let labelForControl = document.querySelector('label[for="control"]');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const closeModal = document.querySelector('.closeModal');

const dropDownButton = document.querySelector('.select__button');
const dropDown = document.querySelector('.select__list');
let dropDownItems = document.querySelectorAll('.select__list-item');
let dropDownSelectedValue = document.querySelector('.select__input');

// jquery swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    breakpoints: {
        1440: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 4,
        },
        700: {
            slidesPerView: 4,
        },
        425: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Логика при добавлении файлов
control.addEventListener('change', function() {
    clearBtn.classList.add('remove-files-btn_add');
    if (control.files.length !== 1) {
        labelForControl.innerText = 'Выбрано файлов: ' + control.files.length;
    } else {
        labelForControl.innerText = control.files[0].name;
    }
});

// Событие по клику на кнопку удалить
clearBtn.addEventListener('click', function(e){
    e.preventDefault;
    control.value = '';
    clearBtn.classList.remove('remove-files-btn_add');
    labelForControl.innerText = 'Прикрепить файлы';
 });


// Кастомная модалка
button.addEventListener('click', function() {
    modal.classList.toggle('visible');
    body.classList.add('body-color');
    buttonWrapper.classList.add('visible');
});

closeModal.addEventListener('click', function() {
    modal.classList.toggle('visible');
    body.classList.remove('body-color');
    buttonWrapper.classList.remove('visible');
});


// Событие по клику на дропдаун
dropDownButton.addEventListener('click', function() {
    dropDown.classList.toggle('visible');
    this.classList.add('select__button--active');
});

// Событие по клику на один из элементов списка
dropDownItems.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation(); // метод для остановки события клика за пределами дропдауна в функции ниже
        dropDownButton.innerText = this.innerText;
        dropDownButton.focus();
        dropDownSelectedValue.value = this.dataset.value; // для записи выбранного значения в инпут
        dropDown.classList.toggle('visible');
    });
});

// Клик снаружи дропдауна для его закрытия
document.addEventListener('click', function(e) {
    if (e.target !== dropDownButton) {
        dropDownButton.classList.remove('select__button--active');
        dropDown.classList.add('visible');
    }
});

// Скрывать дропдаун при клике на esc либо tab
document.addEventListener('keydown', function(e) {
    if(e.key == 'Tab' || e.key === 'Escape') {
        dropDownButton.classList.remove('select__button--active');
        dropDown.classList.add('visible');
    }
});