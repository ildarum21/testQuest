let play = document.querySelector('.play');
let div= document.querySelector('.movie');
let container =document.querySelector('.m');
let icon =document.querySelector('.icon');
play.onclick= function(){
    let video =document.createElement('iframe');

    video.src="https://www.youtube.com/embed/KvUgaHTNit4";
    video.align="center";
    video.width="800px";
    video.height="550px";
    video.frameBorder="0";
    video.marginTop='10px';
    video.position='relative';
    video.allow="accelerometer";
    video.allowFullscreen = "allowFullscreen";
    video.autoplay='autoplay';
    div.appendChild(video);
    div.removeChild(icon);
    
}
console.log(div.style.width);