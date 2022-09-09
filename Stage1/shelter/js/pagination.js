(function(){"use strict";var __webpack_modules__={776:function(){eval('\n;// CONCATENATED MODULE: ./src/js/pets-info.js\nvar pets_info = {\n  "Jennifer": {\n    "name": "Jennifer",\n    "img": "assets/images/our-pets/pets-jennifer.png",\n    "type": "Dog",\n    "breed": "Labrador",\n    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.",\n    "age": "2 months",\n    "inoculations": ["none"],\n    "diseases": ["none"],\n    "parasites": ["none"]\n  },\n  "Sophia": {\n    "name": "Sophia",\n    "img": "assets/images/our-pets/pets-sophia.png",\n    "type": "Dog",\n    "breed": "Shih tzu",\n    "description": "Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",\n    "age": "1 month",\n    "inoculations": ["parvovirus"],\n    "diseases": ["none"],\n    "parasites": ["none"]\n  },\n  "Woody": {\n    "name": "Woody",\n    "img": "assets/images/our-pets/pets-woody.png",\n    "type": "Dog",\n    "breed": "Golden Retriever",\n    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",\n    "age": "3 years 6 months",\n    "inoculations": ["adenovirus", "distemper"],\n    "diseases": ["right back leg mobility reduced"],\n    "parasites": ["none"]\n  },\n  "Scarlett": {\n    "name": "Scarlett",\n    "img": "assets/images/our-pets/pets-scarlet.png",\n    "type": "Dog",\n    "breed": "Jack Russell Terrier",\n    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",\n    "age": "3 months",\n    "inoculations": ["parainfluenza"],\n    "diseases": ["none"],\n    "parasites": ["none"]\n  },\n  "Katrine": {\n    "name": "Katrine",\n    "img": "assets/images/our-pets/pets-katrine.png",\n    "type": "Cat",\n    "breed": "British Shorthair",\n    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",\n    "age": "6 months",\n    "inoculations": ["panleukopenia"],\n    "diseases": ["none"],\n    "parasites": ["none"]\n  },\n  "Timmy": {\n    "name": "Timmy",\n    "img": "assets/images/our-pets/pets-timmy.png",\n    "type": "Cat",\n    "breed": "British Shorthair",\n    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",\n    "age": "2 years 3 months",\n    "inoculations": ["calicivirus", "viral rhinotracheitis"],\n    "diseases": ["kidney stones"],\n    "parasites": ["none"]\n  },\n  "Freddie": {\n    "name": "Freddie",\n    "img": "assets/images/our-pets/pets-freddie.png",\n    "type": "Cat",\n    "breed": "British Shorthair",\n    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",\n    "age": "2 months",\n    "inoculations": ["rabies"],\n    "diseases": ["none"],\n    "parasites": ["none"]\n  },\n  "Charly": {\n    "name": "Charly",\n    "img": "assets/images/our-pets/pets-charly.png",\n    "type": "Dog",\n    "breed": "Jack Russell Terrier",\n    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",\n    "age": "8 years",\n    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],\n    "diseases": ["deafness", "blindness"],\n    "parasites": ["lice", "fleas"]\n  }\n};\n/* harmony default export */ var js_pets_info = (pets_info);\n;// CONCATENATED MODULE: ./src/js/pagination.js\n //import {createPet} from \'./utilities\';\n\nvar paginationWrapper = document.querySelector(".our-pets__items");\nvar startBtn = document.querySelector(\'.pagination__item.start\');\nvar prevBtn = document.querySelector(\'.pagination__item.prev\');\nvar current = document.querySelector(\'.pagination__item.current\');\nvar nextBtn = document.querySelector(\'.pagination__item.next\');\nvar endBtn = document.querySelector(\'.pagination__item.end\');\nvar basePetsArray = [\'Katrine\', \'Jennifer\', \'Woody\', \'Sophia\', \'Timmy\', \'Charly\', \'Scarlett\', \'Freddie\']; //array that we a create new slide from \n\nvar petsArray = [];\nvar width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\nvar range = 8;\nif (width <= 1279) range = 6;\nif (width <= 767) range = 3;\n\nfunction createPet(pet) {\n  //Create one pets card\n  return "<div class=\\"our-pets__item slider__item\\" data-pet=\\"".concat(pet, "\\">\\n    <img src=\\"").concat(js_pets_info[pet].img, "\\" alt=\\"").concat(pet, "\\">\\n    <span class=\\"slider__item-title\\">").concat(pet, "</span>\\n    <button onclick=\\"location.href = \'#").concat(pet, "\'\\" class=\\"button button--second\\">Learn\\n        more</button>\\n    </div>");\n}\n\nfunction shuffle(newArray) {\n  // let newArray = array.slice();\n  for (var i = newArray.length - 1; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i\n\n    var _ref = [newArray[j], newArray[i]];\n    newArray[i] = _ref[0];\n    newArray[j] = _ref[1];\n  }\n\n  return newArray;\n}\n\nfunction createPaginationArray() {\n  var fullBase = [];\n  var newFullBase = [];\n\n  for (var i = 0; i < 6; i++) {\n    fullBase = fullBase.concat(basePetsArray);\n  } //console.log(fullBase.length)  \n\n\n  for (var _i = 0; _i < 48; _i = _i + range) {\n    var page = fullBase.slice(_i, range + _i);\n    newFullBase.push(shuffle(page));\n  }\n\n  shuffle(newFullBase);\n  return newFullBase;\n}\n\npetsArray = createPaginationArray();\nvar Pagination = {\n  page: 1,\n  petsPerPage: range,\n  startPagination: function startPagination() {\n    //Create default pagination\n    //paginationWrapper.classList.add(\'fade-start\');\n    var new_inner = \'\';\n    petsArray[0].forEach(function (item) {\n      return new_inner += createPet(item);\n    });\n    paginationWrapper.innerHTML = new_inner;\n    setTimeout(function () {\n      paginationWrapper.classList.remove(\'fade-start\');\n    }, 500);\n  },\n  prev: function prev() {\n    var _this = this;\n\n    paginationWrapper.classList.add(\'fade\');\n    var new_inner = \'\';\n    petsArray[this.page - 2].forEach(function (item) {\n      return new_inner += createPet(item);\n    });\n    this.page--;\n    setTimeout(function () {\n      paginationWrapper.innerHTML = new_inner;\n      current.firstChild.textContent = _this.page;\n      nextBtn.classList.remove(\'inactive\');\n      endBtn.classList.remove(\'inactive\');\n\n      if (_this.page == 1) {\n        prevBtn.classList.add(\'inactive\');\n        startBtn.classList.add(\'inactive\');\n      }\n    }, 250);\n    setTimeout(function () {\n      paginationWrapper.classList.remove(\'fade\');\n    }, 500);\n  },\n  next: function next() {\n    var _this2 = this;\n\n    paginationWrapper.classList.add(\'fade\');\n    var new_inner = \'\';\n    petsArray[this.page].forEach(function (item) {\n      return new_inner += createPet(item);\n    });\n    this.page++;\n    setTimeout(function () {\n      paginationWrapper.innerHTML = new_inner;\n      current.firstChild.textContent = _this2.page;\n      prevBtn.classList.remove(\'inactive\');\n      startBtn.classList.remove(\'inactive\');\n\n      if (_this2.page * _this2.petsPerPage == 48) {\n        nextBtn.classList.add(\'inactive\');\n        endBtn.classList.add(\'inactive\');\n      }\n    }, 250);\n    setTimeout(function () {\n      paginationWrapper.classList.remove(\'fade\');\n    }, 500);\n  },\n  start: function start() {\n    var _this3 = this;\n\n    paginationWrapper.classList.toggle(\'fade\');\n    var new_inner = \'\';\n    petsArray[0].forEach(function (item) {\n      return new_inner += createPet(item);\n    });\n    this.page = 1;\n    setTimeout(function () {\n      paginationWrapper.innerHTML = new_inner;\n      current.firstChild.textContent = _this3.page;\n      prevBtn.classList.add(\'inactive\');\n      startBtn.classList.add(\'inactive\');\n      nextBtn.classList.remove(\'inactive\');\n      endBtn.classList.remove(\'inactive\');\n    }, 250);\n    setTimeout(function () {\n      paginationWrapper.classList.toggle(\'fade\');\n    }, 500);\n  },\n  end: function end() {\n    var _this4 = this;\n\n    paginationWrapper.classList.toggle(\'fade\');\n    var new_inner = \'\';\n    petsArray[petsArray.length - 1].forEach(function (item) {\n      return new_inner += createPet(item);\n    });\n    this.page = 48 / this.petsPerPage;\n    setTimeout(function () {\n      paginationWrapper.innerHTML = new_inner;\n      current.firstChild.textContent = _this4.page;\n      prevBtn.classList.remove(\'inactive\');\n      startBtn.classList.remove(\'inactive\');\n      nextBtn.classList.add(\'inactive\');\n      endBtn.classList.add(\'inactive\');\n    }, 250);\n    setTimeout(function () {\n      paginationWrapper.classList.toggle(\'fade\');\n    }, 500);\n  }\n};\nprevBtn.addEventListener(\'click\', function () {\n  if (Pagination.page > 1) Pagination.prev();\n}); //\n\nnextBtn.addEventListener(\'click\', function () {\n  if (Pagination.page * Pagination.petsPerPage < 48) Pagination.next();\n});\nstartBtn.addEventListener(\'click\', function () {\n  if (Pagination.page > 1) Pagination.start();\n});\nendBtn.addEventListener(\'click\', function () {\n  if (Pagination.page * Pagination.petsPerPage < 48) Pagination.end();\n});\nwindow.addEventListener(\'load\', function () {\n  return Pagination.startPagination();\n}); //for cross check:\n\nvar map = new Map();\npetsArray.forEach(function (arr) {\n  arr.forEach(function (pet) {\n    if (map.has(pet)) map.set(pet, map.get(pet) + 1);else map.set(pet, 1);\n  });\n});\nconsole.log("Питомцев на странице: " + range + " / Питомцы: ");\nconsole.log(map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxDQUExQixFQUFsQixLQUNLb0MsR0FBRyxDQUFDSSxHQUFKLENBQVF4QyxHQUFSLEVBQWEsQ0FBYjtBQUNSLEdBSEQ7QUFJSCxDQUxEO0FBTUEwQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBMkI3QyxLQUEzQixHQUFtQyxjQUEvQztBQUNBNEMsT0FBTyxDQUFDQyxHQUFSLENBQVlQLEdBQVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLWJ1aWxkLy4vc3JjL2pzL3BldHMtaW5mby5qcz83N2U1Iiwid2VicGFjazovL3NoZWx0ZXItYnVpbGQvLi9zcmMvanMvcGFnaW5hdGlvbi5qcz9lMGU2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBldHNfaW5mbyA9IHtcbiAgXCJKZW5uaWZlclwiOiB7XG4gICAgXCJuYW1lXCI6IFwiSmVubmlmZXJcIixcbiAgICBcImltZ1wiOiBcImFzc2V0cy9pbWFnZXMvb3VyLXBldHMvcGV0cy1qZW5uaWZlci5wbmdcIixcbiAgICBcInR5cGVcIjogXCJEb2dcIixcbiAgICBcImJyZWVkXCI6IFwiTGFicmFkb3JcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSmVubmlmZXIgaXMgYSBzd2VldCAyIG1vbnRocyBvbGQgTGFicmFkb3IgdGhhdCBpcyBwYXRpZW50bHkgd2FpdGluZyB0byBmaW5kIGEgbmV3IGZvcmV2ZXIgaG9tZS4gVGhpcyBnaXJsIHJlYWxseSBlbmpveXMgYmVpbmcgYWJsZSB0byBnbyBvdXRzaWRlIHRvIHJ1biBhbmQgcGxheSwgYnV0IHdvbid0IGhlc2l0YXRlIHRvIHBsYXkgdXAgYSBzdG9ybSBpbiB0aGUgaG91c2UgaWYgc2hlIGhhcyBhbGwgb2YgaGVyIGZhdm9yaXRlIHRveXMuXCIsXG4gICAgXCJhZ2VcIjogXCIyIG1vbnRoc1wiLFxuICAgIFwiaW5vY3VsYXRpb25zXCI6IFtcIm5vbmVcIl0sXG4gICAgXCJkaXNlYXNlc1wiOiBbXCJub25lXCJdLFxuICAgIFwicGFyYXNpdGVzXCI6IFtcIm5vbmVcIl1cbiAgfSxcbiAgXCJTb3BoaWFcIjp7XG4gICAgXCJuYW1lXCI6IFwiU29waGlhXCIsXG4gICAgXCJpbWdcIjogXCJhc3NldHMvaW1hZ2VzL291ci1wZXRzL3BldHMtc29waGlhLnBuZ1wiLFxuICAgIFwidHlwZVwiOiBcIkRvZ1wiLFxuICAgIFwiYnJlZWRcIjogXCJTaGloIHR6dVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTb3BoaWEgaGVyZSBhbmQgSSdtIGxvb2tpbmcgZm9yIG15IGZvcmV2ZXIgaG9tZSB0byBsaXZlIG91dCB0aGUgYmVzdCB5ZWFycyBvZiBteSBsaWZlLiBJIGFtIGZ1bGwgb2YgZW5lcmd5LiBFdmVyeWRheSBJJ20gbGVhcm5pbmcgbmV3IHRoaW5ncywgbGlrZSBob3cgdG8gd2FsayBvbiBhIGxlYXNoLCBnbyBwb3R0eSBvdXRzaWRlLCBiYXJrIGFuZCBwbGF5IHdpdGggdG95cyBhbmQgSSBzdGlsbCBuZWVkIHNvbWUgcHJhY3RpY2UuXCIsXG4gICAgXCJhZ2VcIjogXCIxIG1vbnRoXCIsXG4gICAgXCJpbm9jdWxhdGlvbnNcIjogW1wicGFydm92aXJ1c1wiXSxcbiAgICBcImRpc2Vhc2VzXCI6IFtcIm5vbmVcIl0sXG4gICAgXCJwYXJhc2l0ZXNcIjogW1wibm9uZVwiXVxuICB9LFxuICBcIldvb2R5XCI6e1xuICAgIFwibmFtZVwiOiBcIldvb2R5XCIsXG4gICAgXCJpbWdcIjogXCJhc3NldHMvaW1hZ2VzL291ci1wZXRzL3BldHMtd29vZHkucG5nXCIsXG4gICAgXCJ0eXBlXCI6IFwiRG9nXCIsXG4gICAgXCJicmVlZFwiOiBcIkdvbGRlbiBSZXRyaWV2ZXJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiV29vZHkgaXMgYSBoYW5kc29tZSAzIDEvMiB5ZWFyIG9sZCBib3kuIFdvb2R5IGRvZXMga25vdyBiYXNpYyBjb21tYW5kcyBhbmQgaXMgYSBzbWFydCBwdXAuIFNpbmNlIGhlIGlzIG9uIHRoZSBzdHJvbmdlciBzaWRlLCBoZSB3aWxsIGxlYXJuIGEgbG90IGZyb20geW91ciB0cmFpbmluZy4gV29vZHkgd2lsbCBiZSBoYXBwaWVyIHdoZW4gaGUgZmluZHMgYSBuZXcgZmFtaWx5IHRoYXQgY2FuIHNwZW5kIGEgbG90IG9mIHRpbWUgd2l0aCBoaW0uXCIsXG4gICAgXCJhZ2VcIjogXCIzIHllYXJzIDYgbW9udGhzXCIsXG4gICAgXCJpbm9jdWxhdGlvbnNcIjogW1wiYWRlbm92aXJ1c1wiLCBcImRpc3RlbXBlclwiXSxcbiAgICBcImRpc2Vhc2VzXCI6IFtcInJpZ2h0IGJhY2sgbGVnIG1vYmlsaXR5IHJlZHVjZWRcIl0sXG4gICAgXCJwYXJhc2l0ZXNcIjogW1wibm9uZVwiXVxuICB9LFxuICBcIlNjYXJsZXR0XCI6e1xuICAgIFwibmFtZVwiOiBcIlNjYXJsZXR0XCIsXG4gICAgXCJpbWdcIjogXCJhc3NldHMvaW1hZ2VzL291ci1wZXRzL3BldHMtc2NhcmxldC5wbmdcIixcbiAgICBcInR5cGVcIjogXCJEb2dcIixcbiAgICBcImJyZWVkXCI6IFwiSmFjayBSdXNzZWxsIFRlcnJpZXJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2NhcmxldHQgaXMgYSBoYXBweSwgcGxheWZ1bCBnaXJsIHdobyB3aWxsIG1ha2UgeW91IGxhdWdoIGFuZCBzbWlsZS4gU2hlIGZvcm1zIGEgYm9uZCBxdWlja2x5IGFuZCB3aWxsIG1ha2UgYSBsb3lhbCBjb21wYW5pb24gYW5kIGEgd29uZGVyZnVsIGZhbWlseSBkb2cgb3IgYSBnb29kIGNvbXBhbmlvbiBmb3IgYSBzaW5nbGUgaW5kaXZpZHVhbCB0b28gc2luY2Ugc2hlIGxpa2VzIHRvIGhhbmcgb3V0IGFuZCBiZSB3aXRoIGhlciBodW1hbi5cIixcbiAgICBcImFnZVwiOiBcIjMgbW9udGhzXCIsXG4gICAgXCJpbm9jdWxhdGlvbnNcIjogW1wicGFyYWluZmx1ZW56YVwiXSxcbiAgICBcImRpc2Vhc2VzXCI6IFtcIm5vbmVcIl0sXG4gICAgXCJwYXJhc2l0ZXNcIjogW1wibm9uZVwiXVxuICB9LFxuICBcIkthdHJpbmVcIjp7XG4gICAgXCJuYW1lXCI6IFwiS2F0cmluZVwiLFxuICAgIFwiaW1nXCI6IFwiYXNzZXRzL2ltYWdlcy9vdXItcGV0cy9wZXRzLWthdHJpbmUucG5nXCIsXG4gICAgXCJ0eXBlXCI6IFwiQ2F0XCIsXG4gICAgXCJicmVlZFwiOiBcIkJyaXRpc2ggU2hvcnRoYWlyXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkthdHJpbmUgaXMgYSBiZWF1dGlmdWwgZ2lybC4gU2hlIGlzIGFzIHNvZnQgYXMgdGhlIGZpbmVzdCB2ZWx2ZXQgd2l0aCBhIHRoaWNrIGx1c2ggZnVyLiBXaWxsIGxvdmUgeW91IHVudGlsIHRoZSBsYXN0IGJyZWF0aCBzaGUgdGFrZXMgYXMgbG9uZyBhcyB5b3UgYXJlIHRoZSBvbmUuIFNoZSBpcyBwaWNreSBhYm91dCBoZXIgYWZmZWN0aW9uLiBTaGUgbG92ZXMgY3VkZGxlcyBhbmQgdG8gc3RyZXRjaCBpbnRvIHlvdXIgaGFuZHMgZm9yIGEgZGVlcGVyIHJlbGF4YXRpb25zLlwiLFxuICAgIFwiYWdlXCI6IFwiNiBtb250aHNcIixcbiAgICBcImlub2N1bGF0aW9uc1wiOiBbXCJwYW5sZXVrb3BlbmlhXCJdLFxuICAgIFwiZGlzZWFzZXNcIjogW1wibm9uZVwiXSxcbiAgICBcInBhcmFzaXRlc1wiOiBbXCJub25lXCJdXG4gIH0sXG4gIFwiVGltbXlcIjp7XG4gICAgXCJuYW1lXCI6IFwiVGltbXlcIixcbiAgICBcImltZ1wiOiBcImFzc2V0cy9pbWFnZXMvb3VyLXBldHMvcGV0cy10aW1teS5wbmdcIixcbiAgICBcInR5cGVcIjogXCJDYXRcIixcbiAgICBcImJyZWVkXCI6IFwiQnJpdGlzaCBTaG9ydGhhaXJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGltbXkgaXMgYW4gYWRvcmFibGUgZ3JleSBicml0aXNoIHNob3J0aGFpciBtYWxlLiBIZSBsb3ZlcyB0byBwbGF5IGFuZCBzbnVnZ2xlLiBIZSBpcyBuZXV0ZXJlZCBhbmQgdXAgdG8gZGF0ZSBvbiBhZ2UgYXBwcm9wcmlhdGUgdmFjY2luYXRpb25zLiBIZSBjYW4gYmUgY2hhdHR5IGFuZCBlbmpveXMgYmVpbmcgaGVsZC4gVGltbXkgaGFzIGEgbG90IHRvIHNheSBhbmQgd2FudHMgYSBwZXJzb24gdG8gc2hhcmUgaGlzIHRob3VnaHRzIHdpdGguXCIsXG4gICAgXCJhZ2VcIjogXCIyIHllYXJzIDMgbW9udGhzXCIsXG4gICAgXCJpbm9jdWxhdGlvbnNcIjogW1wiY2FsaWNpdmlydXNcIiwgXCJ2aXJhbCByaGlub3RyYWNoZWl0aXNcIl0sXG4gICAgXCJkaXNlYXNlc1wiOiBbXCJraWRuZXkgc3RvbmVzXCJdLFxuICAgIFwicGFyYXNpdGVzXCI6IFtcIm5vbmVcIl1cbiAgfSxcbiAgXCJGcmVkZGllXCI6e1xuICAgIFwibmFtZVwiOiBcIkZyZWRkaWVcIixcbiAgICBcImltZ1wiOiBcImFzc2V0cy9pbWFnZXMvb3VyLXBldHMvcGV0cy1mcmVkZGllLnBuZ1wiLFxuICAgIFwidHlwZVwiOiBcIkNhdFwiLFxuICAgIFwiYnJlZWRcIjogXCJCcml0aXNoIFNob3J0aGFpclwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJGcmVkZGllIGlzIGEgbGl0dGxlIHNoeSBhdCBmaXJzdCwgYnV0IHZlcnkgc3dlZXQgd2hlbiBoZSB3YXJtcyB1cC4gSGUgbGlrZXMgcGxheWluZyB3aXRoIHNob2Ugc3RyaW5ncyBhbmQgYm90dGxlIGNhcHMuIEhlIGlzIHF1aWNrIHRvIGxlYXJuIHRoZSByaHl0aG1zIG9mIGhpcyBodW1hbuKAmXMgZGFpbHkgbGlmZS4gRnJlZGRpZSBoYXMgYm91bmNlZCBhcm91bmQgYSBsb3QgaW4gaGlzIGxpZmUsIGFuZCBpcyBsb29raW5nIHRvIGZpbmQgaGlzIGZvcmV2ZXIgaG9tZS5cIixcbiAgICBcImFnZVwiOiBcIjIgbW9udGhzXCIsXG4gICAgXCJpbm9jdWxhdGlvbnNcIjogW1wicmFiaWVzXCJdLFxuICAgIFwiZGlzZWFzZXNcIjogW1wibm9uZVwiXSxcbiAgICBcInBhcmFzaXRlc1wiOiBbXCJub25lXCJdXG4gIH0sXG4gIFwiQ2hhcmx5XCI6e1xuICAgIFwibmFtZVwiOiBcIkNoYXJseVwiLFxuICAgIFwiaW1nXCI6IFwiYXNzZXRzL2ltYWdlcy9vdXItcGV0cy9wZXRzLWNoYXJseS5wbmdcIixcbiAgICBcInR5cGVcIjogXCJEb2dcIixcbiAgICBcImJyZWVkXCI6IFwiSmFjayBSdXNzZWxsIFRlcnJpZXJcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBjdXRlIGJveSwgQ2hhcmx5LCBpcyB0aHJlZSB5ZWFycyBvbGQgYW5kIGhlIGxpa2VzIGFkdWx0cyBhbmQga2lkcy4gSGUgaXNu4oCZdCBmb25kIG9mIG1hbnkgb3RoZXIgZG9ncywgc28gaGUgbWlnaHQgZG8gYmVzdCBpbiBhIHNpbmdsZSBkb2cgaG9tZS4gQ2hhcmx5IGhhcyBsb3RzIG9mIGVuZXJneSwgYW5kIGxvdmVzIHRvIHJ1biBhbmQgcGxheS4gV2UgdGhpbmsgYSBmZW5jZWQgeWFyZCB3b3VsZCBtYWtlIGhpbSB2ZXJ5IGhhcHB5LlwiLFxuICAgIFwiYWdlXCI6IFwiOCB5ZWFyc1wiLFxuICAgIFwiaW5vY3VsYXRpb25zXCI6IFtcImJvcmRldGVsbGEgYnJvbmNoaXNlcHRpY2FcIiwgXCJsZXB0b3NwaXJvc2lzXCJdLFxuICAgIFwiZGlzZWFzZXNcIjogW1wiZGVhZm5lc3NcIiwgXCJibGluZG5lc3NcIl0sXG4gICAgXCJwYXJhc2l0ZXNcIjogW1wibGljZVwiLCBcImZsZWFzXCJdXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHBldHNfaW5mbztcbiIsImltcG9ydCBwZXRzX2luZm8gZnJvbSAnLi9wZXRzLWluZm8nXG4vL2ltcG9ydCB7Y3JlYXRlUGV0fSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmNvbnN0IHBhZ2luYXRpb25XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXItcGV0c19faXRlbXNcIik7XG5cbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25fX2l0ZW0uc3RhcnQnKTtcbmNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbl9faXRlbS5wcmV2Jyk7XG5jb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25fX2l0ZW0uY3VycmVudCcpO1xuY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uX19pdGVtLm5leHQnKTtcbmNvbnN0IGVuZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uX19pdGVtLmVuZCcpO1xuXG5sZXQgYmFzZVBldHNBcnJheSA9IFsnS2F0cmluZScsICdKZW5uaWZlcicsICdXb29keScsICdTb3BoaWEnLCAnVGltbXknLCAnQ2hhcmx5JywgJ1NjYXJsZXR0JywgJ0ZyZWRkaWUnXTsgLy9hcnJheSB0aGF0IHdlIGEgY3JlYXRlIG5ldyBzbGlkZSBmcm9tIFxuXG5sZXQgcGV0c0FycmF5ID0gW107XG5cbmNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbmxldCByYW5nZSA9IDg7XG5pZiAod2lkdGggPD0gMTI3OSkgcmFuZ2UgPSA2O1xuaWYgKHdpZHRoIDw9IDc2NykgcmFuZ2UgPSAzO1xuXG5mdW5jdGlvbiBjcmVhdGVQZXQocGV0KSB7IC8vQ3JlYXRlIG9uZSBwZXRzIGNhcmRcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJvdXItcGV0c19faXRlbSBzbGlkZXJfX2l0ZW1cIiBkYXRhLXBldD1cIiR7cGV0fVwiPlxuICAgIDxpbWcgc3JjPVwiJHtwZXRzX2luZm9bcGV0XS5pbWd9XCIgYWx0PVwiJHtwZXR9XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJzbGlkZXJfX2l0ZW0tdGl0bGVcIj4ke3BldH08L3NwYW4+XG4gICAgPGJ1dHRvbiBvbmNsaWNrPVwibG9jYXRpb24uaHJlZiA9ICcjJHtwZXR9J1wiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc2Vjb25kXCI+TGVhcm5cbiAgICAgICAgbW9yZTwvYnV0dG9uPlxuICAgIDwvZGl2PmBcbn1cblxuZnVuY3Rpb24gc2h1ZmZsZShuZXdBcnJheSkge1xuICAgIC8vIGxldCBuZXdBcnJheSA9IGFycmF5LnNsaWNlKCk7XG4gICAgZm9yIChsZXQgaSA9IG5ld0FycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTsgLy8g0YHQu9GD0YfQsNC50L3Ri9C5INC40L3QtNC10LrRgSDQvtGCIDAg0LTQviBpXG4gICAgICAgIFtuZXdBcnJheVtpXSwgbmV3QXJyYXlbal1dID0gW25ld0FycmF5W2pdLCBuZXdBcnJheVtpXV07XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uQXJyYXkoKSB7XG5cbiAgICBsZXQgZnVsbEJhc2UgPSBbXTtcbiAgICBsZXQgbmV3RnVsbEJhc2UgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBmdWxsQmFzZSA9IGZ1bGxCYXNlLmNvbmNhdChiYXNlUGV0c0FycmF5KVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGZ1bGxCYXNlLmxlbmd0aCkgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDg7IGkgPSBpICsgcmFuZ2UpIHtcblxuICAgICAgICBsZXQgcGFnZSA9IGZ1bGxCYXNlLnNsaWNlKGksIHJhbmdlICsgaSk7XG5cbiAgICAgICAgbmV3RnVsbEJhc2UucHVzaChzaHVmZmxlKHBhZ2UpKVxuICAgIH1cblxuICAgIHNodWZmbGUobmV3RnVsbEJhc2UpXG4gICAgcmV0dXJuIG5ld0Z1bGxCYXNlXG5cbn1cblxucGV0c0FycmF5ID0gY3JlYXRlUGFnaW5hdGlvbkFycmF5KCk7XG5cbmNvbnN0IFBhZ2luYXRpb24gPSB7XG4gICAgcGFnZTogMSxcbiAgICBwZXRzUGVyUGFnZTogcmFuZ2UsXG4gICAgc3RhcnRQYWdpbmF0aW9uKCkgeyAvL0NyZWF0ZSBkZWZhdWx0IHBhZ2luYXRpb25cblxuICAgICAgICAvL3BhZ2luYXRpb25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtc3RhcnQnKTtcbiAgICAgICAgbGV0IG5ld19pbm5lciA9ICcnO1xuICAgICAgICBwZXRzQXJyYXlbMF0uZm9yRWFjaChpdGVtID0+IG5ld19pbm5lciArPSBjcmVhdGVQZXQoaXRlbSkpXG4gICAgICAgIHBhZ2luYXRpb25XcmFwcGVyLmlubmVySFRNTCA9IG5ld19pbm5lcjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLXN0YXJ0Jyk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfSxcbiAgICBwcmV2KCkge1xuICAgICAgICBwYWdpbmF0aW9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICAgIGxldCBuZXdfaW5uZXIgPSAnJztcbiAgICAgICAgcGV0c0FycmF5W3RoaXMucGFnZSAtIDJdLmZvckVhY2goaXRlbSA9PiBuZXdfaW5uZXIgKz0gY3JlYXRlUGV0KGl0ZW0pKVxuICAgICAgICB0aGlzLnBhZ2UtLVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBhZ2luYXRpb25XcmFwcGVyLmlubmVySFRNTCA9IG5ld19pbm5lclxuICAgICAgICAgICAgY3VycmVudC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gdGhpcy5wYWdlO1xuICAgICAgICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgZW5kQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlID09IDEpIHtcbiAgICAgICAgICAgICAgICBwcmV2QnRuLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjUwKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBhZ2luYXRpb25XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9LFxuICAgIG5leHQoKSB7XG4gICAgICAgIHBhZ2luYXRpb25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgbGV0IG5ld19pbm5lciA9ICcnO1xuICAgICAgICBwZXRzQXJyYXlbdGhpcy5wYWdlXS5mb3JFYWNoKGl0ZW0gPT4gbmV3X2lubmVyICs9IGNyZWF0ZVBldChpdGVtKSlcbiAgICAgICAgdGhpcy5wYWdlKytcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uV3JhcHBlci5pbm5lckhUTUwgPSBuZXdfaW5uZXJcbiAgICAgICAgICAgIGN1cnJlbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IHRoaXMucGFnZTtcbiAgICAgICAgICAgIHByZXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgKiB0aGlzLnBldHNQZXJQYWdlID09IDQ4KSB7XG4gICAgICAgICAgICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGVuZEJ0bi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyNTApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGFnaW5hdGlvbldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH0sXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHBhZ2luYXRpb25XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZhZGUnKTtcbiAgICAgICAgbGV0IG5ld19pbm5lciA9ICcnO1xuICAgICAgICBwZXRzQXJyYXlbMF0uZm9yRWFjaChpdGVtID0+IG5ld19pbm5lciArPSBjcmVhdGVQZXQoaXRlbSkpXG4gICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGFnaW5hdGlvbldyYXBwZXIuaW5uZXJIVE1MID0gbmV3X2lubmVyXG4gICAgICAgICAgICBjdXJyZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSB0aGlzLnBhZ2U7XG4gICAgICAgICAgICBwcmV2QnRuLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgZW5kQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgICAgIH0sIDI1MCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdmYWRlJyk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfSxcbiAgICBlbmQoKSB7XG4gICAgICAgIHBhZ2luYXRpb25XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZhZGUnKTtcbiAgICAgICAgbGV0IG5ld19pbm5lciA9ICcnO1xuICAgICAgICBwZXRzQXJyYXlbcGV0c0FycmF5Lmxlbmd0aCAtIDFdLmZvckVhY2goaXRlbSA9PiBuZXdfaW5uZXIgKz0gY3JlYXRlUGV0KGl0ZW0pKVxuICAgICAgICB0aGlzLnBhZ2UgPSA0OCAvIHRoaXMucGV0c1BlclBhZ2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGFnaW5hdGlvbldyYXBwZXIuaW5uZXJIVE1MID0gbmV3X2lubmVyXG4gICAgICAgICAgICBjdXJyZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSB0aGlzLnBhZ2U7XG4gICAgICAgICAgICBwcmV2QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgZW5kQnRuLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgIH0sIDI1MCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdmYWRlJyk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfSxcblxufVxuXG5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChQYWdpbmF0aW9uLnBhZ2UgPiAxKSBQYWdpbmF0aW9uLnByZXYoKVxufSk7IC8vXG5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChQYWdpbmF0aW9uLnBhZ2UgKiBQYWdpbmF0aW9uLnBldHNQZXJQYWdlIDwgNDgpIFBhZ2luYXRpb24ubmV4dCgpXG59KTtcbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChQYWdpbmF0aW9uLnBhZ2UgPiAxKSBQYWdpbmF0aW9uLnN0YXJ0KClcbn0pO1xuZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChQYWdpbmF0aW9uLnBhZ2UgKiBQYWdpbmF0aW9uLnBldHNQZXJQYWdlIDwgNDgpIFBhZ2luYXRpb24uZW5kKClcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IFBhZ2luYXRpb24uc3RhcnRQYWdpbmF0aW9uKCkpO1xuXG5cbi8vZm9yIGNyb3NzIGNoZWNrOlxuY29uc3QgbWFwICA9IG5ldyBNYXAoKTtcbnBldHNBcnJheS5mb3JFYWNoKGFyciA9PiB7XG4gICAgYXJyLmZvckVhY2gocGV0ID0+IHtcbiAgICAgICAgaWYgKG1hcC5oYXMocGV0KSkgbWFwLnNldChwZXQsIG1hcC5nZXQocGV0KSsxKVxuICAgICAgICBlbHNlIG1hcC5zZXQocGV0LCAxKVxuICAgIH0pXG59KVxuY29uc29sZS5sb2coXCLQn9C40YLQvtC80YbQtdCyINC90LAg0YHRgtGA0LDQvdC40YbQtTogXCIgKyByYW5nZSArIFwiIC8g0J/QuNGC0L7QvNGG0Ys6IFwiKTtcbmNvbnNvbGUubG9nKG1hcCkiXSwibmFtZXMiOlsicGV0c19pbmZvIiwicGFnaW5hdGlvbldyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydEJ0biIsInByZXZCdG4iLCJjdXJyZW50IiwibmV4dEJ0biIsImVuZEJ0biIsImJhc2VQZXRzQXJyYXkiLCJwZXRzQXJyYXkiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvZHkiLCJyYW5nZSIsImNyZWF0ZVBldCIsInBldCIsImltZyIsInNodWZmbGUiLCJuZXdBcnJheSIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY3JlYXRlUGFnaW5hdGlvbkFycmF5IiwiZnVsbEJhc2UiLCJuZXdGdWxsQmFzZSIsImNvbmNhdCIsInBhZ2UiLCJzbGljZSIsInB1c2giLCJQYWdpbmF0aW9uIiwicGV0c1BlclBhZ2UiLCJzdGFydFBhZ2luYXRpb24iLCJuZXdfaW5uZXIiLCJmb3JFYWNoIiwiaXRlbSIsImlubmVySFRNTCIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwcmV2IiwiYWRkIiwiZmlyc3RDaGlsZCIsInRleHRDb250ZW50IiwibmV4dCIsInN0YXJ0IiwidG9nZ2xlIiwiZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hcCIsIk1hcCIsImFyciIsImhhcyIsInNldCIsImdldCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///776\n')}},__webpack_exports__={};__webpack_modules__[776]()})();