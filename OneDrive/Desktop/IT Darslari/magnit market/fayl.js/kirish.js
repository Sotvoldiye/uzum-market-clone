const usernameInput = document.getElementById('username'); 
const usernameButton = document.getElementById('button'); 
const innerButton = document.getElementById('inner-button'); 

window.addEventListener('load', () => {
  const savedUsername = localStorage.getItem('username'); 
  if (savedUsername) {
    innerButton.innerHTML = `<i class="fas"> ${savedUsername}</i>`;
  }
  add()
});

usernameButton.addEventListener('click', () => {
  const username = usernameInput.value.trim(); 
  if (username) {
    localStorage.setItem('username', username); 
    innerButton.innerHTML = `<i> ${username}</i>`;
  }
  add()
});



const modalButton = document.getElementById('modal-button');
const closeBtn = document.getElementById('close-btn');
const overlay1 = document.getElementById('overlay1');
const modal = document.getElementById('modal');
const hidden = document.getElementsByClassName('hidden')

const add = () => {
  modal.classList.add('hidden');
  overlay1.classList.add('hidden');
};


const remove = () => {
  modal.classList.remove('hidden');
  overlay1.classList.remove('hidden');
};

modalButton.addEventListener('click', () => remove()); 
closeBtn.addEventListener('click', () => add());
overlay1.addEventListener('click', () => add()); 

