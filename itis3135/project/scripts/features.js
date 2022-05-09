/*
Adds all the features from the features.JSON file and then turns that dynamically entered information into vertical tabs
vertical part is done with features.css
*/
$(document).ready(function() 
{

    $.ajax
    ({
        type: "get",
        url: "../project/json/features.json",
        dataType: "json",
        success: function(data)
        {
            //by using count, each anchor can have unqiue ids based on the amount of entries in the JSON file
            let count = 0;
            
            //for tabs, first create a list with anchors that will point to the corresponding divs
            $.each(data.feature_set, function()
            {
                count++;
                $("#feature_tabs ul").append
                (
                    "<li>" + '<a href="#tabs-'+count+'">' + this['feature'] + "</a>" + "</li>"
                );
            });
            count = 0;
            //by using count, each div can have unqiue ids corresponding to the anchors based on the amount of entries in the JSON file
            $.each(data.feature_set, function()
            {
                count++;
                $("#feature_tabs").append
                (
                    '<div id=tabs-'+count+'>' + '<h3>' + this['feature'] + '</h3>' +
                    '<p>' + this['feature_bio'] + '</p>'
                );
            });
            //adds the vertical tabs class so this can be a vertical tabs
            $( "#feature_tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix");
            $( "#feature_tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
            return false;
            
        }
    })

    
});