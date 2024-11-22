const showBtn = document.getElementById('user-btn')
const modal = document.getElementById('modal-kirish')
const closeBtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')
const signupForm = document.querySelector('#signup-form')
const message = document.querySelector('.message')

const add = (e) => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

const remove = (i) => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

showBtn.addEventListener('click', () =>remove())
closeBtn.addEventListener('click', () => add())
overlay.addEventListener('click', ()=> add())




signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const regEX = /^[0-9+\-*/#@$%^&]/g
  const inputVal = signupForm.number.value

  if (regEX.test(inputVal)) {
    message.textContent = "Ma'lumot to'g'ri kiritildi";
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  } else {
    message.textContent =
      "Siz faqat telefon no'merimgizni kiritning."
  }
})


document.querySelectorAll('.fa-heart').forEach((heart, index) => {
  const isActive = localStorage.getItem(`heart-${index}`) === 'true';
  if (isActive) {
    heart.classList.add('active');
  }
  

  heart.addEventListener('click', () => {
    heart.classList.toggle('active');
   localStorage.setItem(`heart-${index}`, heart.classList.contains('active'));
  });
});




