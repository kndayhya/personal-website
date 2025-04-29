let songs = ["songs.wav","song2.wav"]

function randomSong(){
    let song = Math.floor(Math.random()*songs.length)
    return songs[song];
}

