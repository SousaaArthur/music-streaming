const BtnPlayAndPause = document.querySelector('.btn-play-song');
const audioMusic = document.getElementById('audioMusic');
const iconPlay = document.getElementById('iconPlay');
const iconPause = document.getElementById('iconPause');

BtnPlayAndPause.addEventListener('click', () => {
    if (audioMusic.paused) {
        audioMusic.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block'
    } else {
        audioMusic.pause();
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
    }
});

const progressBar = document.getElementById('progressBar')

audioMusic.addEventListener('timeupdate', () => {
    let currentTime = audioMusic.currentTime;
    let totalDuration = audioMusic.duration;
    let progress = currentTime/ totalDuration;
    progressBar.value = progress;
});

progressBar.addEventListener('click', (event) => {
    const clickedValue = event.clientX - progressBar.getBoundingClientRect().left;
    const width = progressBar.getBoundingClientRect().width;
    const newProgress = clickedValue / width;
    const newTime = newProgress * audioMusic.duration;
    audioMusic.currentTime = newTime;
});

let slideIndex = 0;
const songCovers = document.querySelectorAll('.song-cover');
const musicName = document.getElementById('musicName');
const authorName = document.getElementById('authorName');

function showSlide(n) {
    songCovers.forEach((songCover) => (songCover.style.display = 'none'));
    songCovers[n].style.display = 'block';

    if (n === 0) {
        audioMusic.src = './assets/songs/Pleaser - Wallows/Song-Pleaser.mp3';

        musicName.innerText = 'Pleaser';
        authorName.innerText = 'Wallows';

        audioMusic.pause();
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
    } else if (n === 1) {
        audioMusic.src = './assets/songs/Sinking Ship - The Backseat Lovers/Song-Sinking-Ship.mp3';

        musicName.innerText = 'Sinking Ship';
        authorName.innerText = 'The Backseat Lovers';

        audioMusic.pause();
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
    } else if (n === 2) {
        audioMusic.src = './assets/songs/Cold - Maroon 5/Song-Cold.mp3';

        musicName.innerText = 'Cold';
        authorName.innerText = 'Maroon 5';

        audioMusic.pause();
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
    }
}

function previousSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = songCovers.length - 1;
    }
    showSlide(slideIndex);
}

function nextSlide() {
    if (slideIndex < songCovers.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

document.getElementById('previousBtn').addEventListener('click', previousSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);