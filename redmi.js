const img1 = document.getElementById('planshetimg1');
const img2 = document.getElementById('planshetimg2');
const img3 = document.getElementById('planshetimg3');
const img4 = document.getElementById('planshetimg4');
const img11 = document.getElementById('img21');
const img12 = document.getElementById('img22');

img3.addEventListener('click', () => {
  const tempSrc = img3.src;
  img3.src = img11.querySelector('img').src;
  img11.querySelector('img').src = tempSrc;
  img3.style.border = '1px solid black';
});