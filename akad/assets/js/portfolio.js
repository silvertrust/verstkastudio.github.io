window.onload =function(){
  //ПАРАЛАКС ЭФЕКТ PORTFOLIO
var availWidth = window.screen.availWidth;
var availHeight = window.screen.availHeight; //Определение высоты экрана без меню  ПУСК
//АНИМАЦИЯ КУРСОРА МЕНЮ ПОРТФОЛИО
var options = document.querySelectorAll('#category ul li');//Массив пунктов меню портфолио
console.log(options);
  function equalScreenWidthRemove(){     //Функции определения шырины монитора  
  if (availWidth >992){
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      option.classList.remove('focus');
    }
  }
  else {for (let i = 0; i < options.length; i++) {
    const option = options[i];
    option.classList.remove('focus2');
  }}
}
function equalScreenWidthAdd(x){
  if (availWidth >992){
    x.classList.add('focus');
  }
  else {x.classList.add('focus2');}
}
//ПОВЕДЕНИЕ БЛОКА ПРИ ВЫБОРЕ ПУНКТОВ МЕНЮ (СОРТИРОВКИ)
equalScreenWidthAdd(document.getElementById('categ'));
var all = document.querySelectorAll('#content #portfolio #select_block #photo .img'); //Масив всех фотографий
animate(all);
var photography = document.querySelectorAll('#content #portfolio #select_block #photo .photography'); 
var webdesign = document.querySelectorAll('#content #portfolio #select_block #photo .webdesign'); 
var logo = document.querySelectorAll('#content #portfolio #select_block #photo .logo'); 
var graphics = document.querySelectorAll('#content #portfolio #select_block #photo .graphics');
var advertising = document.querySelectorAll('#content #portfolio #select_block #photo .advertising'); 
var fashion = document.querySelectorAll('#content #portfolio #select_block #photo .fashion'); 
document.getElementById('categ').onclick = function(){
  equalScreenWidthRemove();
  equalScreenWidthAdd(this);
  removeAll();
  animate(all);
  console.log(all);
}
document.getElementById('categ1').onclick = function(){
  equalScreenWidthRemove();
  equalScreenWidthAdd(this);
  removeAll();
  animate(photography);
  console.log(photography);
}
document.getElementById('categ2').onclick = function(){
  equalScreenWidthRemove();
  equalScreenWidthAdd(this);
  removeAll();
  animate(webdesign);
  console.log(webdesign);
}
document.getElementById('categ3').onclick = function(){
  equalScreenWidthRemove();
  equalScreenWidthAdd(this);
  removeAll();
  animate(logo);
  console.log(logo);
}
document.getElementById('categ4').onclick = function(){
  equalScreenWidthRemove();
  equalScreenWidthAdd(this);
  removeAll();
  animate(graphics);
  console.log(graphics);
}
document.getElementById('categ5').onclick = function(){
  equalScreenWidthRemove();
  equalScreenWidthAdd(this);
  removeAll();
  animate(advertising);
  console.log(advertising);
}
document.getElementById('categ6').onclick = function(){
  equalScreenWidthRemove();
  equalScreenWidthAdd(this);
  removeAll();
  animate(fashion);
  console.log(fashion);
}
function removeAll(){
  for (let i = 0; i < all.length; i++) {
    const element = all[i];
    element.style.opacity ='0'; 
    element.style.display ='none';
  }
}
function slowFade(object){
  console.log(object);
  for (var i = 0; i<101; i++){
      object.style.display = 'inline-block';
      (function(i) {
          setTimeout(function() { 
              let x = i/100;
              object.style.opacity = x;
          }, 7 * i);
      })(i); 
  }
}
function animate(photos){
  for (var i = 0; i < photos.length; i++) {
    const element = photos[i];
    photos[i].style.transition='opacity 1s ease-in-out';
    (function(i) {
      setTimeout(function() { 
        slowFade(photos[i]);
      }, 350 * i);
  })(i); 
    element.onmouseover = function(){
      //console.log(this);
      var object = this.querySelector('#wrapper');
      object.style.width ='100%';
      object.style.opacity ='1';
      object.style.display ='block';
      setTimeout(function(){
        console.log(object);
        object.querySelector('h2').style.top = '30%';
        object.style.opacity ='1';
        object.style.display ='block';
        setTimeout(function(){
          console.log(object);
          object.querySelector('#button').style.top = '57%';},300);
          object.style.opacity ='1';
          object.style.display ='block';
      },300);
    }
    element.onmouseleave =function(){
      var object = this.querySelector('#wrapper');
      object.style.width ='0';
      setTimeout(function(){
        console.log(object);
        object.querySelector('h2').style.top = '110%';
        setTimeout(function(){
          console.log(object);
          object.querySelector('#button').style.top = '130%';},300);
      },300);
   }
  }
}
}
