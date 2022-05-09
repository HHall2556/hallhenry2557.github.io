/*
Creates thumbnails for all the articles based on the information in blog_entries.json
When one thumbnail is clicked, the article to go with it is displayed
*/
$(document).ready(function() 
{

    $.ajax
    ({
        type: "get",
        url: "../project/json/blog_entries.json",
        dataType: "json",
        success: function(data)
        {
            //Creates an anchor containing the thumbnail information
            $.each(data.blog_entries, function()
            {
                //selects current full article
                current_ID = "Features";
                $("#blog_entries_thumbnails").append
                (
                    '<a href = # id="'+this['topic']+'">' + '<div class=blog_entry>' + "<h3>" + this['title'] + 
                    "</h3>" + "<figure>" + '<img src="'+this['thumbnailImg']+ '" alt="'+this['description']+'">' 
                    + "<figcaption>" + this['description'] + "</figcaption>" + 
                    "</figure>" + "</div>" + "</a>"
                    
                );
                //Auto displays the current article choosen above
                if(current_ID === this['topic'])
                {
                    $("#blog_article").append
                    (
                        "<h3>" + this['title'] + "</h3>" + "<figure>" + 
                        '<img src="'+this['image']+ '" alt="'+this['description']+'">' + "<figcaption>"
                         + this['description'] + "</figcaption>" + "</figure>" +
                         "<p>" + this['article'] + "</p>"
                    )
                }

            });
            //when the anchor is clicked, the full article is added to the DOM
            $(".container a").on("click", function(e)
            {
                //prevents screen movement on click
                e.preventDefault();
                //removes previous entry so only current will be displayed 
                $("#blog_article").html("");
                let current_ID = this.id;
                $.each(data.blog_entries, function()
                {
                    if(current_ID === this['topic'])
                    {
                        $("#blog_article").append
                        (
                            "<h3>" + this['title'] + "</h3>" + "<figure>" + 
                            '<img src="'+this['image']+ '" alt="'+this['description']+'">' + "<figcaption>"
                             + this['description'] + "</figcaption>" + "</figure>" +
                             "<p>" + this['article'] + "</p>"
                        )
                    }
                });

            });
            return false;
        }
    })


});