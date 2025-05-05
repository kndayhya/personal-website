let songs = ["songs.wav","song2.wav"]

function randomSong(){
    let song = Math.floor(Math.random()*songs.length)
    return songs[song];
}

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
  