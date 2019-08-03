window.onload = function(){
var tumbler = false;
  //Движение всей странички вврех
document.getElementById('wrapper').style.top = 0;
  //Кнопка Меню при нажатии

      //Проверяем статус нажатия
  document.getElementById('menu_button').onmouseover = function(){
    console.log(tumbler);
    document.getElementById('menu_button').onclick = function(){
      //console.log('TestOk');
        if (tumbler == false) {
          tumbler = true;
        } else {
          tumbler = false;
        }
        checkStatus();
        console.log(tumbler);
      }
    }
      //Анимация Кнопки меню
 function checkStatus(){
  if (tumbler) {
    showMenu();
  } else {
    hideMenu();
  }
 }
 // Анимация основного меню
  function showMenu(){
    const objects = document.querySelectorAll('.button_line');
    for (let i = 0; i < objects.length; i++) {
      const object = objects[i];
      object.style.width = '30px';
    }
    document.getElementById('mbt-ul').classList.remove('nonActive');
    document.getElementById('mbt-ul').classList.add('activity');
  }

  function hideMenu(){
    const objects = document.querySelectorAll('.button_line');
    objects[0].style.width = '30px';
    objects[1].style.width = '15px';
    objects[2].style.width = '25px';
    document.getElementById('mbt-ul').classList.remove('activity');
    document.getElementById('mbt-ul').classList.add('nonActive');
  }
  //Анимация вторичного меню
  var status = false;
  console.log('1st - '+status);
  const containers = document.getElementsByClassName('container');
  for (let s = 0; s < containers.length; s++) {
    const container = containers[s];
    container.onclick = function(){
      if (status == true) {
        status = false;
        this.querySelector('ul').classList.remove('activity');
        this.querySelector('ul').classList.add('nonActive');
      }
        else { 
          status = true;
          this.querySelector('ul').classList.remove('nonActive');
          this.querySelector('ul').classList.add('activity');
        }
        console.log('2nd - '+status);
      }
    }
    //ПАРАЛАКС ЭФЕКТ БЛОКА CHOOSE и PORTFOLIO
var availWidth = window.screen.availWidth;
var availHeight = window.screen.availHeight; //Определение высоты экрана без меню  ПУСК
console.log(availHeight +'x'+availWidth);

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
    }, 150 * i);
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


var heightChoose = document.getElementById('choose').offsetHeight; //предваритедбная высота Choose
var heightContent = document.getElementById('choose_content').offsetHeight;
console.log('HeightChoose = '+ heightChoose);
console.log('HeighContent = '+ heightContent);
document.getElementById('choose').style.height = heightChoose + heightContent +'px';//высота с учетом контента
var chooseY = document.getElementById('choose').offsetTop; //Высота до верха страницы
var CordinateY = document.getElementById('choose').offsetHeight; //ВЫСОТА БЛОКА Choose
function equalChooseHeight(){     //ФУНКЦИЯ  ПРОВЕРКИ АНИМАИРОВАТЬ ЛИ БЛОК Choose
  const y = window.pageYOffset;    // Y КООРДИНАТА ПРОКРУТКИ СТРАНИЦЫ
  //console.log(y);
  if (y >= (chooseY - ((Math.round(2*(availHeight/3))+100))) && (y<(chooseY+CordinateY) )){  //Приделы Y когда анимация активна
  console.log('Function equalChooseHeight = Ok');
  document.getElementById('choose_content').style.top = (heightChoose-20) +'px';// сама анимация блока
  }
 // equalPortfolioHeight();
}
equalChooseHeight();

window.onscroll = equalChooseHeight;

//ПАРАЛАКС ЭФЕКТ БЛОКА PORTFOLIO
var heightPOrtfolio = document.getElementById('select_block').offsetHeight; //ВЫСОТА БЛОКА Portfolio
var portfolioY = document.getElementById('select_block').offsetTop;//Высота до верха страницы
/* equalPortfolioHeight();
function equalPortfolioHeight(){     //ФУНКЦИЯ  ПРОВЕРКИ АНИМАИРОВАТЬ ЛИ БЛОК Portfolio
const y = window.pageYOffset;    // Y КООРДИНАТА ПРОКРУТКИ СТРАНИЦЫ
if (y >= (portfolioY - (Math.round((2*(availHeight/3))+30))) && (y<(portfolioY+heightPOrtfolio) )){  //Приделы Y когда анимация активна
console.log('Function equalPortfolioHeight = Ok');
}
}*/

// equalScreenWidthAdd(document.querySelector('#category li')); // Активация первого пункта меню при хагрузке старницы
// setInterval(function(){animatePhoto(all)},200);
//АНИМАЦИЯ КУРСОРА МЕНЮ ПОРТФОЛИО
} 