// jquery swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// jquery fileInput plugin
$(function() {
    $(".input-file").fileinput('<button class="input-file__button">Прикрепить файл</button>');
});

let control = document.querySelector("#control");
let clearBn = document.querySelector("#clear");


// Добавление кнопки удаления при добавлении файлов
control.addEventListener('change', function() {
    clearBn.classList.add('remove-files-btn_add');
})

// Событие по клику на кнопку удалить
clearBn.addEventListener('click', function(){
    control.value = '';
    clearBn.classList.remove('remove-files-btn_add');
 });

// кастомная модалка
const button = document.querySelector('.order__button-btn');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

const closeModal = document.querySelector('.closeModal');

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