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

const progressBar = document.getElementById('progressBar');

audioMusic.addEventListener('timeupdate', () => {
    let currentTime = audioMusic.currentTime;
    let totalDuration = audioMusic.duration;
    let progress = currentTime/ totalDuration;
    progressBar.value = progress;

    if (progress === 1){
        nextSlide();
    }
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

        progressBar.value = '0';

        musicName.innerText = 'Pleaser';
        authorName.innerText = 'Wallows';

        audioMusic.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    } else if (n === 1) {
        audioMusic.src = './assets/songs/Sinking Ship - The Backseat Lovers/Song-Sinking-Ship.mp3';

        progressBar.value = '0';

        musicName.innerText = 'Sinking Ship';
        authorName.innerText = 'The Backseat Lovers';

        audioMusic.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    } else if (n === 2) {
        audioMusic.src = './assets/songs/Cold - Maroon 5/Song-Cold.mp3';

        progressBar.value = '0';

        musicName.innerText = 'Cold';
        authorName.innerText = 'Maroon 5';

        audioMusic.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    } else if (n === 3) {
        audioMusic.src = './assets/songs/505 - Arctic Monkeys/Song-505.mp3';

        progressBar.value = '0';

        musicName.innerText = '505';
        authorName.innerText = 'Arctic Monkeys';

        audioMusic.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    } else if (n === 4) {
        audioMusic.src = './assets/songs/Come Together - The Beatles/Song-Come-Together.mp3';

        progressBar.value = '0';

        musicName.innerText = 'Come Together';
        authorName.innerText = 'The Beatles';

        audioMusic.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    } else if (n === 5) {
        audioMusic.src = './assets/songs/Happier Than Ever - Billie Eilish/Song-Happier-Than-Ever.mp3';

        progressBar.value = '0';

        musicName.innerText = 'Happier Than Ever';
        authorName.innerText = 'Billie Eilish';

        audioMusic.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    } else if (n === 6) {
        audioMusic.src = './assets/songs/Sweater Weather - The Neighbourhood/Song-Sweater-Weather.mp3';

        progressBar.value = '0';

        musicName.innerText = 'Sweater Weather';
        authorName.innerText = 'The Neighbourhood';

        audioMusic.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    } else if (n === 7) {
        audioMusic.src = './assets/songs/The Nights -Avicii/Song-The-Nights.mp3';

        progressBar.value = '0';

        musicName.innerText = 'The Nights';
        authorName.innerText = 'Avicii';

        audioMusic.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
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