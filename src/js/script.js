var buy = document.querySelector('.button');
var modalWindow = document.querySelector('.modal');
var closeModalWindow = document.querySelector('.close');

buy.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalWindow.classList.add('visible');
});

closeModalWindow.addEventListener('click', function() {
    modalWindow.classList.remove('visible');
});







