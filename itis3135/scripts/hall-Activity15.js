$(document).ready(function(){
    $(function()
    {
        $("#header").load("header.html"); 
        $("#footer").load("footer.html"); 
    });

    $.ajax({
        type: "get",
        url: "../itis3135/json/activity15/facultyList.json",
        dataType: "json",
        success: function(data) 
        {
            console.log("we made it");
            $("#faculty").html("");
           $.each(data.facultymembers, function()
           {
               console.log(this['full_name']);
                $("#faculty").append
                (
                    '<img src="'+this['image']+'"' + '<br>' + 
                    "<h2>" +this['full_name']+ "</h2>" +
                    "<h3>" +this['department']+ "</h3>" + 
                    "<p>"  +this['bio']+ "</p>"
                );
           });
        }

    });
});
