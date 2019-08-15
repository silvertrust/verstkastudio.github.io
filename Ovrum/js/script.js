
  // niceScroll
  $("html").niceScroll();
    
    
  // Stick menu
  if ( $(window).width() > 767){$(".menu").sticky({topSpacing:0});}
  else {$(".menu").fadeOut;}




  // Menu Scroll to content and Active menu
  var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+145;
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault();
       
	var target = $(this).attr("href");
			

	$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1000, function() {

	});
			
	return false;
   });

  $(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
  });  
  

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    $(".footer").css( "position", "relative" );
    $(".contact").css( "marginBottom", "0" );

}
else 
{

  // FadeTo elements
  if ( $(window).width() > 1023) {  

    tiles = $("h2, h3, .column-one, .column-two, .column-three, .grid li, .contact .content .form, .contact .content .contact-text ").fadeTo(0, 0);

    $(window).scroll(function(d,h) {
      tiles.each(function(i) {
          a = $(this).offset().top + $(this).height();
          b = $(window).scrollTop() + $(window).height();
          if (a < b) $(this).fadeTo(1000,1);
      });
    });

  }

}



  //Menu mobile click
  $( ".icon" ).click(function() {
    $( " ul.menu-click" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });


$(window).load(function(){

$(".preloader").delay(1000).fadeOut("slow")

  // Parallax
  if ($('.parallax-background').length) {
    $(".parallax-background").parallax();
  }
  
  // Parallax
  if ($('.parallax-background-partners').length) {
    $(".parallax-background-partners").parallax();
  }  

});

var object = document.querySelectorAll('.column input, .column textarea');
console.log(object);
for (let i = 0; i < object.length; i++) {
    const element = object[i];
    element.onfocus = function(){
        console.log(this);
        console.log(this.parentElement);
        this.parentElement.querySelector('p').style.top = -2+'px';
        this.parentElement.querySelector('p').style.left = 10+'px';
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
            this.parentElement.querySelector('p').style.top = 15 +'px';
            this.parentElement.querySelector('p').style.left = 15 +'px';
            this.parentElement.querySelector('p').style.backgroundColor = '#ffffff';
            this.parentElement.querySelector('p').style.fontSize = 12 +'px';
        } 
    }
}
