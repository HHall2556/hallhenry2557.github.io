/*
This ajax request serves two functions for the contributors page:
1. Fills out the div with id "team" with the position title, description, and tech used
2. Fills out the select with id "position_select" in the form with all job titles
I choose Ajax so adding or removing job positions can be done from the JSON file alone
*/
$(document).ready(function() 
{
    $.ajax
    ({
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
                    '<div class = position_entry id="'+this['id']+'">' + "<h4>" + this['position'] + "</h4>" + "</div>" //uncomment when descriptions are added +
                    // "<p>" + this['description'] + "</p>"
                );
                
                //If no specific language/platform is specified, this is skipped
                //Otherwise, all the languages from the "languages" array need to be added to the position
                if(langLength  > 0)
                {
                    $("#" + this['id']).append
                    (
                        "<h5>" + "Preferred Platforms:" + "</h5>"
                    );
                    for(let i = 0; i < langLength; i++)
                    {
                        $("#" + this['id']).append
                        (
                            "<ul>" + "<li>" + this['languages'][i] + "</li>" + "</ul>"
                        );
                    }
                }
                
            });
            $("#contact_us_form").on("submit", function(e)
            {
                //currently no data validation, but it is there if/when I want to add 
                let isValid = true;
                //prevents the page from reloading on submit
                e.preventDefault();
                //Collects information from the form so can be used to append to the log
                let fname = $("#fname").val();
                let lname = $("#lastname").val();
                let email = $("#user_email").val();
                let position = $("#position_select").val();
                console.log(lname);
                //With a backend like SQL, this would be false if duplicates were attempted to be added
                if(!isValid)
                {
                    
                }
                else
                {
                    //DevOps is plural while the rest are not, so as a should just be as
                    if(position === "DevOps")
                    {
                        $("#form_log").append
                        (
                            "Thank you, "+fname+ " "+lname+", for your interest in joining the team as " + position + ". We will be in contact at the provided email: " +email
                        ).fadeOut(10000);
                    }
                    //the rest are singular so this is correct grammer
                    else
                    {
                        $("#form_log").append
                        (
                            "Thank you, "+fname+ " "+lname+", for your interest in joining the team as a " + position + ". We will be in contact at the provided email: " +email
                        ).fadeOut(10000);
                    }

                }
            });
            return false;
        }
    })

    
});