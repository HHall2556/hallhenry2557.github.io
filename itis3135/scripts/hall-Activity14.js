$(document).ready(function() {

    $('.navigation a').on('click', function(e)
    {
        e.preventDefault();
        let anchor_title = $(this).attr("title");
        let urlPath = "";
        console.log(anchor_title);
        switch(anchor_title)
        {
            case "toobin":
                urlPath = "../itis3135/json/activity14/toobin.json";
                break;
            case "sorkin":
                urlPath = "../itis3135/json/activity14/sorkin.json";
                break;
            case "chua":
                urlPath = "../itis3135/json/activity14/chua.json";
                break;
            case "sampson":
                urlPath = "../itis3135/json/activity14/sampson.json";
                break;
            default:
                console.log("error in anchor event listener switch");
        }
        console.log(urlPath);
        $.ajax({
            type: "get",
            url: urlPath,
            dataType: "json",
            success: function(data)
            {
                $("#container main").html("");
                $.each(data.speakers, function()
                {
                    $("#container main").append
                    (
                        "<h1>" + this['title'] + "</h1>" + 
                        "<h2>" + this['month'] + "</h2>" + 
                        "<h3>" + this['speaker'] + "</h3>" + 
                        '<img src="'+this['image']+'"' + 
                        "<p>" + this['text'] + "</p>"
                    );
                });
                return false;
            }
        })
    })
	
}); // end ready