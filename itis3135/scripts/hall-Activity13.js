$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "../itis3135/json/team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
              $.each(data.teammembers, function()
              {
                $("#team").append
                ("<h3>" + this['name'] + "</h3>" +
                     "<h4>" + this["title"] + "</h4>" +
                     "<br>" + this["bio"] + "<br>");
              });
        }
    });
});