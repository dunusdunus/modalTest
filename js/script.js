const control = document.querySelector("#control");
const clearBtn = document.querySelector("#clear");

const button = document.querySelector('.order__button-btn');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const closeModal = document.querySelector('.closeModal');

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

// jquery fileInput plugin
$(function() {
    $(".input-file").fileinput('<button class="input-file__button">Прикрепить файл</button>');
});

// Добавление кнопки удаления при добавлении файлов
control.addEventListener('change', function() {
    clearBtn.classList.add('remove-files-btn_add');
})

// Событие по клику на кнопку удалить
clearBtn.addEventListener('click', function(e){
    e.preventDefault;
    control.value = '';
    clearBtn.classList.remove('remove-files-btn_add');
 });


// кастомная модалка
button.addEventListener('click', function() {
    modal.classList.toggle('visible');
    body.classList.add('body-color');
})

closeModal.addEventListener('click', function() {
    modal.classList.toggle('visible');
    body.classList.remove('body-color');
})


// попытка сделать кастомный инпут типа файл

// const selectFiles = document.querySelector('.select-files');
// const addFiles = document.querySelector('.select__get-file');
// const removeFiles = document.querySelector('.remove-files');

// addFiles.addEventListener('change', function() {

//     selectFiles.classList.add('select-files_add');
// })

// removeFiles.addEventListener('click', function() {
//     selectFiles.classList.remove('select-files_add');
// })