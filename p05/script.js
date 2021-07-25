const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let count = 0;
var timer0 = setInterval(blurring, 20);

function blurring() {
  count++;

  loadingText.innerHTML = `${count}%`;
  loadingText.style.opacity = scale(count, 0, 100, 1, 0);

  bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;

  if (count > 99) {
    clearInterval(timer0);
  }
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// (x-in_min)/(in_max-in_min) == (y-out_min)/(out_max-out_min)
