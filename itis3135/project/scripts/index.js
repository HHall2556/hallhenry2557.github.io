/*
For the features, I used an Ajax request, so The JSON file already exists.
Adding to the "highlighted_features" div dynamically makes more sense
by changing "highlighted" attribute true/false changes which are displayed.
*/
$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "../project/json/features.json",
        dataType: "json",
        success: function(data)
        {
            $("#highlighted_features").html("");
            $.each(data.feature_set, function()
            {
                //all features are not highlighted, I only want to display highlighted features
                if(this['highlighted'] === "true")
                {
                    $("#highlighted_features").append
                    (
                        "<h3>" + this['feature'] + "</h3>" + 
                        "<p>" + this['feature_bio'] + "</p>" 
                    );
                }
            });

            //creates the slider on the homepage
            $("#stock_slider").bxSlider({
                auto:true,
                minSlides: 1,
                maxSlides: 1,
                slideHeight: 810,
                slideWidth: 600,
                slideMargin: 10,
                randomStart: true,
                pause: 5000,
                captions: true,
                pager: true,
                pagerType: 'short'
            });
            return false;
        }
    })

    
});