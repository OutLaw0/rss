import pets_info from './pets-info'
//import {createPet} from './utilities';

const paginationWrapper = document.querySelector(".our-pets__items");

const startBtn = document.querySelector('.pagination__item.start');
const prevBtn = document.querySelector('.pagination__item.prev');
const current = document.querySelector('.pagination__item.current');
const nextBtn = document.querySelector('.pagination__item.next');
const endBtn = document.querySelector('.pagination__item.end');

let basePetsArray = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie']; //array that we a create new slide from 

let petsArray = [];

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let range = 8;
if (width <= 1279) range = 6;
if (width <= 767) range = 3;

function createPet(pet) { //Create one pets card
    return `<div class="our-pets__item slider__item" data-pet="${pet}">
    <img src="${pets_info[pet].img}" alt="${pet}">
    <span class="slider__item-title">${pet}</span>
    <button onclick="location.href = '#${pet}'" class="button button--second">Learn
        more</button>
    </div>`
}

function shuffle(newArray) {
    // let newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray
}

function createPaginationArray() {

    let fullBase = [];
    let newFullBase = [];
    for (let i = 0; i < 6; i++) {
        fullBase = fullBase.concat(basePetsArray)
    }
    //console.log(fullBase.length)  
    for (let i = 0; i < 48; i = i + range) {

        let page = fullBase.slice(i, range + i);

        newFullBase.push(shuffle(page))
    }

    shuffle(newFullBase)
    return newFullBase

}

petsArray = createPaginationArray();

const Pagination = {
    page: 1,
    petsPerPage: range,
    startPagination() { //Create default pagination

        //paginationWrapper.classList.add('fade-start');
        let new_inner = '';
        petsArray[0].forEach(item => new_inner += createPet(item))
        paginationWrapper.innerHTML = new_inner;
        setTimeout(() => {
            paginationWrapper.classList.remove('fade-start');
        }, 500);
    },
    prev() {
        paginationWrapper.classList.add('fade');
        let new_inner = '';
        petsArray[this.page - 2].forEach(item => new_inner += createPet(item))
        this.page--
        setTimeout(() => {
            paginationWrapper.innerHTML = new_inner
            current.firstChild.textContent = this.page;
            nextBtn.classList.remove('inactive');
            endBtn.classList.remove('inactive');
            if (this.page == 1) {
                prevBtn.classList.add('inactive');
                startBtn.classList.add('inactive');
            }
        }, 250);

        setTimeout(() => {
            paginationWrapper.classList.remove('fade');
        }, 500);
    },
    next() {
        paginationWrapper.classList.add('fade');
        let new_inner = '';
        petsArray[this.page].forEach(item => new_inner += createPet(item))
        this.page++
        setTimeout(() => {
            paginationWrapper.innerHTML = new_inner
            current.firstChild.textContent = this.page;
            prevBtn.classList.remove('inactive');
            startBtn.classList.remove('inactive');

            if (this.page * this.petsPerPage == 48) {
                nextBtn.classList.add('inactive');
                endBtn.classList.add('inactive');
            }
        }, 250);

        setTimeout(() => {
            paginationWrapper.classList.remove('fade');
        }, 500);
    },
    start() {
        paginationWrapper.classList.toggle('fade');
        let new_inner = '';
        petsArray[0].forEach(item => new_inner += createPet(item))
        this.page = 1;
        setTimeout(() => {
            paginationWrapper.innerHTML = new_inner
            current.firstChild.textContent = this.page;
            prevBtn.classList.add('inactive');
            startBtn.classList.add('inactive');
            nextBtn.classList.remove('inactive');
            endBtn.classList.remove('inactive');
        }, 250);

        setTimeout(() => {
            paginationWrapper.classList.toggle('fade');
        }, 500);
    },
    end() {
        paginationWrapper.classList.toggle('fade');
        let new_inner = '';
        petsArray[petsArray.length - 1].forEach(item => new_inner += createPet(item))
        this.page = 48 / this.petsPerPage;
        setTimeout(() => {
            paginationWrapper.innerHTML = new_inner
            current.firstChild.textContent = this.page;
            prevBtn.classList.remove('inactive');
            startBtn.classList.remove('inactive');
            nextBtn.classList.add('inactive');
            endBtn.classList.add('inactive');
        }, 250);

        setTimeout(() => {
            paginationWrapper.classList.toggle('fade');
        }, 500);
    },

}

prevBtn.addEventListener('click', () => {
    if (Pagination.page > 1) Pagination.prev()
}); //
nextBtn.addEventListener('click', () => {
    if (Pagination.page * Pagination.petsPerPage < 48) Pagination.next()
});
startBtn.addEventListener('click', () => {
    if (Pagination.page > 1) Pagination.start()
});
endBtn.addEventListener('click', () => {
    if (Pagination.page * Pagination.petsPerPage < 48) Pagination.end()
});

window.addEventListener('load', () => Pagination.startPagination());


//for cross check:
const map  = new Map();
petsArray.forEach(arr => {
    arr.forEach(pet => {
        if (map.has(pet)) map.set(pet, map.get(pet)+1)
        else map.set(pet, 1)
    })
})
console.log("Питомцев на странице: " + range + " / Питомцы: ");
console.log(map)