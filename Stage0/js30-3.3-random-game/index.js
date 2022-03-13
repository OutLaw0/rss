const startGame = () =>{
    const gridDisplay = document.querySelector('.grid');
    const gridHiddenDisplay = document.querySelector('.grid_hidden');
    const scoreDisplay = document.querySelector('.score');
    const scoreDisplayMain = document.querySelectorAll('.main__score');
    const bestScoreDisplay = document.querySelector('.best-score');
    const resultDisplay = document.querySelector('.result');
    const resultWindow = document.querySelector('.result-window'); 
    const topResult = document.querySelector('.top-result-window');
    const restartButton = document.querySelectorAll('.restart');
    const volumeButton = document.querySelector('.volume');
    const width = 4;

    let score = 0;
    let best_score = 0;
    let check_win = true;
    let gameOver = false;
    let squares = [];
    let sounds = true;
    let top_10_score = [];
    let last_10_score = [];

//sounds

    let tap = new Audio('./assets/sounds/plusUp.mp3');
    tap.volume = 0.5;
    let short_success = new Audio('./assets/sounds/short-success-sound.mp3');
    short_success.volume = 0.5;
    let game_over_sound = new Audio('./assets/sounds/game-over-arcade.mp3');
    game_over_sound.volume = 0.5;

    //create board

    function createBoard(){
        for(let i = 0; i < width*width; i++){
        square = document.createElement('div');
        square.textContent = '';  
        //square.dataset.color = 0;
      
        gridDisplay.appendChild(square);
        squares.push(square);
        }

        for(let i = 0; i < width*width; i++){
            square = document.createElement('div');
            square.textContent = '';  
            //square.dataset.color = 0;
            square.dataset.color = '';
            gridHiddenDisplay.appendChild(square);
        }

       generateRand()
       generateRand()

    }
    createBoard()
    reportWindowSize()
    getPreference ()

//random func   
   function generateRand(){
        
        let randomNumber = Math.floor((Math.random())*squares.length);
        if (squares[randomNumber].textContent == '') {
            squares[randomNumber].style.transform = 'scale(0)';
            if (Math.random().toFixed(2) <= 0.10){
            squares[randomNumber].textContent = 4;}
            else {squares[randomNumber].textContent = 2;}

            setTimeout(() => squares[randomNumber].style.transform = 'unset', 100);

            applyColor()

        } else if (!checkZeros()){generateRand()}
        
    }

    function checkZeros(){
        let zeros = 0
        for(let i = 0; i < squares.length; i++){
            if (squares[i].textContent == '') {
                zeros++
            }
        }
       return zeros == 0 ? true : false
    }

//get local storage 
    function getPreference() {
        if(localStorage.getItem('Top10score')) {

            top_10_score = JSON.parse(localStorage.getItem('Top10score'));
            top_10_score.sort((a,b) => b - a)

           
        }
        if(localStorage.getItem('Last10score')) {

            last_10_score = JSON.parse(localStorage.getItem('Last10score'));
          

            // bestScoreDisplay.textContent = best_score;
        }
        if(localStorage.getItem('best-score')) {
            best_score = localStorage.getItem('best-score');
            bestScoreDisplay.textContent = best_score;
    }
        if(localStorage.getItem('sounds')) {
        sounds = JSON.parse(localStorage.getItem('sounds'));
      
        if (sounds == true) { if (volumeButton.classList.contains('mute')) {volumeButton.classList.toggle('mute') }  }
        else {volumeButton.classList.add('mute')}
    }
        
        }

        createTopScore()

        function createTopScore() {
            topResult.innerHTML = '';
       let board = document.createElement('div'); 
       board.setAttribute('class','board');
       let top_board = document.createElement('div');
       top_board.setAttribute('class','top_board');
       let last_board = document.createElement('div');
       last_board.setAttribute('class','last_board');

       top_board.textContent = 'Best score'
       last_board.textContent = 'Last score'

            let ul = document.createElement('ul');
            ul.setAttribute('class','ul-top');

            for(let i = 0; i < 3; i++){
               
                let li = document.createElement('li');
                li.setAttribute('class','li-item');
                li.textContent = top_10_score[i];
                ul.appendChild(li);
        }
        let ul2 = document.createElement('ul');
        ul2.setAttribute('class','ul-last');

        for(let i = 0; i < last_10_score.length; i++){
           
            let li = document.createElement('li');
            li.setAttribute('class','li-item');
            li.textContent = last_10_score[i];
            ul2.appendChild(li);
    }
        topResult.appendChild(board);
        board.appendChild(top_board);
        board.appendChild(last_board);
        top_board.appendChild(ul);
        last_board.appendChild(ul2);
        

    }

    scoreDisplayMain.forEach(e => e.addEventListener('click', () =>  { resultWindow.classList.add('overflow-window-top')}))
    scoreDisplayMain.forEach(e => e.addEventListener('touchcancel', () =>  { resultWindow.classList.add('overflow-window-top')}))
  
    resultWindow.addEventListener('mouseup', () =>  {   if (resultWindow.classList.contains('overflow-window-top')) {resultWindow.classList.remove('overflow-window-top')}})
    resultWindow.addEventListener('touchcancel', () =>  { if (resultWindow.classList.contains('overflow-window-top')) {resultWindow.classList.remove('overflow-window-top')}})


// move RIGHT
    function moveRight(){
        for(let i = 0; i < width*width; i++){
            if (i%4===0){
            let totalOne = squares[i].textContent
            let totalTwo = squares[i+1].textContent
            let totalThree = squares[i+2].textContent
            let totalFour = squares[i+3].textContent
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filteredRow = row.filter(num => num)
            let missing = 4 - filteredRow.length    
            let zeros = Array(missing).fill('')
          
            let newRow = zeros.concat(filteredRow)
            squares[i].textContent = newRow[0]
            squares[i+1].textContent = newRow[1]
            squares[i+2].textContent = newRow[2]
            squares[i+3].textContent = newRow[3]
            }
        }
    }

// move LEFT
    function moveLeft(){
        for(let i = 0; i < width*width; i++){
            if (i%4===0){
            let totalOne = squares[i].textContent
            let totalTwo = squares[i+1].textContent
            let totalThree = squares[i+2].textContent
            let totalFour = squares[i+3].textContent
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filteredRow = row.filter(num => num)
            let missing = 4 - filteredRow.length    
            let zeros = Array(missing).fill('')
            let newRow = filteredRow.concat(zeros)

            squares[i].textContent = newRow[0]
            squares[i+1].textContent = newRow[1]
            squares[i+2].textContent = newRow[2]
            squares[i+3].textContent = newRow[3]
            }
        }
    }
 
//move DOWN
    function moveDown(){
            for(let i = 0; i < width; i++){
                let totalOne = squares[i].textContent
                let totalTwo = squares[i+width].textContent
                let totalThree = squares[i+(2*width)].textContent
                let totalFour = squares[i+(3*width)].textContent
                let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filteredColumn = column.filter(num => num)
                let missing = 4 - filteredColumn.length    
                let zeros = Array(missing).fill('')
                let newColumn = zeros.concat(filteredColumn)

                squares[i].textContent = newColumn[0]
                squares[i+width].textContent = newColumn[1]
                squares[i+(2*width)].textContent = newColumn[2]
                squares[i+(3*width)].textContent = newColumn[3]
            }
        }
    //move UP
    function moveUp(){
        for(let i = 0; i < width; i++){
            let totalOne = squares[i].textContent
            let totalTwo = squares[i+width].textContent
            let totalThree = squares[i+(2*width)].textContent
            let totalFour = squares[i+(3*width)].textContent
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length    
            let zeros = Array(missing).fill('')
            let newColumn = filteredColumn.concat(zeros)

            squares[i].textContent = newColumn[0]
            squares[i+width].textContent = newColumn[1]
            squares[i+(2*width)].textContent = newColumn[2]
            squares[i+(3*width)].textContent = newColumn[3]
        }
    }
 
    function combineRow(){
        let combine = false;
        for(let i = 0; i < width*width-1; i++){
            if ((i % 4 !== 3) && squares[i].textContent === squares[i + 1].textContent) {
                let combineTotal = parseInt(squares[i].textContent) + parseInt(squares[i+1].textContent)
                squares[i].textContent = combineTotal
                squares[i+1].textContent = ''
            
                score += (combineTotal) || 0
                scoreDisplay.textContent = score;
                if (score > best_score){
                best_score = score;
                bestScoreDisplay.textContent = best_score;
                }
                if (combineTotal) {combine = true}
            }        
        }
        if (sounds && combine){tap.play();}
        
        if (check_win) {checkWin()}
      
    }

    function combineColumn(){
        let combine = false;
        for(let i = 0; i < width*width-4; i++){
            if (squares[i].textContent === squares[i+width].textContent) {
                let combineTotal = parseInt(squares[i].textContent) + parseInt(squares[i+width].textContent)
                squares[i].textContent = combineTotal
                squares[i+width].textContent = ''

                score += (combineTotal) || 0
                scoreDisplay.textContent = score;
                if (score > best_score){
                    best_score = score;
                    bestScoreDisplay.textContent = best_score;
                    }
                if (combineTotal) {combine = true}
            }        
        }
        if (sounds && combine){tap.play();}
        if (check_win) {checkWin()}
       
    }
         
//logic funcs
function keyRight(){moveRight(); combineRow(); moveRight(); generateRand()}
function keyLeft(){moveLeft(); combineRow(); moveLeft(); generateRand()}
function keyDown(){moveDown(); combineColumn(); moveDown(); generateRand()}
function keyUp(){moveUp(); combineColumn(); moveUp(); generateRand()}

    
  //assign Codes    
        function listenMoves(key){
            
            key.stopPropagation();
            if (key.keyCode === 39) {
                keyRight()
            } else if (key.keyCode === 37){
                keyLeft()
            }
            else if (key.keyCode === 40){
                keyDown()
            }
            else if (key.keyCode === 38){
                keyUp()
            }
            checkGameOver()
        }


        document.addEventListener('keyup', listenMoves)
//sounds off

        volumeButton.addEventListener('click', () =>  { sounds? sounds = false : sounds = true; volumeButton.classList.toggle('mute')})

// Sliding event
   
         let startX,startY,
            endX = 0,
            endY = 0 ;
  
        function swipeStart(e){
            // console.log(e)
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            // console.log("startX->"+startX,"startY ->"+startY)
        }
        
        function swipeMove(e){
            endX = e.touches[0].clientX;
            endY = e.touches[0].clientY;
            // console.log("endX ->"+endX,"endY ->"+endY)
        }

  // main swipe event with lose checking
        function swipeEnd(e, offset){
            offset = offset?offset:50;
            let lengthX = endX==0?0:Math.abs(startX-endX);
            let lengthY = endY==0?0:Math.abs(startY-endY);
            // console.log("lengthX"+lengthX,"lengthY"+lengthY)
            if(lengthX>lengthY && lengthX>=offset){
               (startX - endX) >0?(swipeLeft()):(swipeRight());
            }else if(lengthY>lengthX && lengthY>=offset){
               (startY - endY) >0?(swipeUp()):(swipeDown());
            }
            checkGameOver()
          
        }

       
    
    function swipeLeft(){ keyLeft() }
    function swipeRight(){ keyRight()}
    function swipeUp(){  keyUp() }
    function swipeDown(){ keyDown() }
      
    gridDisplay.addEventListener('touchstart', swipeStart, {passive: true})
    gridDisplay.addEventListener('touchmove',swipeMove, {passive: true})
    gridDisplay.addEventListener('touchend', swipeEnd, {passive: true})  
      
// END Sliding event  
    
//Prevent default moving window down and up
    const NAVIGATION = [37, 38, 39, 40]

    document.body.addEventListener("keydown", function(event) {
        if (-1 != NAVIGATION.indexOf(event.keyCode))
            event.preventDefault();
    })
    gridDisplay.addEventListener("touchmove", function(event) {
            event.preventDefault();
    }, {passive: false})

 //END Prevent default moving window down and up   
  

// check Win


        function checkWin(){
          
            for(let i = 0; i < squares.length; i++){
                if (squares[i].textContent == 2048){
                if (resultDisplay.textContent == 'You Win!'){
                    setTimeout(() => { resultDisplay.style.opacity = '0';}, 1000);
                    setTimeout(() => { resultWindow.classList.remove('win'); resultDisplay.textContent = '';}, 1500);
                    setTimeout(() => {
                        resultDisplay.style.opacity = '1';
                        resultWindow.classList.add('afterwin');
                    resultDisplay.textContent = 'Ohh Yes, u can keep playing :)'}, 3000);

                    setTimeout(() => {resultDisplay.textContent = 'Have fun!'}, 6000);
                    setTimeout(() => {  resultDisplay.style.opacity = '0'; }, 8500);
                    setTimeout(() => {resultDisplay.textContent = '';resultWindow.classList.remove('afterwin'); resultDisplay.style.opacity = '';}, 9000);
                    
                    check_win = false
                
                } else { resultWindow.classList.add('win'); resultDisplay.textContent = 'You Win!'; if (sounds){short_success.play();}}
            }
            }
        }

// check Game Over
    
  function checkGameOver(){

            
            let check = true
         
            if (checkZeros()){
                for(let i = 0; i < 12; i++){
                    if (squares[i].textContent === squares[i+width].textContent) {
                        check = false
                    }
                }
                 for(let i = 0; i < width*width-1; i++){
                 if ((i % 4 !== 3) && squares[i].textContent === squares[i + 1].textContent) {
                    check = false
                 }
                }
                if (check){
                setTopTen()
                createTopScore()
                resultDisplay.textContent = 'You Lose!';
                document.removeEventListener('keyup', listenMoves) ;
                gridDisplay.removeEventListener('touchend', swipeEnd);
                resultDisplay.style.color = 'var(--game-2048)';
                resultWindow.classList.add('overflow-window');  
                if (sounds){game_over_sound.play();}
                gameOver = true;
                }
              
                }
             
            }
// theme colors
        function applyColor(){
            for(let i = 0; i < squares.length; i++){
          squares[i].dataset.color = squares[i].textContent

        }
    }
// for adaptive board
    function reportWindowSize(){
     
       let width = gridDisplay.offsetWidth * 1.0000008

     //  if (document.body.clientWidth < 450) {

      gridDisplay.style.height = width + 'px'
      gridHiddenDisplay.style.height = width + 'px'
      gridHiddenDisplay.style.bottom = width + 'px'
      gridHiddenDisplay.style.marginBottom = '-' + width + 'px'
   // }
    //if (document.body.clientWidth >= 450) {

     /*   gridDisplay.style.height = width + 'px'
      gridHiddenDisplay.style.height = width + 'px'
      gridHiddenDisplay.style.bottom = width + 'px'
      gridHiddenDisplay.style.marginBottom = '-' + width + 'px'
     }*/

    

    }
        window.addEventListener('resize', reportWindowSize);

// Restart
        function restartGame(event){
            event.preventDefault();
            window.location.href = window.location.href;
        }

        restartButton.forEach(r => r.addEventListener('click', restartGame))




//set top ten

        function setTopTen(){

                        top_10_score.push(parseInt(score))
                        if (top_10_score.length > 10){ top_10_score.sort((a,b) => b - a).pop() }
                   


                        last_10_score.unshift(parseInt(score))
                        if (last_10_score.length > 10){ last_10_score.pop() }
                   
                }


//set local storage 
        function setLocalStorage() {
            localStorage.setItem('best-score', best_score);
            localStorage.setItem('sounds', JSON.stringify(sounds));
            
            if (!gameOver){ setTopTen()}
           
            localStorage.setItem('Top10score', JSON.stringify(top_10_score));
            localStorage.setItem('Last10score', JSON.stringify(last_10_score));
              }

            window.addEventListener('beforeunload', setLocalStorage);

          
}

document.addEventListener('DOMContentLoaded', startGame)



//TO DO

/*
Add continue game
Add merge square animation
Add localstorage memory of last position every squares
add good transform style
*/