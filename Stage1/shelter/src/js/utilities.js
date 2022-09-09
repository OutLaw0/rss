/*BURGER*/

const burgerButton = document.querySelector(".hamburger");
//const burgerButtonLine = document.querySelector(".line");
const nav = document.querySelector(".nav");
const siteNav = document.querySelector(".nav__list");
const header = document.querySelector(".header__logo");

//export let scrollbarWidth = 0;
const html = document.querySelector('html')

function lockA() {  //prevent scrolling for modal window
  let xPos = window.scrollX;
  let yPos = window.scrollY;
  console.log(xPos)
  html.style.scrollBehavior = "auto"
  window.onscroll = () => {
    window.scroll(xPos, yPos);
  };
}
function unlock() {
  html.style.scrollBehavior = "smooth"
  window.onscroll = "";
}

function openNav() {
  if (nav.classList.contains("is-active")) unlock()
  else lockA();

    burgerButton.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    header.classList.toggle("is-active");
   
}

function closeNav(event) {
    const target = event.target;
    const its_menu = target == siteNav;
    const its_btnMenu = target == burgerButton || burgerButton.contains(target);
    const menu_is_active = nav.classList.contains("is-active");
  //if (its_menu)
 if (menu_is_active && !its_btnMenu && !its_menu){ //Close menu onclick all elem except nav_list
    header.classList.remove("is-active");
    burgerButton.classList.remove("is-active");
    nav.classList.remove("is-active");
    unlock()
   }
}

burgerButton.addEventListener("click", openNav); //set the event
burgerButton.addEventListener("touchmove", openNav, {passive:false}); //set the event
document.addEventListener("click", closeNav); //set the event
document.addEventListener("touchend", closeNav, {passive:false}); //set the event

/*BURGER*/

/*caching img*/

//const petsArray = ['charly', 'sophia', 'scarlet', 'timmy'];
const petsArray = [
  './assets/images/start-screen-puppy.png',
'./assets/images/donation-dog.png',
'./assets/images/about-pets.png'
];
const otherImg = [
  './assets/images/our-pets/pets-jennifer.png',
'./assets/images/our-pets/pets-sophia.png',
'./assets/images/our-pets/pets-woody.png',
'./assets/images/our-pets/pets-scarlet.png',
'./assets/images/our-pets/pets-katrine.png',
'./assets/images/our-pets/pets-timmy.png',
'./assets/images/our-pets/pets-freddie.png',
'./assets/images/our-pets/pets-charly.png'
];

function preloadImages() {
  for(let link of otherImg) {
    const img = new Image();
    img.src = link;
  }
  for(let link of petsArray) {
    const img = new Image();
    img.src = link;
  }

   /* for(let pet of petsArray) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/pets-${pet}/${i}.png`;
    }
    }*/
  
  } 

  window.addEventListener('load', preloadImages);

  /*caching img**/

 /*To Top*/
const scrollToTopBtn = document.querySelector(".button-to-top");

function getScrollPage() {
  

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
   
    scrollToTopBtn.style.opacity = '1';  }
    else {
   
    scrollToTopBtn.style.opacity = '0';  }
}

function scrollToTop() {
  const distFromTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (distFromTop > 0) {
   
    window.scrollTo(0, 0);
  }
}

document.addEventListener("scroll", getScrollPage);
scrollToTopBtn.addEventListener("click", function() {
 // e.preventDefault();
  scrollToTop();
});

/*To Top*/