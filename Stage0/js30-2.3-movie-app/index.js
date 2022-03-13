const search = document.querySelector(".search");
const main = document.querySelector(".main");
const apikey = "?api_key=02c33b583785611c12c4ab38a8c22b03";
const poster_before = 'https://image.tmdb.org/t/p/w500';
const link_start = 'https://api.themoviedb.org/3/';
const link_middle = '&language=en-US';
const link_end = '&page=1';
let new_inner = '';
let url_main = '';
let value = '';
let cast_id = '';

//create api link ang get JSON and replace innerHTML//
async function getFilmsProcessing(url_main, value) {

  const url = link_start + url_main + apikey + link_middle + value + link_end;
  console.log(url)
  const res = await fetch(url);
  const data = await res.json();

  if (data.results.length > 0) {

    for (let r of data.results) {
      let title = r.original_title;
      let poster = r.poster_path;
      let plot = r.overview;
      let rate = r.vote_average;
      let class_rate = rate >= 8 ? 'good' : rate >= 5.5 ? 'norm' : 'bad';
      if (poster != null) {
        new_inner += `<div class="movie">
    <img src="${poster_before + poster}" alt="${title}">
    <div class="movie__info">
    <h3>${title}</h3>
    <span class=${class_rate}>${rate}</span>
    </div>
    <div class="movie__overview">
    <h3>Overview</h3>
    ${plot}
    </div>
    </div>`;
      }
    }
  } else {
    new_inner = `<div class="error__info"><p>No matched result. Try again!</p></div>`
  }


  main.innerHTML = new_inner;
}


async function getCastProcessing(url_main, value) {

  const url = link_start + url_main + apikey + link_middle + value + link_end;
  console.log(url)
  const res = await fetch(url);
  const data = await res.json();

  if (data.results.length > 0) {
    url_main = 'discover/movie';
    value = '&with_cast=' + data.results[0].id;
    getFilmsProcessing(url_main, value);

    /*for (let r of data.results){
    cast_id = cast_id + ',' + r.id;
    
    let cast_name = r.name;
    
    }*/
  } else {
    new_inner = `<div class="error__info"><p>No matched result. Try again!</p></div>`
    main.innerHTML = new_inner;
  }


}

//get 
function getPeopleMovie() {
  
  new_inner = '';
  url_main = 'movie/now_playing';
  value = '';

  getFilmsProcessing(url_main, value);

}

//get 
function getTopRated() {
  
  new_inner = '';
  url_main = 'movie/top_rated';
  value = '';

  getFilmsProcessing(url_main, value);

}
//get 
function getNowPlaying() {

  new_inner = '';
  url_main = 'movie/now_playing';
  value = '';

  getFilmsProcessing(url_main, value);

}
//get default prop
function getPopularFilms() {

  new_inner = '';
  url_main = 'movie/popular';
  value = '';

  getFilmsProcessing(url_main, value);
  //https://api.themoviedb.org/3/discover/movie?api_key=02c33b583785611c12c4ab38a8c22b03&language=en-US&sort_by=popularity.desc&page=1

}



//get search link prop
function getFilmsSearch(event) {
  let btnRadio = document.querySelector('input[type=radio]:checked');
  new_inner = '';
  if (event.keyCode == 13) {
    event.preventDefault();
    if (this.value != '') {

      if (btnRadio.value == 'by_title') {
        url_main = 'search/movie';
        value = '&query=' + this.value;
        getFilmsProcessing(url_main, value);

      } else {
        url_main = 'search/person';
        value = '&query=' + this.value;
        getCastProcessing(url_main, value);
      }
    } else {
      getPopularFilms()
    }

  }
}

/* Event Listeners*/
search.addEventListener('keydown', getFilmsSearch);
window.addEventListener('load', getPopularFilms);
search.focus();
/*TO DO 

Maybe page pagination...


*/