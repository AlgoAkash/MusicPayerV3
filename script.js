// const songs = [
//     { title: "Changes", artist: "By XXXTENTACION", file: "song1.mp3" },
//     { title: "SAD!", artist: "By XXXTENTACION", file: "SONG2.mp3" },
//     { title: "Numb", artist: "By XXXTENTACION", file: "song3.mp3" },
//     { title: "Already Dead", artist: "By JUICE WRLD", file: "song4.mp3" },
//     { title: "Chemical", artist: "By POST MALONE", file: "song5.mp3" },
//     { title: "A Thousands bad times", artist: "By POST MALONE", file: "song6.mp3" },
//     { title: "Take Me To Church", artist: "By HOZIER", file: "song7.mp3" },
// ];

// let currentSongIndex = 0;
// let isPlaying = false;

// const songTitle = document.getElementById('song-title');
// const songArtist = document.getElementById('song-artist');
// const playBtn = document.getElementById('play-btn');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');
// const volumeControl = document.getElementById('volume-control');

// const audio = new Audio();
// audio.src = songs[currentSongIndex].file;
// audio.volume = volumeControl.value;

// function loadSong(songIndex) {
//     const song = songs[songIndex];
//     songTitle.textContent = song.title;
//     songArtist.textContent = song.artist;
//     audio.src = song.file;
// }

// function playPauseSong() {
//     if (isPlaying) {
//         audio.pause();
//         playBtn.textContent = "▶️";
//     } else {
//         audio.play();
//         playBtn.textContent = "⏸️";
//     }
//     isPlaying = !isPlaying;
// }

// function prevSong() {
//     currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
//     loadSong(currentSongIndex);
//     if (isPlaying) audio.play();
// }

// function nextSong() {
//     currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
//     loadSong(currentSongIndex);
//     if (isPlaying) audio.play();
// }

// playBtn.addEventListener('click', playPauseSong);
// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);

// volumeControl.addEventListener('input', (e) => {
//     audio.volume = e.target.value;
// });

// // Initial load
// loadSong(currentSongIndex);
const songs = [
    { title: "Changes", artist: "By XXXTENTACION", file: "song1.mp3", cover: "cover1.jpg" },
    { title: "SAD!", artist: "By XXXTENTACION", file: "song2.mp3", cover: "cover2.jpg" },
    { title: "Numb", artist: "By XXXTENTACION", file: "song3.mp3", cover: "cover3.jpg" },
    { title: "Already Dead", artist: "By Juice Wrld", file: "song4.mp3", cover: "cover4.jpg" },
    { title: "Chemical", artist: "By Post Malone", file: "song5.mp3", cover: "cover5.jpg" },
    { title: "A Thousands bad times", artist: "By Post Malone", file: "song6.mp3", cover: "cover6.jpg" },
    { title: "Depression & Obsession", artist: "By XXXTENTACION", file: "song7.mp3", cover: "cover7.jpg" },
    { title: "Dirty", artist: "By KSI", file: "song8.mp3", cover: "cover8.jpg" },
    { title: "The Party Never Ends", artist: "By Juice Wrld", file: "song2.mp3", cover: "cover9.jpg" },
    { title: "Misfit", artist: "By Juice Wrld", file: "song10.mp3", cover: "cover9.jpg" },
    { title: "AGATS2", artist: "By Juice Wrld", file: "song11.mp3", cover: "cover9.jpg" },
    { title: "Lace It", artist: "By Juice Wrld", file: "song12.mp3", cover: "cover9.jpg" },
    { title: "Cuffed", artist: "By Juice Wrld", file: "song13.mp3", cover: "cover9.jpg" },
    { title: "Empty Out Your Pockets", artist: "By Juice Wrld", file: "song14.mp3", cover: "cover9.jpg" },
    { title: "KTM Drip", artist: "By Juice Wrld", file: "song15.mp3", cover: "cover9.jpg" },
    { title: "Love Letter", artist: "By Juice Wrld", file: "song16.mp3", cover: "cover9.jpg" },
    { title: "Condone It", artist: "By Juice Wrld", file: "song17.mp3", cover: "cover9.jpg" },
    { title: "Goodbye", artist: "by The Kid LAROI", file: "song18.mp3", cover: "cover9.jpg" },
    { title: "Party By Myself", artist: "By Juice Wrld", file: "song19.mp3", cover: "cover9.jpg" },
    { title: "Adore You", artist: "By Juice Wrld", file: "song20.mp3", cover: "cover9.jpg" },
    { title: "Celebrate", artist: "By Juice Wrld", file: "song21.mp3", cover: "cover9.jpg" },
    { title: "Jeffrey", artist: "By Juice Wrld", file: "song22.mp3", cover: "cover9.jpg" },
    { title: "Barbarian", artist: "By Juice Wrld", file: "song23.mp3", cover: "cover9.jpg" },
    { title: "Best Friend", artist: "By Juice Wrld", file: "song24.mp3", cover: "cover9.jpg" },
    { title: "Floor It", artist: "By Juice Wrld", file: "song25.mp3", cover: "cover9.jpg" },
    { title: "Oxycodone", artist: "By Juice Wrld", file: "song26.mp3", cover: "cover9.jpg" },
    { title: "Spend IT", artist: "By Juice Wrld", file: "song27.mp3", cover: "cover9.jpg" },
    { title: "Scared of the DARK", artist: "By Lil Wayne, Ty Dolla $ign, XXXTENTACION", file: "song28.mp3", cover: "cover10.jpg" },
    { title: "the remedy for a broken heart (why am I so in love)", artist: "By XXXTENTACION", file: "song29.mp3", cover: "cover1.jpg" },
    { title: "Lucid Dreams", artist: "By Juice Wrld", file: "song30.mp3", cover: "cover11.jpg" },
    { title: "Ayala (Outro)", artist: "By XXXTENTACION", file: "song31.mp3", cover: "cover7.jpg" },
    { title: "bad vibes forever", artist: "By XXXTENTACION", file: "song32.mp3", cover: "cover12.jpg" },
    { title: "I Don't Wanna Do This Anymore", artist: "By XXXTENTACION", file: "song33.mp3", cover: "cover13.jpg" },
    { title: "HeMotions", artist: "By Juice Wrld", file: "song34.mp3", cover: "cover14.jpg" },
    { title: "Again (feat. XXXTENTACION)", artist: "By Noah Cyrus", file: "song35.mp3", cover: "cover15.jpg" },
    { title: "Blueberry Faygo", artist: "By Lil Mosey", file: "song36.mp3", cover: "cover16.jpg" },
    { title: "Armed And Dangerous", artist: "By Juice Wrld", file: "song37.mp3", cover: "cover17.jpg" },
    { title: "Wishing Well", artist: "By Juice Wrld", file: "song38.mp3", cover: "cover18.jpg" },
    { title: "Demons and Angels (feat. Juice WRLD)", artist: "A Boogie Wit da Hoodie", file: "song40.mp3", cover: "cover19.jpg" },
    { title: "VOICES (feat. XXXTENTACION)", artist: "By Skye", file: "song41.mp3", cover: "cover20.jpg" },
    { title: "what are you so afraid of", artist: "By XXXTENTACION", file: "song42.mp3", cover: "cover21.jpg" },
    { title: "Blastoff (feat. Juice WRLD)", artist: "By Internet Money", file: "song43.mp3", cover: "cover22.jpg" },
    { title: "Fast", artist: "By Juice Wrld", file: "song44.mp3", cover: "cover14.jpg" },
];

let currentSongIndex = 0;
let isPlaying = false;

const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const coverImage = document.getElementById('cover-image');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeControl = document.getElementById('volume-control');
const searchBar = document.getElementById('search-bar');
const viewAllBtn = document.getElementById('view-all-btn');
const songList = document.getElementById('song-list');

let startX = 0; // To track swipe gesture

const audio = new Audio();
audio.src = songs[currentSongIndex].file;
audio.volume = volumeControl.value;

function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    coverImage.src = song.cover;
    audio.src = song.file;
}

function playPauseSong() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = "▶️";
    } else {
        audio.play();
        playBtn.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}
function searchSongs() {
    const query = searchBar.value.toLowerCase();
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(query));
    displaySongList(filteredSongs);
}
function displaySongList(songArray) {
    songList.innerHTML = ""; // Clear the list
    songArray.forEach((song) => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.textContent = `${song.title} - ${song.artist}`;
        songItem.addEventListener('click', () => {
            const actualIndex = songs.findIndex(s => s.title === song.title && s.artist === song.artist);
            currentSongIndex = actualIndex; // Update to the correct index in the main songs array
            loadSong(currentSongIndex);
            playSong();
        });
        songList.appendChild(songItem);
    });
    songList.classList.remove('hidden');
}
// Swipe gesture detection for cover image
coverImage.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

coverImage.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) {
        // Swipe right - previous song
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    } else if (deltaX < -50) {
        // Swipe left - next song
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }
});

function displaySongList(songArray) {
    songList.innerHTML = ""; // Clear the list
    songArray.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.textContent = `${song.title} - ${song.artist}`;
        songItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(index);
            if (isPlaying) audio.play();
        });
        songList.appendChild(songItem);
    });
    songList.classList.remove('hidden');
}

viewAllBtn.addEventListener('click', () => {
    displaySongList(songs);
});

searchBar.addEventListener('input', searchSongs);


playBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// Initial load
loadSong(currentSongIndex);
