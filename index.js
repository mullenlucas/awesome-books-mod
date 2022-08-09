import DisplayB from './modules/display.js';
import AddRemoveB from './modules/addremove.js';
import { DateTime } from './modules/luxon.js';

// ---------ADD-------------

const newB = document.getElementById('bk');
newB.addEventListener('submit', (event) => {
  event.preventDefault();
  AddRemoveB.addBook();
});

// -------DELETE----------

document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-display')) {
    AddRemoveB.deleteBook(e);
  }
});

DisplayB.display();

// -------NAV--------

const listBtn = document.getElementById('list-link');
const addBtn = document.getElementById('add-link');
const contactBtn = document.getElementById('contact-link');
const listBox = document.querySelector('.list');
const addBox = document.querySelector('.add');
const contactBox = document.querySelector('.contact');

listBtn.addEventListener('click', () => {
  listBox.style.display = 'flex';
  addBox.style.display = 'none';
  contactBox.style.display = 'none';
});

addBtn.addEventListener('click', () => {
  listBox.style.display = 'none';
  addBox.style.display = 'flex';
  contactBox.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  listBox.style.display = 'none';
  addBox.style.display = 'none';
  contactBox.style.display = 'flex';
});

// --------TIME---------

const dateId = document.getElementById('date-time-id');
const setTime = () => {
  const dt = DateTime.local();
  const fmtDate = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

  dateId.innerHTML = fmtDate;
};
setTime();
setInterval(setTime, 1000);