/* Selectors*/
const player = document.querySelector('.video-player');
const video1 = player.querySelector('.viewer');
const play_style = player.querySelector('.play-btn');
const play = player.querySelector('.play');
const progress_bar = player.querySelector('.progress');
const volume = player.querySelector('.volume');
const volume_icon = player.querySelector('.volume-icon');
const poster = player.querySelector('.poster');
const skip_button = player.querySelector('[data-skip]');
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
        timerId = window.setInterval(updateProgress, 700);
    } else {
        video1.pause();
        play.classList.remove('pause');
        play_style.classList.remove('off');
        poster.style.display = 'none';
    }

}

function skipB() { //skip button

    video1.currentTime += parseFloat(this.dataset.skip);
}

function volumeMute() { //volume button
    if (video1.muted && video1.volume > 0) {
        volume_icon.classList.remove('mute');
        video1.muted = false;
    } else {

        volume_icon.classList.add('mute');
        video1.muted = true;
    }


}

function volumeUpdateMove(i) { //volume update on mousemove with movedown
    const newVolume = (i.offsetX / volume.offsetWidth).toFixed(2);
    console.log (newVolume)
    if (newVolume < 0){
        newVolume = 0;
   }
     video1.volume = newVolume;
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

    const newVolume = (i.offsetX / volume.offsetWidth);
    //progress_bar.style.background = 'linear-gradient( to right, #bdae82 0%, #bdae82 ' + Math.floor(newProgress * 1000) / 10 + '%, #c8c8c8 40%, #c8c8c8 100%)';
    volume.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
}

function volumeUpdateBarMobile(i) { //background gradient on mousemove with movedown

    const newVolume = (this.value);
    //console.log (this.value)
    //progress_bar.style.background = 'linear-gradient( to right, #bdae82 0%, #bdae82 ' + Math.floor(newProgress * 1000) / 10 + '%, #c8c8c8 40%, #c8c8c8 100%)';
    volume.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
}


function updateProgress() { //background gradient and progress on TIMEUPDATE
    const progress1 = video1.currentTime / video1.duration;
    progress_bar.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(progress1 * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(progress1 * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
    //progress_bar.style.background = 'linear-gradient( to right, #bdae82 0%, #bdae82 '+ Math.floor(progress1 * 1000) / 10 + '%, #c8c8c8 40%, #c8c8c8 100%)';
    progress_bar.value = Math.floor(progress1 * 1000) / 10;


}

function videoprogressUpdate(i) { //background gradient and progress on click and mousemove with movedown
   
   
    const newProgress = (i.offsetX / progress_bar.offsetWidth) * video1.duration;
    const newProgress2 = (i.offsetX / progress_bar.offsetWidth);
    //progress_bar.style.background = 'linear-gradient( to right, #bdae82 0%, #bdae82 ' + Math.floor(newProgress * 1000) / 10 + '%, #c8c8c8 40%, #c8c8c8 100%)';
    progress_bar.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(newProgress2 * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(newProgress2 * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';

    video1.currentTime = newProgress;
    
}

function videoprogressUpdateMobile(i) { //background gradient and progress on click and mousemove with movedown

    const newProgress = (this.value) * video1.duration / 100;
    const newProgress2 = (this.value);
    //progress_bar.style.background = 'linear-gradient( to right, #bdae82 0%, #bdae82 ' + Math.floor(newProgress * 1000) / 10 + '%, #c8c8c8 40%, #c8c8c8 100%)';
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
//video1.addEventListener('timeupdate', updateProgress);
volume_icon.addEventListener('click', volumeMute);
let mousedown = false;
volume.addEventListener('click', volumeUpdate);
volume.addEventListener('touchend', volumeUpdate); //Mobile event
volume.addEventListener('touchmove', volumeUpdate); //Mobile event
volume.addEventListener('mousemove', (i) => mousedown && volumeUpdateMove(i));



volume.addEventListener('click', volumeUpdateBar);
volume.addEventListener('touchend', volumeUpdateBarMobile); //Mobile event
volume.addEventListener('touchmove', volumeUpdateBarMobile); //Mobile event

volume.addEventListener('mousemove', (i) => mousedown && volumeUpdateBar(i));
volume.addEventListener('mousedown', () => mousedown = true);
volume.addEventListener('mouseup', () => mousedown = false);


progress_bar.addEventListener('mousedown', videoprogressUpdate);
//progress_bar.addEventListener('touchstart', videoprogressUpdateMobile); //Mobile event
progress_bar.addEventListener('touchend', videoprogressUpdateMobile); //Mobile event
progress_bar.addEventListener('touchmove', videoprogressUpdateMobile); //Mobile event
progress_bar.addEventListener('mousemove', (i) => mousedown && videoprogressUpdate(i));
progress_bar.addEventListener('mousedown', () => mousedown = true, clearIntervalUpdate);
progress_bar.addEventListener('mouseup', () => mousedown = false, setIntervalUpdate);

/*
progress_bar.addEventListener('touchmove', (i) => mousedown && videoprogressUpdate(i));
progress_bar.addEventListener('touchstart',() => mousedown = true);
progress_bar.addEventListener('touchend', () => mousedown = false);*/

/*TO DO

*/