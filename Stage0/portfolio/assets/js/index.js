
//let lang ;
//let theme = "dark";

/*test script local storage*/



function getTranslate1() {
  
  if (lang == "ru"){
    getTranslate();
  }
  
}

   document.addEventListener('DOMContentLoaded', getTranslate1);
  

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

/*To Top*/
const scrollToTopBtn = document.querySelector(".scrollToTop");

function getScrollPage() {
  if (burgerButton.classList.contains('is-active')){

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    burgerButton.classList.add("fixedscroll")
    scrollToTopBtn.style.opacity = '1';  }
    else {
    burgerButton.classList.remove("fixedscroll")
    scrollToTopBtn.style.opacity = '0';  }

  } else {
 
  if ( document.documentElement.scrollTop <= 150) {
    burgerButton.classList.remove("fixedscroll")
   
    burgerButton.style.opacity = '1';
    scrollToTopBtn.style.opacity = '0';   
  } 
  if ( document.documentElement.scrollTop > 150 && document.documentElement.scrollTop <= 250) {
   
    burgerButton.style.opacity = '0';
    scrollToTopBtn.style.opacity = '1';  
   
  } 
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
  
    burgerButton.style.opacity = '1';
    burgerButton.classList.add("fixedscroll")
  } 
  }
};

function scrollToTop() {
  const distFromTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (distFromTop > 0) {
   
    window.scrollTo(0, 0);
  }
};

document.addEventListener("scroll", getScrollPage);
scrollToTopBtn.addEventListener("click", function(e) {
 // e.preventDefault();
  scrollToTop();
});

/*To Top*/

/* switch theme*/


const swt = document.querySelector(".switch-theme");

function switchTheme() {
    if(document.firstElementChild.classList.contains('light')) {
        document.firstElementChild.classList.remove("light");
        theme = 'dark';

    } else {
        document.firstElementChild.classList.add("light");
        theme = 'light'; 
    }
   
}

swt.addEventListener("click", switchTheme); //set the event


/* switch theme*/

/*caching img*/

const seasons = ['winter', 'spring', 'summer', 'autumn'];
const heroArray = [
  './assets/img/light-theme/bg.jpg',
'./assets/img/light-theme/contacts.jpg'
];
function preloadSummerImages() {
  for(let hero of heroArray) {
    const img = new Image();
    img.src = hero;
  }
    for(let season of seasons) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i}.jpg`;
    }
    }
  
  } 
  window.addEventListener('load', preloadSummerImages);

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

     pics__autumn.forEach((pic, index) => { //change src and alt by name
       // pic.src = pic.src.replace(/winter|autumn|summer|spring/, btn_data);
       pic.src = `./assets/img/${btn_data}/${index + 1}.jpg`; 
       pic.alt = btn_data
         
        pic.classList.toggle("animate");
    })
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

function getTranslate() {
  let data = document.documentElement.lang
  langBtn.forEach(l => l.classList.remove("active"));
  let newTarget = document.querySelector(`.lang__${data}`);
  newTarget.classList.add("active");
  let i = 0;
    for (let key in i18Obj[data]) {
      i++;
      document.querySelectorAll('.section-title').forEach(s => s.classList.add('fade1'));
      document.querySelector('.' + key).classList.add('fade');
      setTimeout(function tick() {document.querySelector('.' + key).textContent = i18Obj[data][key] ;
     
    }, 150);
       // document.querySelector('.' + key).textContent = i18Obj[data][key];
        setTimeout(function tick() {document.querySelector('.' + key).classList.remove('fade'); 
        document.querySelectorAll('.section-title').forEach(s => s.classList.remove('fade1'))
      }, 350);
    
    }
   // if (i == 45){
      setTimeout(function tick() {document.firstElementChild.style.display = 'block';},300)
   // }
}

function langSwitch(btn) { //find click obj

  if (lang != btn.target.dataset.lang){
    lang = btn.target.dataset.lang;
    document.documentElement.lang = lang;
    getTranslate();
  }
}
langBtn.forEach(ln => ln.addEventListener("click", langSwitch)); //set the event


/*test script lang switch*/

function setLocalStorage() {
    
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
  }
  window.addEventListener('beforeunload', setLocalStorage);
