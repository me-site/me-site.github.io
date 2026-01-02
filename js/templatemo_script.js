var menuDisabled = false;

jQuery(function($) {
    
    $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('#main-wrapper').delay(350).css({'overflow':'visible'});
    });
    
    $(document).ready( function() {


        
        // backstretch for background image
        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, {speed: 400});

	//for image slide on menu item click(normal) and responsive
	$(".change-section").on('click',function(e){
            e.preventDefault();
            if (menuDisabled == false) // check the menu has disabled?
            {
                menuDisabled = true; // disable to menu
                
                var name = $(this).attr('href');
                console.log(name);
                // get image url and assign to backstretch for background
                var imgSrc = $("img"+name+"-img").attr('src');
                $.backstretch(imgSrc, {speed: 400}); //backstretch for background fade in/out
                
                // content zoom in/out
                $("section.active").hide('size',{easing: 'easeInQuart', duration: 400},function(){
                    $(this).removeClass("active");
                    $(name+"-section").show('size',{easing: 'easeOutQuart', duration: 400},function(){
                        $(this).addClass("active");
                        $.backstretch("resize"); // resize the background image
                        menuDisabled = false;
                     });
                });                
            }
            return;
	});
        
    });

});
