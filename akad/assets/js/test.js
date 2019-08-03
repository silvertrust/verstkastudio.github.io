window.onload = function(){
    console.log('Load Test = Ok');
    document.querySelector('.img').onmouseover = function(){
        console.log('Mouse event - Ok');
        let object = document.getElementById('wrapper');
        object.style.zIndex = '10';
        object.style.width = 263 + 'px';
        setTimeout(function(){
            let object = document.querySelector('h2');
            object.style.transition ='top 0.3s ease-in-out';
            object.style.top = '55px';
            setTimeout(function(){
                let object =document.querySelector('#button');
                object.style.transition ='top 0.3s ease-in-out';
                object.style.top = '95px';
            },200);
        },300);
    }
    document.querySelector('.img').onmouseleave = function(){
        console.log('Mouse event - Ok');
        let object = document.getElementById('wrapper');
        object.style.zIndex = '0';
        object.style.width = 0 + 'px';
        setTimeout(function(){
            let object = document.querySelector('h2');
            object.style.transition ='top 0.3s ease-in-out';
            object.style.top = '200px';
            setTimeout(function(){
                let object =document.querySelector('#button');
                object.style.transition ='top 0.3s ease-in-out';
                object.style.top = '220px';
            },200);
        },300);
    }
    var testItem = document.querySelectorAll('.img');
    function fadeElem(element){
        console.log(element);
        for (var i = 0; i < element.length; i++) {
            (function(i) {
                setTimeout(function() { 
                    slowFade(element[i]);
                   // element[i].style.display = 'inline-block';
                    console.log(i); }, 200 * i);
            })(i); 
        }
      }
      function hideElem(element){
        console.log(element);
        for (var i = 0; i < element.length; i++) {
            (function(i) {
                setTimeout(function() { 
                    element[i].style.opacity = '0';
                    element[i].style.display = 'none';
                    console.log(i); }, 200 * i);
            })(i); 
        }
      }
      fadeElem(testItem);
      document.getElementById('1').onclick = function(){
          fadeElem(testItem);
      }
      document.getElementById('2').onclick = function(){
        setTimeout(function(){hideElem(testItem);},500);
    }
    function slowFade(object){
        console.log(object);
        for (var i = 0; i<101; i++){
            object.style.display = 'inline-block';
            (function(i) {
                setTimeout(function() { 
                    let x = i/100;
                    object.style.opacity = x;
                }, 10 * i);
            })(i); 
        }
    }
    function slowHide(object){
        
    }
    var y = document.querySelector('.img');
   // slowFade(y);
}