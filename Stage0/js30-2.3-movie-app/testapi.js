
/*  
http://www.omdbapi.com/ // api for imdb? but without plot in search
https://github.com/Omertron/api-omdb

https://www.omdbapi.com/?s=Avengers&apikey=8b7895c3 

IMDB API with plot!!!
https://imdb-api.com/API/AdvancedSearch/k_i6ww641c?title=avenger&count=2

TMDB //search with plot info
https://api.themoviedb.org/3/search/movie?api_key=02c33b583785611c12c4ab38a8c22b03&query=Avengers&page=1


*/

/*IMDB API with plot!!!
https://imdb-api.com/API/AdvancedSearch/k_i6ww641c?title=avenger&count=2

async function getFilms(e){
    console.log(e);
    const url = 'https://imdb-api.com/API/AdvancedSearch/' + apikey + '?title=avenger&count=2';
    const res = await fetch(url);
    const data = await res.json();
    
    const title = data.results[0].title;
    const poster = data.results[0].image;
    const imdbID = data.results[0].id;
    const plot = data.results[0].plot;
    const rate = data.results[0].imDbRating;
    
    
    let new_inner = `<div class="movie">
    <img src="${poster}" alt="${title}">
    <div class="movie__info">
    <h3>${title}</h3>
    <span class="norm">${rate}</span>
    </div>
    <div class="movie__overview">
    <h3>Overview</h3>
    ${plot}
    </div>
    </div>`;
    
    main.insertAdjacentHTML('beforeend', new_inner)
    console.log(data.results[0].title);
    
    }

    */