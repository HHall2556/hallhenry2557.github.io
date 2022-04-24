$(document).ready(function() {

    let imageUrls = [];
    let imgCache = document.getElementById("image_list");
    $('a').on("click", function(e) {
        e.preventDefault();
    });
    $(function()
    {
        $("#header").load("header.html"); 
        $("#footer").load("footer.html"); 
    });
    // preload the image for each link
    $(function()
    {
        const thumbnail_list = document.getElementById("thumbnail_list");
        const thumbnail_list_children = thumbnail_list.getElementsByTagName("a").length;
        let image = $('.current_img');
        let imagePath = image.prop('href');
        for(let i = 0; i < thumbnail_list_children; i++)
        {
            imageUrls.push(imagePath);
            image = image.next();
            imagePath = image.prop('href');
            if(i > 0)
            {
                preload(imageUrls[i], i);
            }
            
        }
    });
    function preload(url, id)
    {
        let img = new Image();
        img.src = url;
        img.id = id;
        //console.log(img.id);
        img.style = "position: relative;display:none;";
        imgCache.appendChild(img);
 
    }
    // set up the event handlers for each link
    $('#thumbnail_list a').on('click', function()
    {
        let imageId = $(this).attr('id');
        let current_caption = $('.current_caption');
        let currentImage= $('.current_image');
        current_caption.fadeOut(1000, function()
        {
            let current_caption = $('.current_caption');
            let clickedCaptionTitle = document.getElementById("link_1").getAttribute('title');
            let clickedCaption = document.getElementById("caption");

            current_caption.fadeIn(1000);

            switch (imageId) 
            {
                case 'link_1':
                   clickedCaptionTitle = document.getElementById("link_1").getAttribute('title');
                    break;
                case 'link_2':
                    clickedCaptionTitle = document.getElementById("link_2").getAttribute('title');
                    break;
                case 'link_3':
                    clickedCaptionTitle = document.getElementById("link_3").getAttribute('title');
                    break; 
                case 'link_4':
                    clickedCaptionTitle = document.getElementById("link_4").getAttribute('title');
                    break;
                case 'link_5':
                     clickedCaptionTitle = document.getElementById("link_5").getAttribute('title');
                    break;
                case 'link_6':
                    clickedCaptionTitle = document.getElementById("link_6").getAttribute('title');
                    break;
            }
           clickedCaption.innerHTML = clickedCaptionTitle;
        });
        currentImage.fadeOut(1000, function()
        {
            let currentImg= $('.current_image');

            currentImage.fadeIn(1000);

            switch (imageId) 
            {
                case 'link_1':
                   currentImg.attr("src", imageUrls[0]);
                    break;
                case 'link_2':
                    currentImg.attr("src", imageUrls[1]);
                    break;
                case 'link_3':
                    currentImg.attr("src", imageUrls[2]);
                    break; 
                case 'link_4':
                    currentImg.attr("src", imageUrls[3]);
                    break;
                case 'link_5':
                    currentImg.attr("src", imageUrls[4]);
                    break;
                case 'link_6':
                    currentImg.attr("src", imageUrls[5]);
                    break;
            }

        });
    });

}); // end ready