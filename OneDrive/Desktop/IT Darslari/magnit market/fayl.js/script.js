const hidden1 = document.getElementsByClassName('hidden1')
const closeBtn1 = document.getElementById('close')
const overlay = document.getElementById('overlay')
const button = document.getElementById('sotib-b')
const modal1 = document.getElementById('modal1')

const add1 = (e) => {
  modal1.classList.add('hidden')
  overlay.classList.add('hidden')
}

const remov = (i) => {
  modal1.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

button.addEventListener('click', () =>remov())
closeBtn1.addEventListener('click', () => add1())
overlay.addEventListener('click', ()=> add1())

const closeT = document.getElementById('close-t');
const closeX = document.getElementById('close-x');
const togri = document.getElementById('togri');
const xato = document.getElementById('xato');
const button1 = document.getElementById('buyurtma');
const number1 = document.getElementById('tel');
const message = document.querySelector('.message');

const regex = /^[0-9]{2,14}$/; // 2 dan 14 gacha raqamlarni tekshirish uchun regex

button1.addEventListener('click', () => {
  if (regex.test(number1.value)) {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
    togri.classList.remove('hidden');
  } else {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
    xato.classList.remove('hidden');
  }
});


closeT.addEventListener('click', () => {
  togri.classList.add('hidden');
});

closeX.addEventListener('click', () => {
  xato.classList.add('hidden');
});