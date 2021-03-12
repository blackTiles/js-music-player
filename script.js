

list_of_songs = ["music1.mp3", "music2.mp3", "music3.mp3", "music4.mp3", "music5.mp3"]
var i=0;
var logo = document.getElementById('logo');
let icon = document.querySelector('#icon');
var audio = new Audio(list_of_songs[i]);
function togglePlay(audio) {
    if (audio.paused) {
        logo.className="rotateImage";
        icon.className="fas fa-pause-circle";
        audio.play();
    }
    else {
        logo.className="norotate";
        icon.className="fas fa-play-circle";
        audio.pause();
    }
};
function previousSong(){
    if(i==0){
        audio.pause();
        icon.className="fas fa-pause-circle";
        audio = new Audio(list_of_songs[i=list_of_songs.length-1]);
        togglePlay(audio);
    }
    else {
        audio.pause();
        icon.className="fas fa-pause-circle";
        audio = new Audio(list_of_songs[i=i-1]);
        togglePlay(audio);
    }
    
}
function nextSong(){
    if(i==list_of_songs.length-1){
        audio.pause();
        icon.className="fas fa-pause-circle";
        audio = new Audio(list_of_songs[i=0]);
        togglePlay(audio);
    }
    else{
        audio.pause();
        icon.className="fas fa-pause-circle";
        audio = new Audio(list_of_songs[i=i+1]);
        togglePlay(audio);
    }            
}
function changeTime(){
    var duration_cur = Math.round(audio.currentTime);
    if(duration_cur>=0 && duration_cur<10){
        document.getElementById('duration_cur').innerHTML= "0:0"+duration_cur; 
    }
    else if(duration_cur>=10 && duration_cur<60){
        document.getElementById('duration_cur').innerHTML= "0:"+duration_cur; 
    }
    else{
        document.getElementById('duration_cur').innerHTML= Math.floor(duration_cur/60)+":"+duration_cur%60;
    }
}
function changeRange(){
    var audio_dur = Math.round(audio.duration);
    document.getElementById('duration_full').innerHTML=Math.round(audio_dur/60)+":"+audio_dur%60;
    var range_current = Math.round(audio.currentTime);
    var audio_duration = Math.round(audio.duration);
    document.getElementById('vol').max=audio_duration;
    document.getElementById('vol').value=range_current;
}
setInterval(changeTime,1000);
setInterval(changeRange, 1000);

