let songs = [
  { file: "songs/great-gig-in-the-sky.mp3", name: "The Great Gig in the Sky – Pink Floyd" },
  { file: "songs/i-know-its-over.mp3", name: "I Know It's Over – The Smiths" },
  { file: "songs/less-i-know-the-better.mp3", name: "The Less I Know the Better – Tame Impala" },
  { file: "songs/the-swan.mp3", name: "The Swan – Saint-Saëns" },
  { file: "songs/ur-not-the-same-anymore.mp3", name: "Not the Same Anymore – The Strokes" },
  { file: "songs/y-r-sundays-so-depressing.mp3", name: "Why Are Sundays So Depressing – The Strokes" }
];

function randomSong() {
  let songIndex = Math.floor(Math.random() * songs.length);
  let selectedSong = songs[songIndex]; // get the full object from the array
  let audio = document.getElementById("audio-player");
  let nowPlaying = document.getElementById("now-playing");

  audio.src = selectedSong.file;
  audio.play();
  nowPlaying.textContent = "Now playing: " + selectedSong.name;
}

let audio = document.getElementById("audio-player");
let progressBar = document.getElementById("progress-bar");

// Update progress bar as the song plays
audio.addEventListener("timeupdate", function () {
  let percentage = (audio.currentTime / audio.duration) * 100;
  progressBar.value = percentage;
});

progressBar.addEventListener("input", function () {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});
let images = [
    "memories/cavetown.jpeg",
    "memories/corniche.jpeg",
    "memories/crystal_water.jpeg",
    "memories/jed_palm.jpeg",
    "memories/laplage.jpeg",
    "memories/omar.jpeg",
    "memories/palms.jpeg",
    "memories/sonny.jpeg",
  ];
  
  let captions = [
    "Cavetown Concert!",
    "Jeddah Waterfront",
    "crystal clear waters",
    "Palm Trees from Home",
    "The Red Sea <3",
    "Omar Apollo Concert!",
    "pretty sunsets",
    "sonny angel x pebble beach"
  ];
  
  let index = 0;

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("slideshow").src = images[index];
    document.getElementById("caption").innerText = captions[index];
  });
  
  function changeSlide(n) {
    index = (index + n + images.length) % images.length;
    document.getElementById("slideshow").src = images[index];
    document.getElementById("caption").innerText = captions[index];
  }
  