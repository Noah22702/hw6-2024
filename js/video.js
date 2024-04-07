var video;

var volume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

video = document.querySelector("#player1");
video.pause();
video.loop = false;
video.volume = document.querySelector("#slider").value / 100


//Play button with the volume up date
document.querySelector("#play").addEventListener("click", function () {
  console.log("Video started to play");
  video.play();
  console.log("The Volume is" + video.volume);
  volume.innerHTML = video.volume * 100 + "%";
});

//Pause button
document.querySelector("#pause").addEventListener("click" , function() {
  video.pause();
});


//Slows the vidoe down by 0.9 and console logs
document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.9;
  console.log("Video speed is now" + video.playbackRate);
});

//Speeds up proportional to the slow down (Just the opposite of the slower)
document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.9;
  console.log("Video speed is now" + video.playbackRate);
});


//Skips ahead by 10 secs but will restart if 10 secs or less is left
document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 > video.duration){
    video.currentTime = 0;
    console.log("Video time is now" + video.currentTime);
  } else {
    video.currentTime += 10;
    console.log("Video time is now" + video.currentTime);
  }



});

//Mute button with text change
document.querySelector("#mute").addEventListener("click", function () {
  
  if(video.muted){
    video.muted = false;
    this.textContent = "Mute";
  } else {
    video.muted = true;
    this.textContent = "Unmute";
  }
});

//Slider button with console log
document.querySelector("#slider").addEventListener("change", function (){
  video.volume = slider.value / 100;
  volume.innerHTML = slider.value + "%";
  console.log("Volume Slider is " + slider.value);
});

//Vintage Styled
document.querySelector("#vintage").addEventListener("click" , function (){
  video.classList.add("oldSchool");
});

//Classic
document.querySelector("#orig").addEventListener("click", function (){
  video.classList.remove("oldSchool");
});

});


