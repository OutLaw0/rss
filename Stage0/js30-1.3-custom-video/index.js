/* Selectors*/
const player = document.querySelector('.video-player');
const video1 = player.querySelector('video.viewer');
const play_style = player.querySelector('.play-btn');
const play = player.querySelector('.play');
const progress_bar = player.querySelector('.progress');
const volume = player.querySelector('.volume');
const volume_icon = player.querySelector('.volume-icon');
const poster = player.querySelector('.poster');
const skip_button = player.querySelector('[data-skip]');
let timeElapsed = document.querySelector('.time-elapsed');
let duration = document.querySelector('.duration');
let timerId;


/* Functions*/

function togglePlay() { //play/pause

    if (video1.paused) {
        video1.play();
        play.classList.add('pause');
        play_style.classList.add('off');

        poster.style.opacity = '0';
        setTimeout(() => poster.style.display = 'none', 700);
        updateProgress();
       // timerId = window.setInterval(updateProgress, 700);
    } else {
        video1.pause();
        play.classList.remove('pause');
        play_style.classList.remove('off');
        poster.style.display = 'none';
    }

}

// video clock

function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
 
    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    }
  
  }
  
function initializeVideo() {
    
    const videoDuration = Math.round(video1.duration);
   
    const time = formatTime(videoDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
  }

  video1.addEventListener('loadedmetadata', initializeVideo)

  function updateTimeElapsed() {
    const time = formatTime(Math.round(video1.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
  }

  video1.addEventListener('timeupdate', updateTimeElapsed);

// END video clock

function skipB() { //skip button
    video1.currentTime += parseFloat(this.dataset.skip);
    updateProgress();
}


// VOLUME START

let volumeStyle;
let newVolume;

//set volume defaults

newVolume = volume.value;
video1.volume = volume.value;
volumeStyle = volume.style.background;


function volumeMute() { //volume button
    if (video1.muted && video1.volume > 0) {
        volume_icon.classList.remove('mute');
        video1.muted = false;
        volume.value = newVolume
        volume.style.background = volumeStyle;
    } else {

        volume_icon.classList.add('mute');
        video1.muted = true;
        volume.value = 0;
        volume.style.background = "linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) 0%, rgb(200, 200, 200) 0%, rgb(200, 200, 200) 100%)";
    }
    
}

function volumeUpdateMove(i) { //volume update on mousemove with movedown
    newVolume = (i.offsetX / volume.offsetWidth).toFixed(2);
    if (newVolume < 0){
        newVolume = 0;
   }
     video1.volume = newVolume;
     volume.value = newVolume;

    if (video1.volume <= 0){
        volume_icon.classList.add('mute');
        video1.muted = true;
    }
    if (video1.muted == true && video1.volume > 0){
        volume_icon.classList.remove('mute');
        video1.muted = false;
    }
    
}

function volumeUpdate() { //volume update on click with button toggle
    if (this.value > 0) {
        volume_icon.classList.remove('mute');
        video1.muted = false;
    } else {
        volume_icon.classList.add('mute');
        video1.muted = true;
    }

    video1[this.name] = this.value;

}

function volumeUpdateBar(i) { //background gradient on mousemove with movedown

     newVolume = (i.offsetX / volume.offsetWidth);
    volume.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
    volumeStyle = volume.style.background;
}

function volumeUpdateBarMobile(i) { //background gradient on mousemove with movedown

    newVolume = (this.value);
    volume.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
}
// VOLUME END


// VIDEO PROGRESS

function updateProgress() { //background gradient and progress on TIMEUPDATE
    const progress1 = video1.currentTime / video1.duration;
    progress_bar.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(progress1 * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(progress1 * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
    progress_bar.value = Math.floor(progress1 * 1000) / 10;
    if (video1.ended){
        play.classList.remove('pause');
        play_style.classList.remove('off');
    }

}


function videoprogressUpdate(i) { //background gradient and progress on click and mousemove with movedown
   
   
    const newProgress = (i.offsetX / progress_bar.offsetWidth) * video1.duration;
    const newProgress2 = (i.offsetX / progress_bar.offsetWidth);
    progress_bar.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(newProgress2 * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(newProgress2 * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';

    video1.currentTime = newProgress;
    
}

function videoprogressUpdateMobile(i) { //background gradient and progress on click and mousemove with movedown

    const newProgress = (this.value) * video1.duration / 100;
    const newProgress2 = (this.value);
    progress_bar.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + newProgress2 + '%, rgb(200, 200, 200) ' + newProgress + '%, rgb(200, 200, 200) 100%)';
    
    video1.currentTime = newProgress;

}


function setIntervalUpdate(){
    timerId = window.setInterval(updateProgress, 700);
}
function clearIntervalUpdate(){
    clearInterval(timerId);
}



/* Event Listeners*/
video1.addEventListener('click', togglePlay);

poster.addEventListener('click', togglePlay);
play_style.addEventListener('click', togglePlay);
play.addEventListener('click', togglePlay);
skip_button.addEventListener('click', skipB);
video1.addEventListener('timeupdate', updateProgress);
volume_icon.addEventListener('click', volumeMute);
let mousedown = false;
volume.addEventListener('click', volumeUpdate);
volume.addEventListener('touchend', volumeUpdate); //Mobile event
volume.addEventListener('touchmove', volumeUpdate, {passive:true}); //Mobile event
volume.addEventListener('mousemove', (i) => mousedown && volumeUpdateMove(i));



volume.addEventListener('click', volumeUpdateBar);
volume.addEventListener('touchend', volumeUpdateBarMobile); //Mobile event
volume.addEventListener('touchmove', volumeUpdateBarMobile, {passive:true}); //Mobile event

volume.addEventListener('mousemove', (i) => mousedown && volumeUpdateBar(i));
volume.addEventListener('mousedown', () => mousedown = true);
volume.addEventListener('mouseup', () => mousedown = false);


progress_bar.addEventListener('mousedown', videoprogressUpdate);
//progress_bar.addEventListener('touchstart', videoprogressUpdateMobile); //Mobile event
progress_bar.addEventListener('touchend', videoprogressUpdateMobile); //Mobile event
progress_bar.addEventListener('touchmove', videoprogressUpdateMobile, {passive:true}); //Mobile event
progress_bar.addEventListener('mousemove', (i) => mousedown && videoprogressUpdate(i));
progress_bar.addEventListener('mousedown', () => mousedown = true, clearIntervalUpdate);
progress_bar.addEventListener('mouseup', () => mousedown = false, setIntervalUpdate);


/*TO DO



*/