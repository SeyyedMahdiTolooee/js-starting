'use strict';
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.getElementById('closeModal');
// const btnCloseModal = document.querySelector('#closeModal');
function openModal() {
  console.log(`button clicked`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   console.log(`modal closed`);
// };
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(`modal closed`);
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
// console.log(
//   (document.getElementById('modalPrompt').innerHTML = 'آیا به کمک نیاز دارید؟')
// );
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key !== 'F5') e.preventDefault();
  if (e.key === 'F1') {
    openModal();
    document.getElementById('modalPrompt').innerHTML = 'آیا به کمک نیاز دارید؟';
    document.getElementById('modalText').innerHTML =
      'میتوانید از منوی تماس با پیشتیبان با ما در میان بگزارید <br>متخصصین ما در اسرع وقت پاسخگوی شما خواهند بود';    
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   console.log(`modal  closed`);
// });
(overlay || btnCloseModal).addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(`modal closed`);
});

// ( overlay ||).addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   console.log(`modal closed`);
// });

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   console.log(`modal  closed`);
// });
