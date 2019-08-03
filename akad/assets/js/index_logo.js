     //СМЕНА ЛОГОТИПА
     var i = 0;                     
     var logos = document.getElementsByClassName('logo_Teg');
     logos[0].style.transition = 'opacity 2s ease-in-out';
     logos[1].style.transition = 'opacity 2s ease-in-out';
     logos[0].style.opacity = '1';
     function myLoop () {           
       setTimeout(function () {   
      // console.log('hello');
       if (i==0){
         //logos[0].style.opacity = '1';
         blickInOut(function(){
           logos[1].style.opacity = '1';
           //alert('Ok');
         })
       }
       else{
         blickOutIn(function(){
           logos[0].style.opacity = '1';
         });      
       }
       i++;                     
       if (i <2) {            
          myLoop();             
       }   
       if (i==2){
         i=0;
         myLoop();
       }                     
       }, 4000);
     }
   myLoop();   
   function blickInOut(f){
     var callback = f || function(){};
     logos[0].style.opacity = '0';
     callback();
   }
   function blickOutIn(f){
     var callback = f || function(){};
     logos[1].style.opacity = '0';
     callback();
   }