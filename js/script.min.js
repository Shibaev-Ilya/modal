var buy = document.querySelector('.button');
var modalWindow = document.querySelector('.modal');
var closeModalWindow = document.querySelector('.close');
var forward = document.querySelector('.forward');
var back = document.querySelector('.back');
var two = document.querySelector('.two');
var one = document.querySelector('.one');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var stepOne = document.querySelector('.step-1');
var stepTwo = document.querySelector('.step-2');
var stepThree = document.querySelector('.step-3');
var stepFour = document.querySelector('.step-4');
var subsc = document.querySelector('.subsc');

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
        one.classList.add('done');
        stepOne.classList.add('hidden');
        stepTwo.classList.remove('hidden'); 
    }
    if (countStep == 2 ) {
        three.classList.add('active');
        two.classList.add('done');
        stepTwo.classList.add('hidden');
        stepThree.classList.remove('hidden'); 
    }
    if (countStep == 3 ) {
        four.classList.add('active');
        three.classList.add('done');
        stepThree.classList.add('hidden');
        stepFour.classList.remove('hidden');
        forward.classList.add('hidden');
        subsc.classList.remove('hidden');
    }
    
});






