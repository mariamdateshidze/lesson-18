
// clock
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}




// slider
const slideItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('#prev-slide-btn');
const nextBtn = document.querySelector('#next-slide-btn');

const startBtn = document.querySelector('#start-slide-btn');
const stopBtn = document.querySelector('#stop-slide-btn');


const firstBtn = document.querySelector('.first');
const secondBtn = document.querySelector('.second');
const thirdBtn = document.querySelector('.third');



let myInterval=null;
let activeIndex = 0;

initSlider();
function initSlider(){
  prevBtn.addEventListener('click', showPrevSlide);
  nextBtn.addEventListener('click', showNextSlide);

  startBtn.addEventListener('click', next);
  stopBtn.addEventListener('click', stop );

  firstBtn.addEventListener('click', first);
  secondBtn.addEventListener('click', second);
  thirdBtn.addEventListener('click', third);

  document.addEventListener('keyup', e => {
    if(e.code === 'ArrowRight'){
      showNextSlide();
    }
    if(e.code === 'ArrowLeft'){
        showPrevSlide();
      }
  })
}

function next(){
    myInterval = setInterval(showNextSlide, 3000);
    
    renderSliders();

}

function stop(){
    clearInterval(myInterval)
    myInterval=null;

}

function renderSliders() {
  slideItems.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}

function showPrevSlide(){
  activeIndex = activeIndex - 1;
  if(activeIndex < 0){
    activeIndex = slideItems.length - 1;
  }
  renderSliders();
}

function showNextSlide() {
  activeIndex = activeIndex + 1;
  if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
  }
  renderSliders();
}

function first(){
    activeIndex=0;
    renderSliders();

}

function second(){
    activeIndex=1;
    renderSliders();

}

function third(){
    activeIndex=2;
    renderSliders();

}



