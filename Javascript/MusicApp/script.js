window.addEventListener("load", initEvents);

var songList = [
    {
        "songId" : 1,
        "songName" : "Faded Mix",
        "songSrc" : "songs/faded.mp3"
    },
    {
        "songId" : 2,
        "songName" : "Fifa World Cup",
        "songSrc" : "songs/fifa world cup.mp3"
    },
    {
        "songId" : 3,
        "songName" : "Galti Se Mistake",
        "songSrc" : "songs/Galti.mp3"
    },
    {
        "songId" : 4,
        "songName" : "Linkin Park - Faint",
        "songSrc" : "songs/linkin_park-faint.mp3"
    },
    {
        "songId" : 5,
        "songName" : "Vedalam Theme",
        "songSrc" : "songs/Vedalam.ogg"
    }
]

var audio;

function initEvents(){
    var ul  =document.getElementById("songsList");
    audio = document.getElementById("audio");

    songList.forEach(function(obj){
        var li = document.createElement('li');
        li.innerHTML = obj.songName;
        li.setAttribute('title',obj.songSrc);
        // console.log(obj.songSrc);
        ul.appendChild(li);
        li.addEventListener("click",playSong);
    });

}

function playSong(){
    var songUrl = this.title;
    console.log(songUrl);
    audio.src = songUrl;
    audio.play();
}