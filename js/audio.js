let audioPlayer = document.querySelector("#audio");

// Фонова музика
function backgroundSound() {
   audioPlayer.volume = 0.1;
   audioPlayer.currentTime = 2;
   audioPlayer.muted = muted;
   audioPlayer.play();
}

// Влючення або виключення звуку
let soundBtn = document.querySelector(".menu .sound");
let muted = false;

soundBtn.onclick = function () {
   let soundСlick = document.querySelector("#volumeIcon");
   if (muted) {
      soundСlick.src = './img/sound.svg';
      muted = false;
   } else {
      soundСlick.src = './img/mute.svg';
      muted = true;
   }

   audioPlayer.muted = muted;
}

// Звук програшу
function dead(){
    let deadAudio = new Audio("./audio/dead.mp3");
     deadAudio.volume=0.15;
    deadAudio.muted=muted;
    audioPlayer.volume = 0.0;
    deadAudio.play();
}

// Звук поїдання елементів
function eatingSound() {
   let eatAudio = new Audio("./audio/eat.mp3");
   eatAudio.volume = 0.3;
   eatAudio.muted = muted;
   eatAudio.play();
}

function winSound() {
   let winAudio = new Audio("./audio/win.mp3");
   winAudio.volume = 0.3;
   winAudio.muted = muted;
   winAudio.play();
}

