const sizeInfo = document.getElementById('size-info');
const modal1 = document.getElementById('modal1');
const overlay1 = document.getElementById('overlay1');
const closeModal = document.getElementById('close-modal');

// Modalni ochish
const openModal = () => {
  modal1.classList.remove('hidden');
  overlay1.classList.remove('hidden');
};

// Modalni yopish
const closeModalFunc = () => {
  modal1.classList.add('hidden');
  overlay1.classList.add('hidden');
};

// Hodisalarni biriktirish
sizeInfo.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);
overlay1.addEventListener('click', closeModalFunc);










