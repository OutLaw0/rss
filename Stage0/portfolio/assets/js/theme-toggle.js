 let theme;
 let lang;

const getPreference = () => {
    if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
    if (theme == "light"){
        reflectPreference();  

       }
  }
  if(localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    
    if (lang == "ru"){
     
     document.documentElement.lang = lang;
     document.firstElementChild.style.display = 'none';
  
      }
  
   }

}


const reflectPreference = () => {
   document.firstElementChild.classList.add("light");
   
  theme1 = "light";
    }


  
getPreference();


  
