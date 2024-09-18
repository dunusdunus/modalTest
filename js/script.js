const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const button = document.querySelector('.order__button-btn');
const modal = document.querySelector('.modal');

const closeModal = document.querySelector('.closeModal');

button.addEventListener('click', function() {
    modal.classList.toggle('visible');
})

closeModal.addEventListener('click', function() {
    modal.classList.toggle('visible');
})