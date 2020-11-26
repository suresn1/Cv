var video = document.getElementById('video');
var playpause = document.getElementById('playpause');
var stop = document.getElementById('stop');
var francais = document.getElementById('fr');
var anglais = document.getElementById('en');


function PlayPauseVideo()
{
	if(video.paused){
		video.play();
		playpause.src = "Input/Pause.png";
	}
	else{
		video.pause();
		playpause.src = "Input/Play.png";
	}
}

function StopVideo(){
	video.pause();
    video.currentTime = 0;
    playpause.src = "Input/Play.png"
    
}

function AnglaisVideo(){
    video.src ="Video/anglais.mp4"
    playpause.src = "Input/Play.png";
}

function FrancaisVideo(){
    video.src ="Video/video.mp4"
    playpause.src = "Input/Play.png";
}

function synchro(){
    if (video.currentTime==2){
        document.getElementById("h1").style.backgroundColor = "#FF0000";
    }
}



playpause.addEventListener('click',PlayPauseVideo);
stop.addEventListener('click',StopVideo);
anglais.addEventListener('click',AnglaisVideo);
francais.addEventListener('click',FrancaisVideo);