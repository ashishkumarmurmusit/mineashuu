let buttonGetSignal = document.getElementById("get-signal");
let loadingSignal = document.getElementById("loading");
let screenStart = document.getElementById("screenStart");
let signal = document.getElementById("img-signal");

buttonGetSignal.onclick = function () {
  signal.classList.add("deactive");
  screenStart.classList.add("deactive");
  loadingSignal.classList.remove("deactive");
  buttonGetSignal.disabled = true;
  const randomPhotoNumber = Math.floor(Math.random() * (70 - 1) + 1);
  signal.src = `assets/signal/${randomPhotoNumber}.jpg`;

  setTimeout(function () {
    loadingSignal.classList.add("deactive");
    signal.classList.remove("deactive");
    buttonGetSignal.disabled = false;
  }, 3000);
};
