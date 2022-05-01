/*
Adds all the features from the features.JSON file and then turns that dynamically entered information into an accordion
*/
$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "../project/json/features.json",
        dataType: "json",
        success: function(data)
        {
            $("#feature_tabs").html("")
            $.each(data.feature_set, function()
            {
                
                $("#feature_tabs").append
                (
                    "<h3>" + this['feature'] + "</h3>" + "<div>" +
                    "<p>" + this['feature_bio'] + "</p>" + "</div>"
                );
            });
           $("#feature_tabs").accordion({collapsible: true, active: false});
            return false;
            
        }
    })

    
});