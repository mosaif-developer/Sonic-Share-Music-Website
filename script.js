let settingsMenu = document.querySelector(".settings-menu");
let song = new Audio("audio/1.mp3");
let seekBarBtn = document.getElementById("seekBarBtn");
let gif = document.getElementById("gif");
let range = document.getElementById("range");
let upperAudio = document.querySelectorAll(".audio");
let songName = document.getElementById("songName");

// Function For Dropdown Menu

function dropDownMenu(){
    settingsMenu.classList.toggle("active");
}

// Creating click event on seekbar button

seekBarBtn.addEventListener("click", ()=>{
    if(song.paused || song.currentTime<=0){
      song.play();
      seekBarBtn.classList.remove("fa-circle-play");
      seekBarBtn.classList.add("fa-circle-pause");
      gif.style.opacity="1";

      // Using setInterval for seekbar input
    
    setInterval(()=>{

      // Converting song duration into percentage

      let percentage = (song.currentTime/song.duration)*100;
      range.value =  percentage;
    },1000);


    }else{
      song.pause();
      seekBarBtn.classList.add("fa-circle-play");
      seekBarBtn.classList.remove("fa-circle-pause");
      gif.style.opacity="0";
    }
})

// Seekbar whole work end here!!

// Converting percentage into duration

range.addEventListener("click", ()=>{
   song.currentTime = (range.value*song.duration)/100;
})

// Now, selecting all songs and we gave them id

upperAudio.forEach((element)=>{
  element.addEventListener("click",(e)=>{

    if(element.classList[2] == "fa-circle-play"){
    element.classList.remove("fa-circle-play");
    element.classList.add("fa-circle-pause");

    songName.innerText = element.parentElement.previousElementSibling.innerText;

    let index = e.target.id;
    song.src=`audio/${index}.mp3`;
    song.play();
    range.value = 0;
    song.currentTime = 0;
    gif.style.opacity = "1";
    seekBarBtn.classList.remove("fa-circle-play");
    seekBarBtn.classList.add("fa-circle-pause");
    }
    else{
    song.pause();
    element.classList.add("fa-circle-play");
    element.classList.remove("fa-circle-pause");
    seekBarBtn.classList.add("fa-circle-play");
    seekBarBtn.classList.remove("fa-circle-pause");
    gif.style.opacity="0";
    }
  })
})