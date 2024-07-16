import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


function timeUpdateHandler(player) {
    player.on('timeupdate', throttle (function (){
        player.getCurrentTime().then(function(seconds){
            console.log(seconds);
            localStorage.setItem("videoplayer-current-time", seconds);
        }).catch(function(error){
            console.error("Error name:", error);
        })
    }, 1000));
}

function timeStopHandler(player) {
    let savedTime = localStorage.getItem("videoplayer-current-time");
            // console.log(savedTime);
    if (savedTime){
        player.setCurrentTime(savedTime);
    }

}


    const iframe = document.getElementById('vimeo-player');
    const player = new Player(iframe);

    timeUpdateHandler(player);
    timeStopHandler(player);

