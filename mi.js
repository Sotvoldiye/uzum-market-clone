const xotira = document.getElementById('click1')
const xotira1 = document.getElementById('click2')
const xotira2 = document.getElementById('click3')
const son = document.getElementById('son');      
const qarz = document.getElementById('qarz'); 
const qoldiq = document.getElementById('qoldiq')
const rasm1 = document.getElementById('rasm1')
const rasm2 = document.getElementById('rasm2')
const rang = document.getElementById('rang')
const narxi = document.getElementById('narxi')
const button = document.getElementById('button')
const redmi1 = document.getElementById('img01');
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const redmi2 = document.getElementById('img02')
const img11 = document.getElementById('img21')
const img12 = document.getElementById('img22')

xotira.addEventListener('click', () => {
  xotira.style.border = '1px solid black';
  xotira1.style.border = '#b5b3b3 solid 1px';
  xotira2.style.border = '#b5b3b3 solid 1px';
  son.innerHTML = "1 795 000 so'm <del>4 400 000</del>"
  qarz.innerHTML = '<span>oyiga 105 000 so\'mdan</span> muddatli to\'lov<i class="fa-solid fa-chevron-right"></i>';
  qoldiq.innerHTML =`<img src="./Без названия1.svg" alt="" width="32px"> 
  <p>Oxirgisi qoldi</p>`;
});

xotira1.addEventListener('click', () => {
  xotira1.style.border = '1px solid black';
  xotira2.style.border = '#b5b3b3 solid 1px';
  xotira.style.border = '#b5b3b3 solid 1px';
  son.innerHTML = "1 999 000 so'm <del>4 500 000</del>"
  qarz.innerHTML = '<span>oyiga 141 595 so\'mdan</span> muddatli to\'lov<i class="fa-solid fa-chevron-right"></i>';
  qoldiq.innerHTML =`<img src="./Без названия1.svg" alt="" width="32px">  <p>Bor-yo\'gi 2 dona qoldi</p> `
});

xotira2.addEventListener('click', () => {
  xotira2.style.border = '1px solid black';
  xotira.style.border = '#b5b3b3 solid 1px';
  xotira1.style.border = '#b5b3b3 solid 1px';
  son.innerHTML = "2 215 000 so'm <del>4 600 000</del>"
  qarz.innerHTML = '<span>oyiga 156 895 so\'mdan</span> muddatli to\'lov<i class="fa-solid fa-chevron-right"></i>';
  qoldiq.innerHTML =`<img src="./Без названия1.svg" alt="" width="32px">  <p>Oxirgisi qoldi</p> `
});

rasm1.addEventListener('click', () => {
  rasm1.style.border = '1px solid black';
  rasm2.style.border = ' none';
  rang.innerHTML = "Laym"
  xotira2.style.border = '1px dashed #bfbfbf';
  xotira2.style.color = '#bfbfbf'
  xotira.style.border = '1px dashed #bfbfbf';
  xotira.style.color = '#bfbfbf'
  xotira1.style.border = '#b5b3b3 solid 1px';
  redmi1.innerHTML = `
  <img src="./redmi/redmiyashil1.jpg" id="redmi1" width="63px" height="84px" alt="">
  <img src="./redmi/redmiyashil2.jpg" class="redmi02" id="redmi2" width="63px" height="84px" alt="">    
  <img src="./redmi/redmiyashil3.jpg"  alt="" id="redmi3" width="63px" height="84px">   
  `;
  // redmi2.innerHTML = `
  // `
  img1.innerHTML = `<img src="./redmi/redmiyashil1.jpg" id="m2" width="350px" height="500px" alt="">`;
  img2.innerHTML =`<img src="./redmi/redmiyashil2.jpg" id="m2" width="350px" height="500px" alt="">`
});

rasm2.addEventListener('click', () => {
  rasm2.style.border = '1px solid black';
  rasm1.style.border = 'none ';
  rang.innerHTML = "Qora"
  xotira2.style.border = 'black solid 1px';
  xotira.style.border = ' solid 1px';
  xotira1.style.border = '#b5b3b3 solid 1px';
  redmi1.innerHTML = `
  <img src="./redmi/redmi1.jpg" id="redmi1" width="63px" height="84px" alt="">
  <img src="./redmi/redmi2.jpg" class="redmi2" id="redmi2" width="63px" height="84px" alt="">    
  <img src=""  alt="" id="redmi3">`;
  img1.innerHTML = `  <img src="./redmi/redmi1.jpg" id="mi1" width="351px" height="490px" alt="">`;
  img2.innerHTML = `<img src="./redmi/redmi2.jpg" id="m2" width="350px" height="500px" alt="">`
});



rasm1.addEventListener('click', () => {
  xotira.addEventListener('click',() => {
    narxi.style.height = '250px';
    button.style.backgroundColor = '#b5b3b3';
    button.style.color = '#fff';
    narxi.innerHTML = `
      <p class="son" id="son">4 300 000 so'm </p>
      <div class="sotibolish">
      <p class="text">1 klikda harid qilish </p>
      <p class="like"><i class="fa-regular fa-heart fa-xl"></i>
      </p>
      </div>
      <a class="button" id="button" href="#">Sotuvda yo'q</a> `;
xotira2.addEventListener('click',() => {
  narxi.style.height = '250px';
  button.style.backgroundColor = '#b5b3b3';
  button.style.color = '#fff';
  narxi.innerHTML = `
<p class="son" id="son">4 300 000 so'm </p>
<div class="sotibolish">
<p class="text">1 klikda harid qilish </p>
<p class="like"><i class="fa-regular fa-heart fa-xl"></i>
</p>
</div>
<a class="button" id="button" href="#">Sotuvda yo'q</a>`;

  } )
  xotira1.addEventListener('click',() => {
    narxi.style.height = '395px'  
    narxi.innerHTML = `
      <p class="son" id="son">1 789 000 so'm <del>3 229 000</del></p>
      <p class="qarz" id="qarz"><span>oyiga 126 720 so'mdan</span>muddatli to'lov<i class="fa-solid fa-chevron-right"></i></p>
     <div class="sotibolish">
      <p class="text">1 klikda harid qilish </p>
      <p class="like"><i class="fa-regular fa-heart fa-xl"></i>
      </p>
      </div>
      <a class="button" id="button" href="#">Savatga qo'shish</a>
      <div class="qoldiq" id="qoldiq">
        <img src="./Без названия1.svg" alt="" width="32px"> 
        <p>Bor-yo'g'i 2dona qoldi</p>
      </div>
      <div class="haridqilinganlari">
      <img src="./badge_bought.webp" alt="" width="32px">
        <p>Bu haftada 33 kishi sotib oldi</p>
      </div>
     
  `
    
}); 
})
  redmi2.innerHTML = `         
  <img src="./planshet/yalpiz1.jpg" width="63px" height="84px" alt="">
  <img src="./planshet/yalpiz2.jpg" width="63px" height="84px" alt="">
  <img src="./planshet/yalpiz3.jpg" width="63px" height="84px" alt="">
  <img src="./planshet/yalpiz4.jpg" width="63px" height="84px" alt="">
  <img src="./planshet/yalpiz5.jpg" width="63px" height="84px" alt="">`;
  img11.innerHTML =` <img src="./planshet/yalpiz1.jpg" width="351px" height="490px" alt="">`
  img12.innerHTML = ` <img src="./planshet/yalpiz2.jpg" width="350px" height="500px" alt="">`
})

rasm2.addEventListener('click', () => {
  xotira2.style.border = '1px solid black';
  xotira.style.border = '#b5b3b3 solid 1px';
  xotira1.style.border = '#b5b3b3 solid 1px';
  xotira.style.color = '#000';
  xotira1.style.color = '#000';
  xotira2.style.color = '#000';
  redmi2.innerHTML = `
  <img src="./planshetmiimg/planshetmi1.jpg" width="63px" height="84px" alt="">
  <img src="./planshetmiimg/planshetmi2.jpg" width="63px" height="84px" alt="">
  <img src="./planshetmiimg/planshetmi3.jpg" width="63px" height="84px" alt="">
  <img src="./planshetmiimg/palnshetmi4.jpg" width="63px" height="84px" alt="">
  <img src="./planshetmiimg/planshetmi5.jpg" width="63px" height="84px" alt="">`;
  img11.innerHTML =`<img src="./planshetmiimg/planshetmi1.jpg" width="351px" height="490px" alt="">`
  img12.innerHTML = `<img src="./planshetmiimg/planshetmi2.jpg" width="351px" height="490px" alt="">`
  xotira1.addEventListener('click',() => {
    narxi.style.height = '395px'  
    narxi.innerHTML = `
      <p class="son" id="son">2 190 000 so'm <del>4 300 000</del></p>
      <p class="qarz" id="qarz"><span>oyiga 155 125 so'mdan</span>muddatli to'lov<i class="fa-solid fa-chevron-right"></i></p>
     <div class="sotibolish">
      <p class="text">1 klikda harid qilish </p>
      <p class="like"><i class="fa-regular fa-heart fa-xl"></i>
      </p>
      </div>
      <a class="button" id="button" href="#">Savatga qo'shish</a>
      <div class="qoldiq" id="qoldiq">
        <img src="./Без названия1.svg" alt="" width="32px"> 
        <p>Bor-yo'g'i 2dona qoldi</p>
      </div>
      <div class="haridqilinganlari">
      <img src="./badge_bought.webp" alt="" width="32px">
        <p>Bu haftada 33 kishi sotib oldi</p>
      </div>
     
  `
});
xotira.addEventListener('click',() => {
  narxi.style.height = '395px'  
  narxi.innerHTML = `
    <p class="son" id="son">1 810 000 so'm <del>4 300 000</del></p>
    <p class="qarz" id="qarz"><span>oyiga 128 208 so'mdan</span>muddatli to'lov<i class="fa-solid fa-chevron-right"></i></p>
   <div class="sotibolish">
    <p class="text">1 klikda harid qilish </p>
    <p class="like"><i class="fa-regular fa-heart fa-xl"></i>
    </p>
    </div>
    <a class="button" id="button" href="#">Savatga qo'shish</a>
    <div class="qoldiq" id="qoldiq">
      <img src="./Без названия1.svg" alt="" width="32px"> 
      <p>Bor-yo'g'i 2dona qoldi</p>
    </div>
    <div class="haridqilinganlari">
    <img src="./badge_bought.webp" alt="" width="32px">
      <p>Bu haftada 33 kishi sotib oldi</p>
    </div>
   
`
});
xotira2.addEventListener('click',() => {
  narxi.style.height = '395px'  
  narxi.innerHTML = `
    <p class="son" id="son">1 949 000 so'm <del>4 300 000</del></p>
    <p class="qarz" id="qarz"><span>oyiga 138 054 so'mdan</span>muddatli to'lov<i class="fa-solid fa-chevron-right"></i></p>
   <div class="sotibolish">
    <p class="text">1 klikda harid qilish </p>
    <p class="like"><i class="fa-regular fa-heart fa-xl"></i>
    </p>
    </div>
    <a class="button" id="button" href="#">Savatga qo'shish</a>
    <div class="qoldiq" id="qoldiq">
      <img src="./Без названия1.svg" alt="" width="32px"> 
      <p>Bor-yo'g'i 2dona qoldi</p>
    </div>
    <div class="haridqilinganlari">
    <img src="./badge_bought.webp" alt="" width="32px">
      <p>Bu haftada 33 kishi sotib oldi</p>
    </div>
   
`
  
}) ;
} )