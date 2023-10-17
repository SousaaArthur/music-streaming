//Developer panel
const btnPanelPrimary = document.getElementById('panelPrimary');
const btnPanelSecondary = document.getElementById('panelSecondary');
const panelPrimary = document.querySelector('.music-order-panel');
const panelSecondary = document.querySelector('.panel-play-music');

const btnCheck = document.querySelector('.btn-check');
const borderCheck = document.querySelector('.border-check');
const backgroundBody = document.body;

btnCheck.addEventListener('click', () => {
    const bgBorderCheck = document.querySelector('.border-check');
    if (btnCheck.classList.contains('disabled')){
        btnCheck.classList.remove('disabled');
        btnCheck.classList.toggle('active');

        if (btnCheck.classList.contains('active')){
            panelPrimary.style.opacity = '0';
            panelPrimary.style.maxHeight = '0rem';
            panelSecondary.style.maxHeight = '40rem';
            panelSecondary.style.opacity = '1';
            bgBorderCheck.style.backgroundColor = '#189945';
        }
    } else {
        btnCheck.classList.remove('active');
        btnCheck.classList.toggle('disabled');

        if (btnCheck.classList.contains('disabled')){
            panelSecondary.style.maxHeight = '0rem';
            panelSecondary.style.opacity = '0';
            panelPrimary.style.maxHeight = '40rem';
            panelPrimary.style.opacity = '1';
            bgBorderCheck.style.backgroundColor = '#191919';
        }
    }
});

//----------------------------
const audioMusic = document.getElementById('audioMusic');
const finalTime = document.getElementById('finalTime');
const currentTime = document.getElementById('currentTime');

audioMusic.load();

audioMusic.addEventListener('loadeddata', () => {
    const minute = Math.floor(audioMusic.duration / 60);
    const second = Math.floor(audioMusic.duration % 60);
    const durationFormat = `${minute}:${second < 10 ? '0' : ''}${second}`;
    finalTime.innerText = durationFormat;
});

setInterval(() => {
    if (!isNaN(audioMusic.currentTime)) {
        const minute = Math.floor(audioMusic.currentTime / 60);
        const second = Math.floor(audioMusic.currentTime % 60);
        const currentTimeFormat = `${minute}:${second < 10 ? '0' : ''}${second}`;
        currentTime.innerText = currentTimeFormat;
    }
}, 1);

const allBtnPlayAndPause = document.querySelectorAll('.btn-play-song');
const allPlayIcons = document.querySelectorAll('.btn-play-song .iconPlay');
const allIconsPause = document.querySelectorAll('.btn-play-song .iconPause');

allBtnPlayAndPause.forEach((btnPlayAndPause) => {
    btnPlayAndPause.addEventListener('click', () => {
        function buttons(iconsPlay, iconsPause){
            iconsPlay.forEach((iconPlay) => {
                iconPlay.style.display = 'none';
            });
            iconsPause.forEach((iconPause) => {
                iconPause.style.display = 'block';
            });
        }

        if (audioMusic.paused) {
            audioMusic.play();
            buttons(allPlayIcons, allIconsPause);
        } else {
            audioMusic.pause();
            buttons(allIconsPause, allPlayIcons);
        }
    });
})

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
const musicName = document.querySelectorAll('.musicName');
const authorName = document.querySelectorAll('.authorName');
const imgSongCover = document.getElementById('imgSongCover');

function showSlide(n) {
    songCovers.forEach((songCover) => (songCover.style.display = 'none'));
    songCovers[n].style.display = 'block';

    function setInnerText(elements, text) {
        elements.forEach((element) => {
            element.innerText = text;
        })
    }

    function btnPlay(iconsPlay){
        iconsPlay.forEach((iconPlay) =>{
            if (iconPlay.style.display == 'block'){
                audioMusic.pause();
                iconPlay.style.display = 'block';
                iconPause.style.display = 'none';
            } else if (iconPlay.style.display == 'none') {
                audioMusic.play();
                iconPlay.style.display = 'none';
                iconPause.style.display = 'block';
            }
        });
    }

    if (n === 0) {
        progressBar.value = '0';
        audioMusic.src = './assets/songs/Pleaser - Wallows/Song-Pleaser.mp3';
        imgSongCover.src = './assets/songs/Pleaser - Wallows/SongCoverWallows.jpg';
        setInnerText(musicName, 'Pleaser');
        setInnerText(authorName, 'Wallows');
        btnPlay(allPlayIcons);
    } else if (n === 1) {
        progressBar.value = '0';
        audioMusic.src = './assets/songs/Sinking Ship - The Backseat Lovers/Song-Sinking-Ship.mp3';
        imgSongCover.src = './assets/songs/Sinking Ship - The Backseat Lovers/SongCoverTheBackseatLovers.jpg';
        setInnerText(musicName, 'Sinking Ship');
        setInnerText(authorName, 'The Backseat Lovers');
        btnPlay(allPlayIcons);
    } else if (n === 2) {
        progressBar.value = '0';
        audioMusic.src = './assets/songs/Cold - Maroon 5/Song-Cold.mp3';
        imgSongCover.src = './assets/songs/Cold - Maroon 5/SongCoverMaroon5.png';
        setInnerText(musicName, 'Cold');
        setInnerText(authorName, 'Maroon 5');
        btnPlay(allPlayIcons);
    } else if (n === 3) {
        progressBar.value = '0';
        audioMusic.src = './assets/songs/505 - Arctic Monkeys/Song-505.mp3';
        imgSongCover.src = './assets/songs/505 - Arctic Monkeys/SongCoverArcticMonkeys.jpg';
        setInnerText(musicName, '505');
        setInnerText(authorName, 'Arctic Monkeys');
        btnPlay(allPlayIcons);
    } else if (n === 4) {
        progressBar.value = '0';
        audioMusic.src = './assets/songs/Come Together - The Beatles/Song-Come-Together.mp3';
        imgSongCover.src = './assets/songs/Come Together - The Beatles/SongCoverTheBeatles.jpg';
        setInnerText(musicName, 'Come Together');
        setInnerText(authorName, 'The Beatles');
        btnPlay(allPlayIcons);
    } else if (n === 5) {
        progressBar.value = '0';
        audioMusic.src = './assets/songs/Happier Than Ever - Billie Eilish/Song-Happier-Than-Ever.mp3';
        imgSongCover.src = './assets/songs/Happier Than Ever - Billie Eilish/SongCoverBillieEilish.jpg';
        setInnerText(musicName, 'Happier Than Ever');
        setInnerText(authorName, 'Billie Eilish');
        btnPlay(allPlayIcons);
    } else if (n === 6) {
        progressBar.value = '0';
        audioMusic.src = './assets/songs/Sweater Weather - The Neighbourhood/Song-Sweater-Weather.mp3';
        imgSongCover.src = './assets/songs/Sweater Weather - The Neighbourhood/SongCoverTheNeighbourhood.jpg';
        setInnerText(musicName, 'Sweater Weather');
        setInnerText(authorName, 'The Neighbourhood');
        btnPlay(allPlayIcons);
    } else if (n === 7) {
        progressBar.value = '0';
        audioMusic.src = './assets/songs/The Nights -Avicii/Song-The-Nights.mp3';
        imgSongCover.src = './assets/songs/The Nights -Avicii/SongCoverAvicii.jpg';
        setInnerText(musicName, 'The Nights');
        setInnerText(authorName, 'Avicii');
        btnPlay(allPlayIcons);
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

const allPreviousBtn = document.querySelectorAll('.previousBtn');
const allNextBtn = document.querySelectorAll('.nextBtn');

allPreviousBtn.forEach( (previousBtn) => {
    previousBtn.addEventListener('click', previousSlide);
})
allNextBtn.forEach( (nextBtn) => {
    nextBtn.addEventListener('click', nextSlide);
})

//-----------------------------------

$(function () {
    $("#changePlaylistOrder").sortable({
        axis: "y",
        containment: "parent",
        handle: ".move-music",
        update: function (event, ui) {
            console.log("Ordem atualizada!");
        }
    }).disableSelection();
});