/* SLIDER*/
const sliderWrapper = document.querySelector(".slider__items");
const textWrapper = document.querySelector(".slider__texts");

let slides = document.querySelectorAll('.slider__item');
const controls = document.querySelectorAll('.slider__control');
let animationStop = true;

function moveSlider(event){
   
  //animationStop = false;

   let ctrl = event.currentTarget
   let ctrlOrder= ctrl.dataset.ctrl;
   controls.forEach(c => c.classList.remove('active'))
  //console.log(event)
  let sliderWidth = (ctrlOrder-1) * 100;
   
     sliderWrapper.style.transform = `translateX(${-sliderWidth}%)`;
     ctrl.classList.add('active')
     textWrapper.style.transform = `translateX(${-sliderWidth}%)`;

     //sliderWrapper.style.transition = 'transform ease-in-out 500ms';
    /* setTimeout(() => {
      sliderWrapper.style.transform = `translateX(${sliderWidth}%)`
   
           }, 3000);*/
  
}


   
controls.forEach(c => c.addEventListener('click', (event) => {if(animationStop) moveSlider(event)})); //we need to prevent many synchronous clicks
  // next.addEventListener('click', (event) => {if(animationStop) createSlider(event)});

/* SLIDER END*/

/*TODO

event target 


*/

  console.log("(" + new Date() + ")")

