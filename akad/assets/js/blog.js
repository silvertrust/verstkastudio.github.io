console.log('test Ok');
var object = document.querySelectorAll('#post ul li');
object[0].style.color = '#60606e'; 
console.log(object);
var underline = document.getElementById('underline');
underline.style.width = object[0].offsetWidth+'px';
console.log(underline);
for (let i = 0; i < object.length; i++) {
    const element = object[i];
    element.onclick = function(){
        for (let i = 0; i < object.length; i++) {
            const element = object[i];
            element.style.color='#999999'; 
        }
        this.style.color='#60606e';
        let elemX = this.offsetLeft;
        underline.style.width = this.offsetWidth+'px'; 
        underline.style.transition = 'left ease-in-out 0.3s';
        underline.style.left = elemX+'px';    
        if (this==object[1]){ 
            document.getElementById('firstTab').style.opacity = 0;
            setTimeout(slowFade(document.getElementById('secondTab')),500);
        } 
        else{
            document.getElementById('secondTab').style.opacity = 0;
            setTimeout(function(){
                document.getElementById('secondTab').style.display = 'none';
            },300);
            setTimeout(slowFade(document.getElementById('firstTab')),500);
        }
    } 
}
function slowFade(objective){
    for (var i = 0; i<101; i++){
        objective.style.display = 'inline-block';
        (function(i) {
            setTimeout(function() { 
                let x = i/100;
                objective.style.opacity = x;
            }, 5 * i);
        })(i); 
    }
}
