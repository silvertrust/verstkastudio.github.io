var object = document.querySelectorAll('.input input, .input textarea');
console.log('Ok');
for (let i = 0; i < object.length; i++) {
    const element = object[i];
    element.onfocus = function(){
        console.log(this);
        console.log(this.parentElement);
        this.parentElement.querySelector('p').style.top = -5+'px';
        this.parentElement.querySelector('p').style.left = 10+'px';
        this.parentElement.querySelector('p').style.color = '#7beec7';
        this.parentElement.querySelector('p').style.backgroundColor = '#ffffff';
        this.parentElement.querySelector('p').style.fontSize = 10 +'px';
    }
}
for (let i = 0; i < object.length; i++) {
    const element = object[i];
    element.onblur = function(){
        console.log(this);
        console.log(this.parentElement);
        if ( this.value ==''){
            this.parentElement.querySelector('p').style.top = 20 +'px';
            this.parentElement.querySelector('p').style.left = 15 +'px';
            this.parentElement.querySelector('p').style.color = '#cccccc';
            this.parentElement.querySelector('p').style.backgroundColor = '#ffffff';
            this.parentElement.querySelector('p').style.fontSize = 12 +'px';
        } 
    }
}