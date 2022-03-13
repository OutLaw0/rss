
let lang = "en";
let theme = "dark";

/*test script local storage*/



function getLocalStorage() {
    if(localStorage.getItem('lang')) {
     lang = localStorage.getItem('lang');
     if (lang == "ru"){
        getTranslate(lang); 
       }
   
    }

    if(localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
        if (theme == "light"){
            switchTheme();  
           }
       }
  }


    window.addEventListener('DOMContentLoaded', getLocalStorage);
  

 /*test script local storage*/

/*test burger button*/

const burgerButton = document.querySelector(".hamburger");
const burgerButtonLine = document.querySelector(".line");
const nav = document.querySelector(".nav");
const siteNav = document.querySelector(".nav__list");
//const navItems = document.querySelectorALL(".nav__item");
function openNav() {
    burgerButton.classList.toggle("is-active");
    nav.classList.toggle("is-active");
 
}

function closeNav(event) {
     const target = event.target;
    const its_menu = target == siteNav;
    const its_btnMenu = target == burgerButton || burgerButton.contains(target);
    const menu_is_active = nav.classList.contains("is-active");
   
 if (menu_is_active && !its_btnMenu && !its_menu){ //Close menu onclick all elem except nav_list
    burgerButton.classList.remove("is-active");
    nav.classList.remove("is-active");
   }

   /*
    if (event.target.classList.contains('nav__link')) {
    burgerButton.classList.remove("is-active");
    nav.classList.remove("is-active");
   }*/
  
}

burgerButton.addEventListener("click", openNav); //set the event
//siteNav.addEventListener("click", closeNav); //set the event
document.addEventListener("click", closeNav); //set the event

/*test burger button*/

/* switch theme*/


const swt = document.querySelector(".switch-theme");

function switchTheme() {
    if(body.classList.contains('light')) {
        body.classList.remove("light");
        theme = 'dark';

    } else {
        body.classList.add("light");
        theme = 'light'; 
    }
   
}

swt.addEventListener("click", switchTheme); //set the event


/* switch theme*/

/*caching img*/

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadSummerImages() {
    const img = new Image();
    for(let season of seasons) {
    for(let i = 1; i <= 6; i++) {
      
      img.src = `./assets/img/${season}/${i}.jpg`;
    }
    }
   img.src = "./assets/img/light-theme/bg.jpg";
  img.src = "./assets/img/light-theme/contacts.jpg";
  } 
  preloadSummerImages();
  /*caching img**/

/*script portfolio*/
const portfolio__buttons = document.querySelector(".portfolio__buttons");
const buttons = portfolio__buttons.querySelectorAll("button");
const pics__autumn = document.querySelectorAll(".pics__autumn img"); //find pics
function changePics(btn) {
    if (!btn.target.classList.contains("active")){ //check non active btn
    buttons.forEach(bt => bt.classList.remove("active"));
    btn.target.classList.add("active");

   
    
    let btn_data = btn.target.dataset.season;   

    for (let pic of pics__autumn) { //change src and alt by name
        pic.src = pic.src.replace(/winter|autumn|summer|spring/, btn_data);
        pic.alt = pic.alt.replace(/winter|autumn|summer|spring/, btn_data);
        pic.classList.toggle("animate");
    }
    }
  /* first solution with btn ID
   let if_id = btn.target.id;   

        for (let pic of pics__autumn) { //change src and alt by name
            pic.src = pic.src.replace(/winter|autumn|summer|spring/, if_id);
            pic.alt = pic.alt.replace(/winter|autumn|summer|spring/, if_id);
            pic.classList.toggle("animate");
        }
  */
}
buttons.forEach(bt => bt.addEventListener("click", changePics)); //set the event
/*script portfolio*/



/*test script lang switch*/
const lang__switch = document.querySelector(".lang__switch");
const langBtn = lang__switch.querySelectorAll('.lang');

import i18Obj from './translate.js' //import of translate

function getTranslate(data) {
    langBtn.forEach(l => l.classList.remove("active"));
    let newTarget = document.querySelector(`.lang__${data}`);
    newTarget.classList.add("active");
    for (let key in i18Obj[data]) {
        document.querySelector('.' + key).textContent = i18Obj[data][key];
    }

}

function langSwitch(btn) { //find click obj

    lang = btn.target.dataset.lang;
    
    getTranslate(lang);
}
langBtn.forEach(ln => ln.addEventListener("click", langSwitch)); //set the event


/*test script lang switch*/

function setLocalStorage() {
    
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
  }
  window.addEventListener('beforeunload', setLocalStorage);