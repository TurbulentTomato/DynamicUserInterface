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

ddBtn.addEventListener('click', () => {
  toggleDropDown(ddBtn);
})

previousImgBtn.addEventListener('click', showPreviousImage);
nextImgBtn.addEventListener('click', showNextImage);

function toggleDropDown(btn) {
  btn.closest('[class="drop-down-container"]').querySelector('.drop-down-list').classList.toggle('active');
}

function showNextImage() {
  if (position === maxPosition) {
    position = minPosition;
  } else {
    position = position - 500;
  }
  imageStrip.style.left = `${position}px`;
}

function showPreviousImage() {
  if (position === minPosition) {
    position = maxPosition;
  } else {
    position = position + 500;
  }
  imageStrip.style.left = `${position}px`;
}
