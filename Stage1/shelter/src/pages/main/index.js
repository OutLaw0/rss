import '../../styles/style.scss';
import pets_info from '../../js/pets-info.js'
//import {lockA, unlock} from '../../js/utilities'

/* POPUP */
const sliderWrapper = document.querySelector(".main__items");
const paginationWrapper = document.querySelector(".our-pets__items");
const closeButton = document.querySelector(".popup-close");
const popupWrapper = document.querySelector(".popup__wrapper");
const popup = document.querySelector(".popup");
const html = document.querySelector('html')
//const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');

function lockA() {  //prevent scrolling for modal window
  let xPos = window.scrollX;
  let yPos = window.scrollY;
  html.style.scrollBehavior = "auto"
  window.onscroll = () => {
    window.scroll(xPos, yPos);
  };
}
function unlock() {
  window.onscroll = "";
  html.style.scrollBehavior = "smooth"
}

function openPopup(event) {
   const petItems = document.querySelectorAll(".slider__item");  
    petItems.forEach(item => {
       if(item.contains(event.target)){
       
         //document.body.classList.toggle('modal-open');
         const pet = item.dataset.pet;
         if(pet != undefined && pet){
          popup.classList.toggle("is-active");
          popup.classList.add("fade-in")
          setTimeout(() => {
            popup.classList.remove("fade-in")
        }, 150);
          lockA();
          setPetHtml(pet)
        }
       }
      })
    
}

function closePopup(event) {
    const target = event.target;
    const its_menu = target == popupWrapper || popupWrapper.contains(target);
    const menu_is_active = popup.classList.contains("is-active");
   if (target == closeButton){
      popup.classList.add("fade-out")
      setTimeout(() => {
        
        popup.classList.remove("is-active");
        popup.classList.remove("fade-out")
    }, 100);
   
    //  document.body.classList.remove('modal-open');
   unlock()
   }
 if (menu_is_active && !its_menu){ //Close menu onclick all elem except nav_list
  popup.classList.add("fade-out")
  setTimeout(() => {
   
    popup.classList.remove("is-active");
    popup.classList.remove("fade-out")
}, 100);


//  document.body.classList.remove('modal-open');
unlock()
  
   }
}     

if (sliderWrapper){
 
sliderWrapper.addEventListener("click", openPopup)//set the event
//sliderWrapper.addEventListener("touchend", openPopup, {passive:false})//set the event
}

if (paginationWrapper){
  // console.log(paginationWrapper)
   paginationWrapper.addEventListener("click", openPopup)//set the event
  // paginationWrapper.addEventListener("touchend", openPopup, {passive:false})//set the event
}


closeButton.addEventListener("click", closePopup); //set the event
closeButton.addEventListener("touchmove", closePopup, {passive:false}); //set the event
popup.addEventListener("click", closePopup); //set the event
popup.addEventListener("touchmove", closePopup, {passive:false}); //set the event

const popupImg = document.querySelector(".popup img");
const popupName = document.querySelector(".popup__item-title");
const popupSubTitle = document.querySelector(".popup__item-subtitle");
const popupText = document.querySelector(".popup--text");
const popupList = document.querySelectorAll(".popup__list--item");

function setPetHtml(pet) {
  //console.log(pet)
  const petData = pets_info[pet]

  popupImg.src = petData.img;
  popupImg.alt = petData.name
  popupName.textContent = petData.name;
  popupSubTitle.textContent = petData.type + ' - ' + petData.breed;
  popupText.textContent = petData.description;
  popupList[0].innerHTML = '<span>Age:</span> ' + petData.age;
  popupList[1].innerHTML = '<span>Inoculations:</span> ' + petData.inoculations.toString();
  popupList[2].innerHTML = '<span>Diseases:</span> ' + petData.diseases.toString();
  popupList[3].innerHTML = '<span>Parasites:</span> ' + petData.parasites.toString();

      }
/* POPUP END*/

/*TO DO

- mobile touches
- animation events

*/


