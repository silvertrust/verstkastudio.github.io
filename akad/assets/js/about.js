var elements = document.getElementsByClassName('elem');
function slowFade(object){
    for (var i = 0; i<101; i++){
        object.style.display = 'inline-block';
        (function(i) {
            setTimeout(function() { 
                let x = i/100;
                object.style.opacity = x;
            }, 1 * i);
        })(i); 
    }
}
elements[2].style.opacity ='1';
elements[2].style.maxHeight ='250px';
elements[2].style.display ='block';
var index = 0;
function loop(){
    setTimeout(function(){
        console.log('index = ',index);
        for (let x = 0; x < elements.length; x++) {
            const element = elements[x];
            if(index == x){
                slowFade(element);
                element.style.maxHeight = 250 + 'px';
            }
             else {
                element.style.opacity = '0';
                element.style.maxHeight = '0';
                element.style.display = 'none';
            } 
        }
        if (index <elements.length-1){
            index++;
            loop();
        }
        else {
            index = 0;
            loop();
        }
    },5000);
}
loop();