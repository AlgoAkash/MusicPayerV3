const songs = [
    { title: "Changes", artist: "By XXXTENTACION", file: "song1.mp3", cover: "cover1.jpg" },
    { title: "SAD!", artist: "By XXXTENTACION", file: "SONG2.mp3", cover: "cover2.jpg" },
    { title: "Numb", artist: "By XXXTENTACION", file: "song3.mp3", cover: "cover3.jpg" },
    { title: "Already Dead", artist: "By Juice Wrld", file: "song4.mp3", cover: "cover4.jpg", bgVideo: "Already Dead.mp4" },
    { title: "Chemical", artist: "By Post Malone", file: "song5.mp3", cover: "cover5.jpg" },
    { title: "A Thousands bad times", artist: "By Post Malone", file: "song6.mp3", cover: "cover6.jpg" },
    { title: "Depression & Obsession", artist: "By XXXTENTACION", file: "song7.mp3", cover: "cover7.jpg" },
    { title: "Dirty", artist: "By KSI", file: "song8.mp3", cover: "Dirty.jpg", bgVideo: "Dirty.mp4" },
    { title: "The Party Never Ends", artist: "By Juice Wrld", file: "song9.mp3", cover: "cover9.jpg", bgVideo: "PARTYNEVERENDS.mp4" },
    { title: "Misfit", artist: "By Juice Wrld", file: "song10.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "AGATS2", artist: "By Juice Wrld", file: "song11.mp3", cover: "cover9.jpg", bgVideo: "AGATS2.mp4" },
    { title: "Lace It", artist: "By Juice Wrld", file: "song12.mp3", cover: "cover9.jpg", bgVideo: "LACEIT.mp4" },
    { title: "Cuffed", artist: "By Juice Wrld", file: "song13.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Empty Out Your Pockets", artist: "By Juice Wrld", file: "song14.mp3", cover: "cover9.jpg", bgVideo: "empty out your pockets.mp4" },
    { title: "KTM Drip", artist: "By Juice Wrld", file: "song15.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Love Letter", artist: "By Juice Wrld", file: "song16.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Condone It", artist: "By Juice Wrld", file: "song17.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Goodbye", artist: "by The Kid LAROI", file: "song18.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Party By Myself", artist: "By Juice Wrld", file: "song19.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Adore You", artist: "By Juice Wrld", file: "song20.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Celebrate", artist: "By Juice Wrld", file: "song21.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Jeffrey", artist: "By Juice Wrld", file: "song22.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Barbarian", artist: "By Juice Wrld", file: "song23.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Best Friend", artist: "By Juice Wrld", file: "song24.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Floor It", artist: "By Juice Wrld", file: "song25.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Oxycodone", artist: "By Juice Wrld", file: "song26.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Spend IT", artist: "By Juice Wrld", file: "song27.mp3", cover: "cover9.jpg", bgVideo: "partyneverendsalbum.mp4" },
    { title: "Scared of the DARK", artist: "By Lil Wayne, Ty Dolla $ign, XXXTENTACION", file: "song28.mp3", cover: "cover10.jpg", bgVideo: "Scared of the DARK.mp4" },
    { title: "the remedy for a broken heart (why am I so in love)", artist: "By XXXTENTACION", file: "song29.mp3", cover: "cover1.jpg" },
    { title: "Lucid Dreams", artist: "By Juice Wrld", file: "song30.mp3", cover: "cover11.jpg", bgVideo: "Lucid Dreams.mp4" },
    { title: "Ayala (Outro)", artist: "By XXXTENTACION", file: "song31.mp3", cover: "cover7.jpg" },
    { title: "bad vibes forever", artist: "By XXXTENTACION", file: "song32.mp3", cover: "cover12.jpg", bgVideo: "bad vibes forever.mp4" },
    { title: "Ex Bitch", artist: "By XXXTENTACION", file: "song54.mp3", cover: "cover12.jpg", bgVideo: "Ex Bitch.mp4" },
    { title: "UGLY", artist: "By XXXTENTACION", file: "song55.mp3", cover: "cover12.jpg", bgVideo: "UGLY.mp4" },
    { title: "School Shooters", artist: "By XXXTENTACION", file: "song56.mp3", cover: "cover12.jpg", bgVideo: "School Shooters.mp4" },
    { title: "I Changed Her Life", artist: "By XXXTENTACION", file: "song57.mp3", cover: "cover12.jpg" },
    { title: "Triumph", artist: "By XXXTENTACION", file: "song58.mp3", cover: "cover12.jpg" },
    { title: "LIMBO", artist: "By XXXTENTACION", file: "song59.mp3", cover: "cover12.jpg" },
    { title: "BEFORE I REALIZE", artist: "By XXXTENTACION", file: "song60.mp3", cover: "cover12.jpg" },
    { title: "Ecstasy (feat. Noah Cyrus)", artist: "By XXXTENTACION", file: "song61.mp3", cover: "cover12.jpg" },
    { title: "Kill My Vibe (feat. Tom G)", artist: "By XXXTENTACION", file: "song62.mp3", cover: "cover12.jpg" },
    { title: "Hot Gyal (feat. Tory Lanez & Mavado)", artist: "By XXXTENTACION", file: "song63.mp3", cover: "cover12.jpg" },
    { title: "THE ONLY TIME I FEEL ALIVE", artist: "By XXXTENTACION", file: "song64.mp3", cover: "cover12.jpg" },
    { title: "the interlude that never ends", artist: "By XXXTENTACION", file: "song65.mp3", cover: "cover12.jpg" },
    { title: "HEARTEATER", artist: "By XXXTENTACION", file: "song66.mp3", cover: "cover12.jpg", bgVideo: "HEARTEATER.mp4" },
    { title: "numb the pain", artist: "By XXXTENTACION", file: "song67.mp3", cover: "cover12.jpg" },
    { title: "IT'S ALL FADING TO BLACK (feat. blink-182)", artist: "By XXXTENTACION", file: "song68.mp3", cover: "cover12.jpg" },
    { title: "I Don't Wanna Do This Anymore", artist: "By XXXTENTACION", file: "song33.mp3", cover: "cover13.jpg" },
    { title: "HeMotions", artist: "By Juice Wrld", file: "song34.mp3", cover: "cover14.jpg" },
    { title: "Again (feat. XXXTENTACION)", artist: "By Noah Cyrus", file: "song35.mp3", cover: "cover15.jpg" },
    { title: "Blueberry Faygo", artist: "By Lil Mosey", file: "song36.mp3", cover: "cover16.jpg", bgVideo: "Blueberry Faygo.mp4" },
    { title: "Armed And Dangerous", artist: "By Juice Wrld", file: "song37.mp3", cover: "cover17.jpg" },
    { title: "Wishing Well", artist: "By Juice Wrld", file: "song38.mp3", cover: "cover18.jpg", bgVideo: "Wishing Well.mp4" },
    { title: "Demons and Angels (feat. Juice WRLD)", artist: "A Boogie Wit da Hoodie", file: "song40.mp3", cover: "cover19.jpg" },
    { title: "VOICES (feat. XXXTENTACION)", artist: "By Skye", file: "song41.mp3", cover: "cover20.jpg", bgVideo: "VOICES.mp4" },
    { title: "what are you so afraid of", artist: "By XXXTENTACION", file: "song42.mp3", cover: "cover21.jpg" },
    { title: "Blastoff (feat. Juice WRLD)", artist: "By Internet Money", file: "song43.mp3", cover: "cover22.jpg", bgVideo: "Blastoff.mp4" },
    { title: "Fast", artist: "By Juice Wrld", file: "song44.mp3", cover: "cover14.jpg" },
    { title: "Life's A Mess II (with Clever & Post Malone)", artist: "By Juice WRLD, Clever, Post Malone", file: "song45.mp3", cover: "cover23.jpg", bgVideo: "life's a mess.mp4" },
    { title: "Glo'd up", artist: "By Juice WRLD", file: "song46.mp3", cover: "cover24.jpg", bgVideo: "Glo'd up.mp4" },
    { title: "In My Head", artist: "By Juice WRLD", file: "song47.mp3", cover: "cover25.jpg", bgVideo: "In My Head.mp4" },
    { title: "Robbery", artist: "By Juice WRLD", file: "song48.mp3", cover: "cover26.jpg", bgVideo: "Robbery.mp4" },
    { title: "All Girls Are The Same", artist: "By Juice WRLD", file: "song49.mp3", cover: "cover27.jpg", bgVideo: "All Girls Are The Same.mp4" },
    { title: "Stay High", artist: "By Juice WRLD", file: "song50.mp3", cover: "cover18.jpg", bgVideo: "Stay High.mp4" },
    { title: "Conversations", artist: "By Juice WRLD", file: "song51.mp3", cover: "cover18.jpg", bgVideo: "Stay High.mp4" },
    { title: "Titanic", artist: "By Juice WRLD", file: "song52.mp3", cover: "cover18.jpg", bgVideo: "Stay High.mp4" },
    { title: "Righteous", artist: "By Juice WRLD", file: "song53.mp3", cover: "cover18.jpg", bgVideo: "Righteous.mp4" },
    { title: "Die With A Smile", artist: "By Lady gaga & Bruno Mars", file: "song69.mp3", cover: "cover69.jpg" },
    { title: "Arms Around You (feat. Maluma & Swae Lee)", artist: "XXXTENTACION", file: "song70.mp3", cover: "cover70.jpg", bgVideo: "Arms Around You.mp4" },
    { title: "Ransom (with Juice WRLD)", artist: "Lil Tecca ", file: "song71.mp3", cover: "cover71.jpg", bgVideo: "Ransom.mp4" },
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
const progressBar = document.getElementById('progress-bar'); // New element for progress bar
const currentTimeEl = document.getElementById('current-time'); // New element for current time
const totalDurationEl = document.getElementById('total-duration'); // New element for total duration

const audio = new Audio();
audio.src = songs[currentSongIndex].file;
audio.volume = volumeControl.value;
const videoSource = document.getElementById('video-source');
const backgroundVideo = document.getElementById('background-video');

function loadSong(index) {
    const song = songs[index];
    currentSongIndex = index; // Update current song index
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    coverImage.src = song.cover;
    audio.src = song.file;
    // Update background video
    if (song.bgVideo) {
        videoSource.src = song.bgVideo;
    } else {
        videoSource.src = "BG.mp4"; // Use default video
    }
    backgroundVideo.load(); // Reload the video
    pauseSong(); // Start in paused state
}


function playSong() {
    audio.play();
    backgroundVideo.play(); // Play the background video
    playBtn.textContent = "⏸"; // Change to pause icon
    isPlaying = true;
}

function pauseSong() {
    audio.pause();
    backgroundVideo.pause(); // Pause the background video
    playBtn.textContent = "▶️"; // Change to play icon
    isPlaying = false;
}

function prevSong() {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

// Update progress bar and time display
function updateProgressBar() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    progressBar.max = duration || 0; // Avoid NaN when duration is not available
    progressBar.value = currentTime;

    currentTimeEl.textContent = formatTime(currentTime);
    totalDurationEl.textContent = formatTime(duration);
}

// Format time in mm:ss
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Allow user to skip to a specific part
progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

// Event listeners for audio
audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('loadedmetadata', updateProgressBar);

// Search Functionality
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
            if (actualIndex !== -1) {
                currentSongIndex = actualIndex; // Update current index
                loadSong(currentSongIndex);
                playSong();
            }
        });
        songList.appendChild(songItem);
    });
    songList.classList.remove('hidden');
}

// Swipe Gesture Detection
let startX = 0;
coverImage.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

coverImage.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) {
        prevSong(); // Swipe right - previous song
    } else if (deltaX < -50) {
        nextSong(); // Swipe left - next song
    }
});

// Event Listeners
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});
searchBar.addEventListener('input', searchSongs);
viewAllBtn.addEventListener('click', () => displaySongList(songs));

// Initial Load
loadSong(currentSongIndex);
