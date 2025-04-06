import "./main.css";
import "./dropdown.css";

const ddBtn = document.querySelector('.drop-down-btn');
ddBtn.addEventListener('click', () => {
  toggleDropDown(ddBtn);
})
function toggleDropDown(btn) {
  btn.closest('[class="drop-down-container"]').querySelector('.drop-down-list').classList.toggle('active');
}
