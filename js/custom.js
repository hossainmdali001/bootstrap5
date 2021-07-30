$(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 200){
            $('.navbar').addClass('bgg');
        }
        else {
             $('.navbar').removeClass('bgg');
        }
        });  
})