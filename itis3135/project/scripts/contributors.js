/*
This ajax request serves two functions for the contributors page:
1. Fills out the div with id "team" with the position title, description, and tech used
2. Fills out the select with id "position_select" in the form with all job titles
I choose Ajax so adding or removing job positions can be done from the JSON file alone
*/
$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "../project/json/team_positions.json",
        dataType: "json",
        success: function(data)
        {
            //finds the select element in the document
            let select = document.getElementById("position_select");

            //parses the entire "team_positions" array from the JSON file 
            $.each(data.team_positions, function()
            {
                //Languages is an array in the JSON file. A developer may use multiple languages
                let langLength = this['languages'].length;
                let option = document.createElement("option");
    
                //Dynamically adds job position to the select 
                option.innerHTML = this['position'];
                select.appendChild(option);


                //Adds job title and job description to "team"
                $("#team").append
                (
                    "<h4>" + this['position'] + "</h4>" //uncomment when descriptions are added +
                    // "<p>" + this['description'] + "</p>"
                );
                
                //If no specific language/platform is specified, this is skipped
                //Otherwise, all the languages from the "languages" array need to be added to the position
                if(langLength  > 0)
                {
                    $("#team").append
                    (
                        "<h5>" + "Preferred Platforms:" + "</h5>"
                    );
                    for(let i = 0; i < langLength; i++)
                    {
                        $("#team").append
                        (
                            "<ul>" + "<li>" + this['languages'][i] + "</li>" + "</ul>"
                        );
                    }
                }
            });

            return false;
        }
    })

    
});