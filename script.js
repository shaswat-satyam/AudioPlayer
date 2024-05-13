// To add a new song add the mp3 to the audios folder
// And add it to the array below
let songs = ["challa","heer","ishq_shava","jeele_zaara"]
let listElement = document.getElementById("songList")
let currSong = document.getElementById("songsource")
var mySong = document.getElementById("mysong");
var icon = document.getElementById("icon");

for(let i in songs){
    let button = document.createElement("button")
    button.innerText = songs[i]
    button.addEventListener("click",function(){
        currSong.setAttribute("src","audios/"+songs[i]+".mp3")
        mySong.load()
    })
    listElement.appendChild(button)
}
icon.onclick= function(){
    if(mySong.paused){
        mySong.play();
        icon.innerText = "play"
    }
    else{
        mySong.pause();
        icon.innerText = "pause"
    }
}