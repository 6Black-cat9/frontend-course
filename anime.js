const player = document.querySelector("iframe");

function changeVideo(videoId) {
  player.src = "https://www.youtube.com/embed/" + videoId;
}
