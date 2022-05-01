/*
Creates thumbnails for all the articles based on the information in blog_entries.json
When one thumbnail is clicked, the article to go with it is displayed
*/
$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "../project/json/blog_entries.json",
        dataType: "json",
        success: function(data)
        {
            //Creates an anchor containing the thumbnail information
            $.each(data.blog_entries, function()
            {
                $("#blog_entries_thumbnails").append
                (
                    '<a href = # id="'+this['topic']+'">' + '<div class=blog_entry>' + "<h3>" + this['title'] + 
                    "</h3>" + "<figure>" + '<img src="'+this['thumbnailImg']+ '">' 
                    + "<figcaption>" + this['description'] + "</figcaption>" + 
                    "</figure>" + "</div>" + "</a>"
                    
                );
            });
            //when the anchor is clicked, the full article is added to the DOM
            $(".container a").on("click", function(e)
            {
                e.preventDefault();
                $("#blog_entry_full").html("");
                let current_ID = this.id;
                $.each(data.blog_entries, function()
                {
                    if(current_ID === this['topic'])
                    {
                        $("#blog_entry_full").append
                        (
                            "<h2>" + this['title'] + "</h2>" + "<figure>" + 
                            '<img src="'+this['image']+ '">' + "<figcaption>"
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