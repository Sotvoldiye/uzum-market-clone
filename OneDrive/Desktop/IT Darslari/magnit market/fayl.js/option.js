// HTML elementlarni olish
const number = document.getElementById('son');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const narx = document.getElementById('narx');


let qoshish = 0;
let narxi = 0;

plusButton.addEventListener('click', () => {
    if (qoshish < 15) {
        qoshish++;
        narxi += 4000;
        number.textContent = qoshish;
        narx.innerHTML = ` <p class="narx" id="narx"> narxi ${narxi} so'm </p>`
    }
});

minusButton.addEventListener('click', () => {
    if (qoshish > 0) {
       qoshish--;
       narxi -= 4000;
       number.textContent = qoshish;
       narx.innerHTML = ` <p class="narx" id="narx"> narxi ${narxi} so'm </p>`
    }
});


