import pets_info from './pets-info'
//import {createPet} from './utilities';

/* SLIDER*/
const sliderWrapper = document.querySelector(".main__items");
let petsArray = ['Freddie', 'Charly', 'Sophia', 'Scarlett', 'Timmy']; //array that we a create new slide from 
let inSliderArray = ['Katrine', 'Jennifer', 'Woody']; //starting array
let newPetsArray = []; //temporary array for random func
let animationStop = true; // for prevent throttling slider
const sliderWrapperBase = document.querySelector(".slider__wrapper");
const prev = document.querySelector('.icon-Arrow-left');
const next = document.querySelector('.icon-Arrow-right');
let new_inner = '';


function createPet(pet){ //Create one pets card
    return  `<div class="slider__item " data-pet="${pet}">
    <img src="${pets_info[pet].img}" alt="${pet}">
    <span class="slider__item-title">${pet}</span>
    <button onclick="location.href = '#${pet}'" class="button button--second">Learn
        more</button>
    </div>`
    }
                               
 function startSlider(){ //Create default slide

   new_inner = '<div class="slider__items ">' + createPet(inSliderArray[0]) + createPet(inSliderArray[1]) + createPet(inSliderArray[2]) + '</div>';
   sliderWrapper.innerHTML = new_inner;
  }
   // const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  /* if (width >=551) new_inner += createPet("Jennifer");
   if (width >=1051) new_inner += createPet("Woody");*/


function getRandomPet(){
   const item = petsArray.splice(Math.floor(Math.random()*petsArray.length), 1)[0];
   newPetsArray.push(item);
   return item
}

function createSlider(event){
    const sliderItems = document.querySelector(".slider__items"); 
    new_inner = '<div class="slider__items">' + createPet(getRandomPet()) + createPet(getRandomPet()) + createPet(getRandomPet())+ '</div>';
   animationStop = false;
    let containerWidth = sliderWrapperBase.offsetWidth;
    let containerHeight = sliderWrapperBase.getBoundingClientRect().height; //get height number with after the decimal point
    let sliderWidth = sliderWrapper.offsetWidth;
    
    sliderWrapper.style.width = sliderWidth + containerWidth + "px";
    sliderWrapperBase.style.width = containerWidth + "px";
    sliderItems.style.height = containerHeight + "px";
   
    if (event.target == next){ //NEXT
        sliderWrapper.insertAdjacentHTML("beforeend", new_inner)
      sliderWrapper.style.float = 'left'
      sliderWrapper.style.transform = `translate3d(${-sliderWidth}px, 0px, 0px)`;
    
      sliderWrapper.style.transition = 'transform ease-in-out 500ms';
      setTimeout(() => {
        sliderWrapper.style.transition = "none";
        sliderWrapper.firstChild.remove(); 
         sliderWrapper.style.width = "auto"; sliderWrapper.style.transform = `translate3d(0px, 0px, 0px)`; animationStop = true;
         sliderWrapperBase.style.width = "auto"; sliderItems.style.height = "auto";
         
            }, 500);}
    else { //PREV
      sliderWrapper.insertAdjacentHTML("afterbegin", new_inner);
      sliderWrapper.style.float = 'right';  
      sliderWrapper.style.transform = `translate3d(${sliderWidth}px, 0px, 0px)`; 
  
      sliderWrapper.style.transition = 'transform ease-in-out 500ms';
    
      setTimeout(() => {
    sliderWrapper.style.transition = "none";
      sliderWrapper.lastChild.remove(); sliderWrapper.style.width = "auto"; 
      sliderWrapper.style.transform = 'none'; animationStop = true;
      sliderWrapperBase.style.width = "auto"; sliderItems.style.height = "auto";
      }, 500);}
   
   petsArray = petsArray.concat(inSliderArray);
   inSliderArray = newPetsArray; 
   newPetsArray = [];
 }

 
   window.addEventListener('load', startSlider());
   
   prev.addEventListener('click', (event) => {if(animationStop) createSlider(event)}); //we need to prevent many synchronous clicks
   next.addEventListener('click', (event) => {if(animationStop) createSlider(event)});

/* SLIDER END*/

