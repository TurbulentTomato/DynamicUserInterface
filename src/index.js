import "./main.css";
import "./dropdown.css";
import "./carousel.css";

const ddBtn = document.querySelector('.drop-down-btn');
const previousImgBtn = document.querySelector('.previous-img-btn');
const nextImgBtn = document.querySelector('.next-img-btn');
const imageStrip = document.querySelector('.strip');
let position = 0;
const numberOfImages = 4;
const width = 500;
const minPosition = 0;
const maxPosition = -((numberOfImages - 1) * width);
let activeIndicator = document.querySelector('[data-position="0"]');
const indicatorContainer = document.querySelector('.indicator-container');
let intervalId;

ddBtn.addEventListener('click', () => {
  toggleDropDown(ddBtn);
})

previousImgBtn.addEventListener('click', () => {
  showPreviousImage();
  changeIndicator();
});

nextImgBtn.addEventListener('click', () => {
  showNextImage();
  changeIndicator();
});

indicatorContainer.addEventListener('click', (event) => {
  if (event.target === indicatorContainer) {
    return;
  }
  clearInterval(intervalId);
  position = -Number(event.target.dataset.position) * width;
  imageStrip.style.left = `${position}px`;
  changeIndicator();
  createInterval();
})

function toggleDropDown(btn) {
  btn.closest('[class="drop-down-container"]').querySelector('.drop-down-list').classList.toggle('active');
}

function showNextImage() {
  clearInterval(intervalId);
  if (position === maxPosition) {
    position = minPosition;
  } else {
    position = position - 500;
  }
  imageStrip.style.left = `${position}px`;
  createInterval();
}

function showPreviousImage() {
  clearInterval(intervalId);
  if (position === minPosition) {
    position = maxPosition;
  } else {
    position = position + 500;
  }
  imageStrip.style.left = `${position}px`;
  createInterval();
}

function changeIndicator() {
  activeIndicator.classList.toggle('active-indicator');
  activeIndicator = document.querySelector(`[data-position="${position / (-width)}"]`);
  activeIndicator.classList.toggle('active-indicator');
}

function createInterval() {
  intervalId = setInterval(() => {
    showNextImage();
    changeIndicator();
  }, 5000);
}

createInterval();
