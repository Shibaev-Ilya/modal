var buy = document.querySelector('.button');
var modalWindow = document.querySelector('.modal');
var closeModalWindow = document.querySelector('.close');
var forward = document.querySelector('.forward');
var back = document.querySelector('.back');
var two = document.querySelector('.two');
var one = document.querySelector('.one');
var three = document.querySelector('.three');
var four = document.querySelector('.four');

buy.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalWindow.classList.add('visible');
});

closeModalWindow.addEventListener('click', function() {
    modalWindow.classList.remove('visible');
});

var countStep = 0;

forward.addEventListener('click', function() {
    countStep +=1;
    console.log(countStep);
    if(countStep == 1 ) {
        two.classList.add('active');
        one.classList.remove('active');
        one.classList.add('done'); 
    }
    if (countStep == 2 ) {
        three.classList.add('active');
        two.classList.remove('active');
        two.classList.add('done');
    }
    if (countStep == 3 ) {
        four.classList.add('active');
        three.classList.remove('active');
        three.classList.add('done');
        forward.textContent = "Подписаться";
    }
    
});






