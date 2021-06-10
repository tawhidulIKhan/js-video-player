// const toggler = document.querySelector("#play");

// video.removeAttribute("controls");

// const toggleVideo = (ev) => {
//   video.paused ? video.play() : video.pause();
// };

// toggler.addEventListener("click", toggleVideo);
PLAY_ICON = '<i class="fas fa-play"></i>';
PAUSE_ICON = '<i class="fas fa-pause"></i>';

class VideoPlayer {
  toggler = "toggler";
  video = null;
  videoStatus = "paused";

  constructor(args) {
    this.videoId = args.id;
    this.videoWidth = args.width || 600;
    this.videoHeight = args.height || 400;
    this.videoLink = args.link || "#";
    this.run();
  }

  run = () => {
    const player = document.querySelector(this.videoId);
    this.video = this.createVideo();
    const controls = this.createControls();
    player.appendChild(this.video);
    player.appendChild(controls);

    this.toggleHandler();
  };

  setTime = () => {
    let time = '';
    let minutes = Math.floor(this.video.currentTime / 60);
    let seconds = Math.floor(this.video.currentTime - minutes * 60);
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    const timer = document.getElementById("timer");
    time = `${minutesValue}: ${secondsValue}`
    timer.innerHTML = time;
  };

  toggleHandler = () => {
    const toggler = document.getElementById(this.toggler);
    toggler.addEventListener("click", (ev) => {
      this.video.paused ? this.video.play() : this.video.pause();
      toggler.innerHTML = this.video.paused ? PLAY_ICON : PAUSE_ICON;
      videoItem.addEventListener("timeupdate", () => {
        this.setTime();
      });

    });
    console.log(toggler);
  };

  createVideo = () => {
    const video = document.createElement("video");
    video.id = "video";
    video.width = this.videoWidth;
    video.height = this.videoHeight;
    video.src = this.videoLink;
    return video;
  };

  createControls = () => {
    let controlsContent = "";
    const controls = document.createElement("div");
    controls.classList.add("video-controls");
    controlsContent += this.getTimer();
    controlsContent += this.getToggleBtn();
    controlsContent += this.getProgress();
    controlsContent += this.getBackward();
    controlsContent += this.getForward();
    controls.innerHTML = controlsContent;
    return controls;
  };

  getToggleBtn = () => {
    const toggler = `<button id="${this.toggler}" class="video-control">
      <i class="fas fa-play"></i>
  </button>`;

    return toggler;
  };
  getProgress = () => {
    const progress = `<div class="progress">
      <div class="progress-bar">
          <div class="pointer"></div>
      </div>
  </div>
`;
    return progress;
  };

  getBackward = () => {
    const backward = `                <button id="backward" class="video-control">
    <i class="fas fa-backward"></i>
</button>

`;
    return backward;
  };

  getForward = () => {
    const forward = `<button id="forward" class="video-control">
    <i class="fas fa-forward"></i>
</button>
`;
    return forward;
  };

  getTimer = () => {
    const timer = ` <div id="timer" class="timer">00:00</div>`;
    return timer;
  };
}

const video = new VideoPlayer({
  id: "#video-player",
  width: 600,
  link: "media/sample.mp4",
});

let videoItem = document.querySelector("#video");

// const setTime = () => {
//   const timer = document.getElementById("timer");
//   console.log(videoItem.currentTime);
//   timer.innerHTML = videoItem.currentTime;
// };

// console.log(videoItem);

// videoItem.addEventListener("timeupdate", setTime());
