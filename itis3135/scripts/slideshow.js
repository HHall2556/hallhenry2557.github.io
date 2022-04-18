$(document).ready(function()
{
    
    $('.next').on('click', function() 
    {
     let currentImage = $('.active');
     let nextImage= currentImage.next();

     if(nextImage.length)
     {
        currentImage.removeClass('active').css('z-index', -10);
        nextImage.addClass('active').css('z-index', 10);
     }
     else
     {
        currentImage.removeClass('active').css('z-index', -10);
        $('#first').addClass('active').css('z-index', 10);
     }
    });
    $('.previous').on('click', function() 
    {
     let currentImage = $('.active');
     let nextImage= currentImage.prev();

     if(!nextImage.length)
     {
        currentImage.removeClass('active').css('z-index', -10);
        $('#last').addClass('active').css('z-index', 10);

     }
     else
     {
        currentImage.removeClass('active').css('z-index', -10);
        nextImage.addClass('active').css('z-index', 10);
     }
    });
});